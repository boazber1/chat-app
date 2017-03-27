import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { ChatComponent } from './chat/chat.component';
import { ContactsComponent } from './chat/contacts/contacts.component';
import { LiveChatComponent } from './chat/live-chat/live-chat.component';
import { MessageComponent } from './chat/message/message.component';
import { UsersComponent } from './chat/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ChatComponent,
    ContactsComponent,
    LiveChatComponent,
    MessageComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
