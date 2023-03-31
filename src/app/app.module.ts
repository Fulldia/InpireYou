import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedPictureComponent } from './shared-picture/shared-picture.component';
import { SharedSpotComponent } from './shared-spot/shared-spot.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedPictureComponent,
    SharedSpotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
