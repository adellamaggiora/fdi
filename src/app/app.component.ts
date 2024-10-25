import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <nav class="navbar navbar-light bg-light px-3">
        <a class="navbar-brand" href="#">FDI</a>
        <ul class="navbar-nav me-auto d-flex flex-row">
          <li class="nav-item me-3">
            <a class="nav-link" routerLink="/notes" routerLinkActive="active">Appunti</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/flashcard" routerLinkActive="active">Flashcards</a>
          </li>
        </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }
