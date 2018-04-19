import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { FormGroup, Validator , FormControl } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-update-note',
  templateUrl: 'update-note.html',
})
export class UpdateNotePage {

  formGroup:FormGroup;
  note:Note

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.note = this.navParams.get('note');
    this.formGroup = new FormGroup({
      title : new FormControl(),
      content : new FormControl(),
      date : new FormControl()
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateNotePage');
  }

}
