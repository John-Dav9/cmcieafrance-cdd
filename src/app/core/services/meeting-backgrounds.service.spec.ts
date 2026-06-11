import { MeetingBackgroundsService } from './meeting-backgrounds.service';

describe('MeetingBackgroundsService', () => {
  it('uploads a named image as multipart data', () => {
    const http = { post: vi.fn().mockReturnValue({}) };
    const service = new MeetingBackgroundsService(http as any);
    const file = new File(['image'], 'fond.jpg', { type: 'image/jpeg' });

    service.create('Montagne', file);

    const [, body] = http.post.mock.calls[0];
    expect(body).toBeInstanceOf(FormData);
    expect(body.get('label')).toBe('Montagne');
    expect(body.get('file')).toBe(file);
  });
});
