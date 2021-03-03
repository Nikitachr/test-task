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

  public value = '';
  public isEmoji: boolean;

  constructor() { }

  onSave(): void {
    this.onCreateNote.emit(this.value);
    this.isEmoji = false;
    this.value = '';
  }

  toggleEmojis(): void {
    this.isEmoji = !this.isEmoji;
  }

  onAddEmoji(event: EmojiEvent): void {
    this.addEmoji(event.emoji.native);
    this.resetFocus();
  }

  addEmoji(emoji: string): void {
    const newValue = this.value.split('');
    newValue.splice(this.textarea.nativeElement.selectionStart, 0, emoji);
    this.value = newValue.join('');
  }

  resetFocus(): void {
    let cursorPosition = this.textarea.nativeElement.selectionStart;
    this.textarea.nativeElement.focus();
    cursorPosition += 2;
    setTimeout(() => {
      this.textarea.nativeElement.setSelectionRange(cursorPosition, cursorPosition);
    }, 0 );
  }
}
