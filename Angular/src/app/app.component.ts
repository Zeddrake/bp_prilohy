import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Přidáme příznak standalone: true
})
export class AppComponent {
  buttonClicked() {
    alert('Klikli jste na tlačítko!');
  }
}