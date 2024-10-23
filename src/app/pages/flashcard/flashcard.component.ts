import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class FlashcardComponent implements OnInit {
  flashcards: any[] = [];
  currentIndex: number = 0;
  showDefinition: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadFlashcards();
  }

  // Funzione per caricare e mescolare le flashcards
  loadFlashcards() {
    this.http.get<any[]>('assets/flashcards.json').subscribe(data => {
      this.flashcards = this.shuffleArray(data);  // Mescola le flashcards
    });
  }

  // Funzione per mescolare (shuffle) l'array di flashcards
  shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);  // Sort casuale
  }

  toggleDefinition() {
    this.showDefinition = !this.showDefinition;
  }

  nextCard() {
    this.showDefinition = false;
    this.currentIndex = (this.currentIndex + 1) % this.flashcards.length;
  }
}
