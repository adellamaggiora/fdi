import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import * as marked from 'marked';
import katex from 'katex'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class NotesComponent implements OnInit {
  markdownContent: SafeHtml | null = null;
  currentNote: string = 'notes/1-insiemi.md';  // Nota di default

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loadMarkdown(this.currentNote);  // Carica la nota di default '1-insiemi.md'
  }

  // Funzione per caricare e convertire il file Markdown in HTML
  async loadMarkdown(notePath: string) {
    this.http.get(`assets/${notePath}`, { responseType: 'text' }).subscribe(async data => {
      const rawHTML = await this.convertMarkdownToHTML(data!);  // Converti Markdown in HTML
      this.markdownContent = this.sanitizer.bypassSecurityTrustHtml(rawHTML);  // Sanifica l'HTML
    })
  }

  // Funzione per convertire Markdown con KaTeX in HTML
  // Funzione per convertire Markdown con KaTeX in HTML
  convertMarkdownToHTML(markdown: string) {
    // Sostituzione delle espressioni block ($$...$$) con KaTeX
    const withBlockKaTeX = markdown.replaceAll(/\$\$([^\$]+)\$\$/g, (match, math) => {
      try {
        return katex.renderToString(math, { throwOnError: false, displayMode: true });
      } catch (err) {
        console.error('Errore nel rendering di KaTeX (block):', err);
        return match;
      }
    });

    // Sostituzione delle espressioni inline ($...$) con KaTeX
    const withInlineKaTeX = withBlockKaTeX.replaceAll(/\$([^\$]+)\$/g, (match, math) => {
      try {
        return katex.renderToString(math, { throwOnError: false });
      } catch (err) {
        console.error('Errore nel rendering di KaTeX (inline):', err);
        return match;
      }
    });

    // Trasformare Markdown in HTML
    return marked.parse(withInlineKaTeX);
  }


  // Funzione per cambiare il file Markdown
  changeNote(notePath: string) {
    this.currentNote = notePath;
    this.loadMarkdown(notePath);
  }
}
