import {Component} from '@angular/core';
import {ChatService} from "./chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chatbotVip';
  messages: any[];

  constructor(protected chatShowcaseService: ChatService) {
    this.messages = this.chatShowcaseService.loadMessages();
  }

  sendMessage(event: any) {
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      user: {
        name: 'Guest',
        avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      },
    });
    this.reply(event);
  }

  reply(event: any) {
    this.chatShowcaseService.postHandleMessage(event.message).subscribe(
      (data: any) =>
        this.messages.push({
            text: data.reply,
            date: new Date(),
            reply: false,
            user: {
              name: 'Bot',
              avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png'
            }
          }
        )
    )
  }
}
