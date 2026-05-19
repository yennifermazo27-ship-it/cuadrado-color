import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  standalone: false,
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  @Input() etiqueta: string = '';
  @Input() color: string = '';
  @Output() colorSeleccionado = new EventEmitter<string>();
  @Input() nombre: string = '';
  @Output() nombreSeleccionado = new EventEmitter<string>();

  seleccionar() {
    this.colorSeleccionado.emit(this.color);
    this.nombreSeleccionado.emit(this.nombre);

  }
}