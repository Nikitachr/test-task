import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { notesReducer, NotesState } from 'src/app/store/reducers/notes.reducer';

export interface AppState {
  notesState: NotesState;
}

export const reducers: ActionReducerMap<AppState> = {
  notesState: notesReducer
};

export const selectNotes = (state: AppState) => state.notesState.notes;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
