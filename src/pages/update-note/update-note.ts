import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { FormGroup, Validator , FormControl } from '@angular/forms';
import { ViewNotePage } from '../view-note/view-note';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-update-note',
  templateUrl: 'update-note.html',
})
export class UpdateNotePage {

  formGroup:FormGroup;
  note:Note

  constructor(public navCtrl: NavController, public navParams: NavParams , private noteService:NoteServiceProvider) {
    this.note = this.navParams.get('note');
    this.formGroup = new FormGroup({
      title : new FormControl(this.note.title),
      content : new FormControl(this.note.content),
      date : new FormControl(this.note.date)
    });
  }

  updateNote(value){
   this.noteService.deleteNote(this.note.createDate);
   this.noteService.saveNote(value);
   this.navCtrl.pop();
  }

}
