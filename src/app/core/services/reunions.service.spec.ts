import { ReunionsService } from './reunions.service';

describe('ReunionsService', () => {
  it('creates a revocable simple access link for one meeting', () => {
    const http = { post: vi.fn().mockReturnValue({}) };
    const service = new ReunionsService(http as any);

    service.createSimpleAccessLink('meeting-id', {
      label: 'Anciens',
      validHours: 48,
      maxUses: 20,
    });

    expect(http.post).toHaveBeenCalledWith(
      expect.stringContaining('/meeting-access/meeting-id'),
      { label: 'Anciens', validHours: 48, maxUses: 20 },
    );
  });
});
