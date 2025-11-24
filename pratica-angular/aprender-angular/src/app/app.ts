import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoComponent } from './producto/producto';
import { PerfilComponent } from './perfil/perfil';

@Component({
  selector: 'app-root',
  imports: [ProductoComponent, PerfilComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('este es mi nuevo proyecto de práctica');
}
