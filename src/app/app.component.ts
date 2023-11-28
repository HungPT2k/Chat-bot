import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chatbotVip';
  public messages!: any[];

  constructor(protected chatShowcaseService: ChatService) {
    this.messages = this.chatShowcaseService.loadMessages();
    this.chatShowcaseService
      .postHandleMessage('kết thúc')
      .subscribe((data: any) => console.log(data));
  }

  sendMessage(message: string) {
    this.messages.push({
      text: message,
      date: new Date(),
      reply: true,
      user: {
        name: 'Guest',
        avatar:
          'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      },
    });
    this.reply(message);
  }

  reply(message: string) {
    this.chatShowcaseService
      .postHandleMessage(message)
      .subscribe((data: any) => {
        if (data.isYesNo) {
          this.messages.push({
            type: 'button',
            customMessageData: data.reply,
            reply: false,
            date: new Date(),
            user: {
              name: 'Bot',
              avatar:
                'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
            },
          });
        } else {
          this.messages.push({
            text: data.reply,
            date: new Date(),
            reply: false,
            user: {
              name: 'Bot',
              avatar:
                'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
            },
          });
        }
      });
  }

  handleSelect(message: string) {
    let text = 'Có';
    if (message == 'NO') {
      text = 'Không';
    }
    this.messages.push({
      text: text,
      date: new Date(),
      reply: true,
      user: {
        name: 'Guest',
        avatar:
          'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      },
    });
    this.reply(message);
  }
}
