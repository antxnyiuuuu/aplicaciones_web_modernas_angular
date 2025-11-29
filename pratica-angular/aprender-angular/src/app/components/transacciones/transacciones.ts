import { Component } from '@angular/core';
import { Transaccion } from '../../models/transaccion';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-transacciones',
  imports: [NgClass],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css',
})
export class Transacciones {
  public transaccionesList: Array<Transaccion>;
  constructor() {
    this.transaccionesList = [
      new Transaccion(1, new Date('2024-01-15'), 'Pago de servicios', 100, 'egreso'),
      new Transaccion(2, new Date('2024-01-20'), 'Venta de producto', 250, 'ingreso'),
      new Transaccion(3, new Date('2024-02-05'), 'Compra de insumos', 75, 'egreso'),
      new Transaccion(4, new Date('2024-02-10'), 'Ingreso por consultoría', 500, 'ingreso'),
      new Transaccion(5, new Date('2024-03-01'), 'Pago de alquiler', 300, 'egreso'),
      new Transaccion(6, new Date('2024-03-15'), 'Venta de equipo', 400, 'ingreso'),
    ];
  }
}
