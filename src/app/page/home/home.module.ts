import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CommunityPage } from '../community/community.page';
import { ChatsPage } from '../chats/chats.page';
import { NewsPage } from '../news/news.page';
import { CallsPage } from '../calls/calls.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CommunityPage, ChatsPage, NewsPage, CallsPage]
})
export class HomePageModule { }
