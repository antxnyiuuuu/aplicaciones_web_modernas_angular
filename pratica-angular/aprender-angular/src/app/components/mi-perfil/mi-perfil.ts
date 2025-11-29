import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Cuenta } from '../cuenta/cuenta';
import { Transacciones } from '../transacciones/transacciones';

@Component({
  selector: 'mi-perfil',
  standalone: true,
  imports: [NgIf, Cuenta, Transacciones],
  templateUrl: './mi-perfil.html',
  styleUrls: ['./mi-perfil.css'],
})
export class MiPerfil {
  public nombre;
  public edad;
  public ocupacion;
  public direccion;
  public telefono;
  public nombreCliente: string = 'Juan Pérez';
  public mensajeRecibido: string = '';
  constructor() {
    console.log('Se cargó el componente de perfil correctamente.');
    this.nombre = 'Antony Chaguamate';
    this.edad = 18;
    this.ocupacion = 'Desarrollador';
    this.direccion = 'La Planada Colinas del Norte ';
    this.telefono = '0987654321';
  }
  ngDoCheck() {
    console.log('Componente Actualizado');
  }
  cambiarEdad() {
    this.edad = 19;
  }
  cambiarDireccion() {
    this.direccion = 'Av. Siempre Viva 742, Ciudad, País';
  }

  recibirMensaje(mensaje: string) {
    this.mensajeRecibido = mensaje;
  }
}
