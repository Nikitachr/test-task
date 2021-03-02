import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { AppComponent } from 'src/app/app.component';
import { DiaryComponent } from 'src/app/diary/diary.component';
import { NoteComponent } from 'src/app/note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
