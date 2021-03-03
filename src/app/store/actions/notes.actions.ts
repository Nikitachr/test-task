import { Action } from '@ngrx/store';

import { Note } from 'src/app/models/note.model';

export enum NotesActionTypes {
  addNote = '[Catalog] Update params',
}

export class AddNoteAction implements Action {
  readonly type = NotesActionTypes.addNote;
  constructor(public payload: Note) {
  }
}

export type NotesActions = AddNoteAction;
