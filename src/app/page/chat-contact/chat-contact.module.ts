import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatContactPageRoutingModule } from './chat-contact-routing.module';

import { ChatContactPage } from './chat-contact.page';
import { MessageComponent } from 'src/app/component/message/message.component';
import { MessageDirective } from 'src/app/directive/message.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatContactPageRoutingModule,

  ],
  declarations: [ChatContactPage, MessageComponent, MessageDirective]
})
export class ChatContactPageModule { }
