import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente';
@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  public mostrarCuenta: boolean = true;
  public cliente: Cliente;
  constructor() {
    this.cliente = new Cliente(1, 'Antony', 'Chaguamate', 'antonykhujksad@gmail.com', 5000);
  }
  mostrarCompCuenta(valor: boolean) {
    this.mostrarCuenta = valor;
  }
}
