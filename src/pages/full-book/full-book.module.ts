import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullBookPage } from './full-book';

@NgModule({
  declarations: [
    FullBookPage,
  ],
  imports: [
    IonicPageModule.forChild(FullBookPage),
  ],
})
export class FullBookPageModule {}
