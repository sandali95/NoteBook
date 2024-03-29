import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { UpdateNotePage } from '../update-note/update-note';


@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  note : Note;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private noteService : NoteServiceProvider) {
    this.note = this.navParams.get('note');
  }

  deleteNote(createDate : number){
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }

  updateNote(createDate:number){
    this.navCtrl.push(UpdateNotePage,{note : this.note});
  }

  

}
