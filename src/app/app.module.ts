import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {
  NbButtonModule,
  NbChatModule,
  NbIconModule,
  NbLayoutModule,
  NbListModule,
  NbTableModule,
  NbThemeModule
} from '@nebular/theme';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbChatModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbEvaIconsModule,
    NbButtonModule,
    NbTableModule,
    NbListModule,
    NbIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
