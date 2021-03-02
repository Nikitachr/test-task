import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiaryComponent {

  @Output() createNote = new EventEmitter<string>();
  public value = '';
  public isEmoji: boolean;

  constructor() { }

  onSave(): void {
    this.createNote.emit(this.value);
    this.isEmoji = false;
    this.value = '';
  }

  showEmojis(): void {
    this.isEmoji = true;
  }

  closeEmojis(): void {
    this.isEmoji = false;
  }

  addEmoji(event: EmojiEvent): void {
    this.value += event.emoji.native;
  }

}
