import { AsciiPipe } from './../pipes/ascii';
import { Component } from '@angular/core';
import { Transacciones } from '../transacciones/transacciones';
import { UpperCasePipe, TitleCasePipe, LowerCasePipe, JsonPipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-prestamos',
  imports: [
    Transacciones,
    UpperCasePipe,
    TitleCasePipe,
    LowerCasePipe,
    JsonPipe,
    SlicePipe,
    AsciiPipe
  ],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  url = 'https://github.com/antxnyiuuuu';
  redirigir = false;

  prestamosList = [
    { id: 1, monto: 1500, estado: 'Aprobado' },
    { id: 2, monto: 2500, estado: 'Pendiente' },
    { id: 3, monto: 3500, estado: 'Pendiente' },
    { id: 4, monto: 4500, estado: 'Aprobado' },
    { id: 5, monto: 5500, estado: 'Pendiente' },
    { id: 6, monto: 6500, estado: 'Aprobado' },
  ];

  prestamo = { id: 1, tipo: 'Hipotecario', interes: 5 };

  cambiarRedirigir() {
    if (this.redirigir == false) {
      this.redirigir = true;
    } else {
      this.redirigir = false;
    }
  }
}
