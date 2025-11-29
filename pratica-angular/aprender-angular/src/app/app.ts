import { Component } from '@angular/core';
import { ProductoComponent } from './components/producto/producto';
import { config } from './models/config';
import { Cine } from './components/cine/cine';
import { Cuenta } from './components/cuenta/cuenta';
import { Transacciones } from './components/transacciones/transacciones';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Transacciones, Cuenta],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = config.title;
  description = config.description;
}
