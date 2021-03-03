import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';

import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiaryComponent {

  @ViewChild('textarea', { static: false }) textarea;

  @Output() onCreateNote = new EventEmitter<string>();

  public cursorPosition = 0;
  public value = '';
  public isEmoji: boolean;

  constructor() { }

  onSave(): void {
    this.onCreateNote.emit(this.value);
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
    this.cursorPosition = this.textarea.nativeElement.selectionStart;
    const newValue = this.value.split('');
    newValue.splice(this.textarea.nativeElement.selectionStart, 0, event.emoji.native);
    this.value = newValue.join('');
    this.textarea.nativeElement.focus();
    this.cursorPosition += 2;
    setTimeout(() => {
      this.textarea.nativeElement.setSelectionRange(this.cursorPosition, this.cursorPosition);
    }, 0 );
  }
}
