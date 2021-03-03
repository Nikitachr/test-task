import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Note } from 'src/app/models/note.model';
import { AppState, selectNotes } from 'src/app/store/reducers';
import { AddNoteAction } from 'src/app/store/actions/notes.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'test-task';

  public notes = this.store.select(selectNotes);

  constructor(
    private store: Store<AppState>
  ) {
  }

  onCreateNote(event: string): void {
    if (!event?.trim()?.length) {
      return;
    }

    const newNote: Note = {
      date: new Date(),
      text: event
    };

    this.store.dispatch(new AddNoteAction(newNote));
  }

}
