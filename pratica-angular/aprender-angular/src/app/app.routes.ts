import { Routes } from '@angular/router';
import { MiPerfil } from './components/mi-perfil/mi-perfil';
import { Cuenta } from './components/cuenta/cuenta';
import { Transacciones } from './components/transacciones/transacciones';
import { Prestamos } from './components/prestamos/prestamos';
import { PaginaNoEncontrada } from './components/pagina-no-encontrada/pagina-no-encontrada';
import { App } from './app';

export const routes: Routes = [
  { path: '', component: App},
  { path: 'inicio', component: MiPerfil },
  { path: 'cuenta', component: Cuenta },
  { path: 'transacciones', component: Transacciones },
  { path: 'prestamos', component: Prestamos },
  {path: '**', component: PaginaNoEncontrada}
];
