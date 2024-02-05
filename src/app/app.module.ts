import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { TabPage } from './page/tab/tab.page';

import { ImageErrorDirective } from './directive/image-error.directive';
import { InfohttpinterceptorInterceptor } from './interceptor/infohttpinterceptor.interceptor';

@NgModule({
  declarations: [AppComponent, TabPage, ImageErrorDirective,],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  {provide: HTTP_INTERCEPTORS, useClass: InfohttpinterceptorInterceptor, multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule { }
