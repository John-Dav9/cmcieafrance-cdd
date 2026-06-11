import { of } from 'rxjs';
import { MemberAuthService } from './member-auth.service';

describe('MemberAuthService', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it('stores meeting access sessions only for the current browser session', () => {
    const http = {
      post: vi.fn().mockReturnValue(of({
        access_token: 'header.eyJleHAiOjQxMDI0NDQ4MDB9.signature',
        meetingId: 'meeting-id',
        member: {
          id: 'guest-id',
          firstName: 'Jean',
          lastName: 'Test',
          role: 'visitor',
          meetingAccessFor: 'meeting-id',
        },
      })),
    };
    const service = new MemberAuthService(http as any);

    service.acceptMeetingAccess('token', 'Jean Test').subscribe();

    expect(sessionStorage.getItem('cmciea_member_token')).toContain('meetingAccessFor');
    expect(localStorage.getItem('cmciea_member_token')).toBeNull();
  });

  it('migrates an old persistent session to sessionStorage', () => {
    localStorage.setItem('cmciea_member_token', JSON.stringify({
      id: 'member-id',
      role: 'member',
      access_token: 'header.eyJleHAiOjQxMDI0NDQ4MDB9.signature',
    }));

    const service = new MemberAuthService({} as any);

    expect(service.isLoggedIn()).toBe(true);
    expect(localStorage.getItem('cmciea_member_token')).toBeNull();
    expect(sessionStorage.getItem('cmciea_member_token')).not.toBeNull();
  });
});
