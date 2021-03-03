import { Note } from 'src/app/models/note.model';
import { NotesActions, NotesActionTypes } from 'src/app/store/actions/notes.actions';

export interface NotesState {
  notes: Note[];
}

export const initialState: NotesState = {
  notes: []
};

export function notesReducer(state = initialState, action: NotesActions): NotesState {
  switch (action.type) {
    case NotesActionTypes.addNote:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    default:
      return state;
  }
}
