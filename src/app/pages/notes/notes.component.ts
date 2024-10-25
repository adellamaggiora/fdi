import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MarkdownModule, KatexOptions } from 'ngx-markdown';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  standalone: true,
  imports: [CommonModule, MarkdownModule]
})
export class NotesComponent implements OnInit {

  currentNote: string = 'assets/notes/1-insiemi.md';

  katexOptions: KatexOptions = {
    displayMode: false,
    throwOnError: true,
    errorColor: '#cc0000',
  };

  constructor() {}

  ngOnInit() {  }

  changeNote(notePath: string) {
    this.currentNote = notePath;
  }
}
