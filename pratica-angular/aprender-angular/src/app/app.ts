import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoComponent } from './producto/producto';
import { MiPerfil } from './mi-perfil/mi-perfil';
import { Prestamos } from './prestamos/prestamos';

@Component({
  selector: 'app-root',
  imports: [MiPerfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Krake Dev - Escuela de Programación');
  protected readonly subtitle = signal("Bienvenido ,este es mi nuevo proyecto de práctica")
  protected readonly mesaje = signal("Reto 3")
}
