import { expect, test } from '@playwright/test';

test('un visiteur rejoint une réunion privée en deux actions', async ({ page }) => {
  const jwtPayload = Buffer.from(JSON.stringify({
    exp: Math.floor(Date.now() / 1000) + 3600,
    role: 'visitor',
  })).toString('base64url');
  const accessToken = `header.${jwtPayload}.signature`;
  let acceptCalls = 0;
  let joinCalls = 0;

  await page.route('**/api/meeting-access/accept/token', async route => {
    acceptCalls += 1;
    await route.fulfill({
      status: 201,
      contentType: 'application/json',
      body: JSON.stringify({
        access_token: accessToken,
        meetingId: 'meeting-1',
        member: {
          id: 'visitor-1',
          firstName: 'Marie',
          lastName: 'Test',
          role: 'visitor',
        },
      }),
    });
  });
  await page.route('**/api/reunions/meeting-1/join', async route => {
    joinCalls += 1;
    await route.fulfill({
      status: 201,
      contentType: 'application/json',
      body: JSON.stringify({
        jitsiToken: 'jitsi-token',
        jitsiUrl: 'https://meet.example.test',
        roomId: 'room-1',
        isModerator: false,
        displayName: 'Marie Test',
        email: '',
        role: 'visitor',
        reconnectToken: 'reconnect-token',
        participantId: 'participant-1',
        meeting: { id: 'meeting-1', title: 'Réunion test', status: 'live' },
      }),
    });
  });
  await page.route('https://meet.example.test/**', route => route.abort());

  await page.goto('/reunions/invitation?access=link.secret');
  await expect(page.getByRole('heading', { name: 'Ouverture de la réunion' })).toBeVisible();

  await page.getByPlaceholder('Votre prénom et votre nom').fill('Marie Test');
  await page.getByRole('button', { name: 'Entrer dans la réunion' }).click();

  await expect(page).toHaveURL(/\/reunions\/meeting-1\/salle/);
  expect(acceptCalls).toBe(1);
  expect(joinCalls).toBe(1);
});
