import { Component } from '@angular/core';
import { Cuenta } from '../cuenta/cuenta';
import { Transacciones } from '../transacciones/transacciones';
import { Prestamos } from '../prestamos/prestamos';

@Component({
  selector: 'mi-perfil',
  imports: [Cuenta, Transacciones, Prestamos],
  templateUrl: './mi-perfil.html',
  styleUrl: './mi-perfil.css',
})
export class MiPerfil {
  public nombre;
  public edad;
  public ocupacion;
  public direccion;
  public telefono;
  constructor() {
    console.log('Se cargó el componente de perfil correctamente.');
    this.nombre = 'Antony Chaguamate';
    this.edad = 18;
    this.ocupacion = 'Estudiante de la U central';
    this.direccion = 'Calle Falsa 123, Ciudad, País';
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
}
