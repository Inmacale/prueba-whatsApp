import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabPage } from './page/tab/tab.page';

const routes: Routes = [

  {
    path: '',
    component: TabPage,
    children: [

      {
        path: '',
        redirectTo: 'chats',
        pathMatch: 'full'
      },
      {
        path: 'community',
        loadChildren: () => import('./page/community/community.module').then(m => m.CommunityPageModule)
      },
      {
        path: 'chats',
        loadChildren: () => import('./page/chats/chats.module').then(m => m.ChatsPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./page/news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'calls',
        loadChildren: () => import('./page/calls/calls.module').then(m => m.CallsPageModule)
      },
    ]
  },

  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then(m => m.HomePageModule)
  },


  {
    path: 'chat-contact/:id',
    loadChildren: () => import('./page/chat-contact/chat-contact.module').then(m => m.ChatContactPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
