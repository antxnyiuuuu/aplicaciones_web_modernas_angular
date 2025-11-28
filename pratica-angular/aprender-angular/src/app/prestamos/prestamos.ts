import { Component } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  imports: [],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  url = 'https://github.com/antxnyiuuuu';
  redirigir = false;

  cambiarRedirigir() {
    if (this.redirigir == false) {
      this.redirigir = true;
    } else {
      this.redirigir = false;
    }
  }
}
