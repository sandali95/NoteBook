import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddNotePage } from '../pages/add-note/add-note';
import { NoteServiceProvider } from '../providers/note-service/note-service';
import { ViewNotePage } from '../pages/view-note/view-note';
import { UpdateNotePage } from '../pages/update-note/update-note';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddNotePage,
    ViewNotePage,
    UpdateNotePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddNotePage,
    ViewNotePage,
    UpdateNotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteServiceProvider
  ]
})
export class AppModule {}
