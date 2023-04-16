import { AppComponent } from './app.component';
import { SharedPictureComponent } from './shared-picture/shared-picture.component';
import { SharedSpotComponent } from './shared-spot/shared-spot.component';
import { PhotographComponent } from './photograph/photograph.component';
import { NavbarComponent } from './navbar/navbar.component';
import { registerLocaleData } from '@angular/common';

//dates locales fr
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as fr from '@angular/common/locales/fr';
import { SharedPictureListComponent } from './shared-picture-list/shared-picture-list.component';
import { PhotographerListComponent } from './photographer-list/photographer-list.component'



@NgModule({
  declarations: [
    AppComponent,
    SharedPictureComponent,
    SharedSpotComponent,
    PhotographComponent,
    NavbarComponent,
    SharedPictureListComponent,
    PhotographerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}