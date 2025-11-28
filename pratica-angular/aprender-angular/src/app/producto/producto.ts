import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'mi-producto',
  templateUrl: './producto.html',
  styleUrl: './producto.css',
  imports: [NgClass],
})
export class ProductoComponent {
  public colorear: boolean = true;
  public mostrar: string = 'Si';
}
