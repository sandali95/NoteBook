import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateNotePage } from './update-note';

@NgModule({
  declarations: [
    UpdateNotePage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateNotePage),
  ],
})
export class UpdateNotePageModule {}
