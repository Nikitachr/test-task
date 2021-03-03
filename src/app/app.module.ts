import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ReactiveComponentModule } from '@ngrx/component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from 'src/app/app.component';
import { DiaryComponent } from 'src/app/diary/diary.component';
import { NoteComponent } from 'src/app/note/note.component';
import { reducers, metaReducers } from 'src/app/store/reducers';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PickerModule,
    ReactiveComponentModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
