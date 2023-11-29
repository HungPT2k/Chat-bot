import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbChatModule,
  NbIconModule,
  NbLayoutModule,
  NbListModule,
  NbTableModule,
  NbThemeModule,
} from '@nebular/theme';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ChatComponent } from './chat/chat.component';
const routes: Route[] = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'chat', component: ChatComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScheduleComponent,
    HomeComponent,
    ChatComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NbChatModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbEvaIconsModule,
    NbButtonModule,
    NbTableModule,
    NbListModule,
    NbIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
