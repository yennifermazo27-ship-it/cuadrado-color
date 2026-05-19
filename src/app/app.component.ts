import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cuadroColor';
  colorActual: string = 'white';
  nombreColor: string = 'Blanco';

  cambiarColor(color: string) {
    this.colorActual = color;
    this.nombreColor = color
  }
}