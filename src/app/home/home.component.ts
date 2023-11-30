import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public toggleChatBot!: boolean;
  public messages!: any[];
  public user!: any;
  public statusLogin: any;
  public toggleChat2!: boolean;
  public isLogin: boolean = false;
  public userName!: string;
  constructor(
    private _router: Router,
    protected chatShowcaseService: ChatService
  ) {
    this.messages = this.chatShowcaseService.loadMessages();
    this.chatShowcaseService
      .postHandleMessage('kết thúc','')
      .subscribe((data: any) => console.log(data));
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    const tmp = localStorage.getItem('user');
    this.userName = JSON.parse(tmp!).name;
    if (this.user) {
      this.statusLogin = 'Đăng xuất';
      this.toggleChat2 = true;
      this.isLogin = true;
    } else {
      this.statusLogin = 'Đăng nhập';
      this.toggleChat2 = false;
    }
    this.toggleChatBot = false;
  }
  login() {
    this._router.navigate(['/login']);
  }

  toggleChat() {
    this.toggleChatBot = !this.toggleChatBot;
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
      .postHandleMessage(message,'')
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
