import { Component } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  imports: [],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  url = 'https://github.com/antxnyiuuuu';
  redirigir = false;

  prestamosList=[
    {id: 1, monto: 1500, estado: 'Aprobado'},
    {id: 2, monto: 2500, estado: 'Pendiente'},
    {id: 3, monto: 3500, estado: 'Pendiente'},
    {id: 4, monto: 4500, estado: 'Aprobado'},
    {id: 5, monto: 5500, estado: 'Pendiente'},
    {id: 6, monto: 6500, estado: 'Aprobado'},
  ]

  cambiarRedirigir() {
    if (this.redirigir == false) {
      this.redirigir = true;
    } else {
      this.redirigir = false;
    }
  }
}
