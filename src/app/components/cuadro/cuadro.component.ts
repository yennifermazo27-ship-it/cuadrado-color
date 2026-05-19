import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuadro',
  standalone: false,
  templateUrl: './cuadro.component.html',
  styleUrl: './cuadro.component.css'
})
export class CuadroComponent {
  @Input() color: string = 'white';
  @Input() nombreColor: string = 'Blanco';
}