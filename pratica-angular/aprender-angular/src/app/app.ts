import { Component } from '@angular/core';
import { ProductoComponent } from './components/producto/producto';
import { config } from './models/config';
import { Cine } from './components/cine/cine';
import { Cuenta } from './components/cuenta/cuenta';
import { Transacciones } from './components/transacciones/transacciones';
import { Prestamos } from './components/prestamos/prestamos';
import { MiPerfil } from './components/mi-perfil/mi-perfil';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MiPerfil],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = config.title;
  description = config.description;
}
