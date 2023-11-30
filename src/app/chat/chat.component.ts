import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { ChatService2 } from './chat.service';

@Component({
  selector: 'chat-component',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  public user: any;
  ngOnInit(): void {
    const tmp = localStorage.getItem('user');
    this.user = JSON.parse(tmp!);
  }
  public messages!: any[];

  constructor(
    protected chatShowcaseService: ChatService,
    private _chatService: ChatService2
  ) {
    this.messages = this.chatShowcaseService.loadMessages();
    this.chatShowcaseService
      .postHandleMessage('kết thúc','')
      .subscribe((data: any) => console.log(data));
  }

  sendMessage(message: string) {
    this.messages.push({
      text: message,
      date: new Date(),
      reply: true,
      user: {
        name: this.user.name,
        avatar:
          'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      },
    });
    this.reply(message);
  }

  reply(message: string) {
    this.chatShowcaseService
      .postHandleMessage(message,this.user.id)
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
   // send mail
    this._chatService.sendEmail(this.user).subscribe((res) => {
      console.log('res mail;', res);
    });
  }
}
