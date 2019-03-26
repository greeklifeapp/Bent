import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FraternitiesPage } from './fraternities';

@NgModule({
  declarations: [
    FraternitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(FraternitiesPage),
  ],
})
export class FraternitiesPageModule {}
