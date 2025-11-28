import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'mi-producto',
  templateUrl: './producto.html',
  styleUrl: './producto.css',
  imports: [NgClass, NgStyle],
})
export class ProductoComponent {
  public colorear: boolean = true;
  public mostrar: string = 'Si';
  misStyles= {
    'color': 'white',
    'background-color': 'blue',
    'font-size': '20px',
    'padding': '10px',
    'border-radius': '15px'
  }
}
