import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from '../../models/note.model';

@Injectable()
export class NoteServiceProvider {

  private notes : Note[] = [];
  private note : Note;

  constructor(public storage:Storage) {
    
  }

  saveNote(note:Note){
    note.createDate = Date.now();
    this.notes.push(note);
    this.storage.set('notes',this.notes);
  }

  getAllNotes(){
    //return this.notes.slice();
    return this.storage.get('notes').then(
      (notes) => {
        this.notes = notes == null ? [] : notes;
        return this.notes.slice();
      }
    );
  }

  deleteNote(createDate:number){
     this.notes = this.notes.filter((note)=>{
       return note.createDate !== createDate;
     });
     this.storage.set('notes',this.notes);
  }

  getNote(createDate:number){
    return this.storage.get('notes').then(
      (notes)=>{
        this.note = notes.slice().find(
          r=>r.createDate === createDate);
          return this.note;
      }
    );
  }

  updateNote(updatedNote:Note){
    this.getNote(updatedNote.createDate).then((n)=>{
      this.note = n;
      this.deleteNote(n.createDate);
      this.saveNote(updatedNote);
    });
    console.log(this.notes);
    return updatedNote;
  }

}
