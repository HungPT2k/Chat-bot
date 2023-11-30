import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient) {}

  ENDPOINT_URL = 'http://localhost:8080/nutrition';

  loadMessages() {
    return [
      {
        text: 'Chào mừng bạn đến buổi tư vấn hôm nay vui lòng trả lời những câu hỏi sau để chuyên gia có chế độ hợp lý cho bạn!',
        date: new Date(),
        reply: false,
        user: {
          name: 'Bot',
          avatar:
            'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
        },
      },
      {
        text: 'Để bắt đầu với buổi tư vấn hãy gõ sẵn sàng',
        date: new Date(),
        reply: false,
        user: {
          name: 'Bot',
          avatar:
            'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
        },
      },
    ];
  }

  postHandleMessage(message: string, userId: any): Observable<any> {
    const params = new HttpParams()
      .set('message', message)
      .set('userId', userId);
    return this.http.get<any>(this.ENDPOINT_URL + `/reply`, { params });
  }
}
// chuyen thanh post duoc không
