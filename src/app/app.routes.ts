import { Routes } from '@angular/router';
import { FlashcardComponent } from './pages/flashcard/flashcard.component';
import { NotesComponent } from './pages/notes/notes.component';

export const routes: Routes = [
    { path: '', redirectTo: '/notes', pathMatch: 'full' },
    { path: 'notes', component: NotesComponent },
    { path: 'flashcard', component: FlashcardComponent }
];
