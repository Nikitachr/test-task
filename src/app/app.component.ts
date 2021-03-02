import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'test-task';

  public notes: Note[] = [];

  constructor() {
  }

  onCreateNote(event: string): void {
    if (!event?.trim()?.length) {
      return;
    }
    this.notes.push({ text: event, date: new Date() });
  }

}
