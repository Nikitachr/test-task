import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-post',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent {

  @Input() note: Note;

  constructor() { }

}
