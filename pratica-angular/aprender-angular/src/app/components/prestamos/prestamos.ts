import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prestamos.html',
  styleUrls: ['./prestamos.css'],
})
export class Prestamos {
  public prestamosList: Array<any>;
  public nuevoPrestamo = '';
  constructor() {
    this.prestamosList = [
      { id: 1, monto: 100, estado: 'activo' },
      { id: 2, monto: 200, estado: 'pagado' },
      { id: 3, monto: 150, estado: 'activo' },
      { id: 4, monto: 300, estado: 'pagado' },
      { id: 5, monto: 250, estado: 'activo' },
    ];
  }
  eliminarPrestamo(i: number) {
    this.prestamosList.splice(i, 1);
  }
  agregarPrestamo() {
    if (this.nuevoPrestamo) {
      const nuevoId = this.prestamosList.length + 1;
      this.prestamosList.push({
        id: nuevoId,
        monto: parseFloat(this.nuevoPrestamo),
        estado: 'activo',
      });
      this.nuevoPrestamo = '';
    }
  }
}
