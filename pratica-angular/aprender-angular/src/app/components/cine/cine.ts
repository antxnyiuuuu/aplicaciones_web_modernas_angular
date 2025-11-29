import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-cine',
  standalone: true,
  imports: [],
  templateUrl: './cine.html',
  styleUrls: ['./cine.css'],
})
export class Cine {
  public titulo: string;
  public peliculas: Array<Pelicula>;

  constructor() {
    this.titulo = 'Modelos';
    this.peliculas = [
      new Pelicula(1,"Riverdale", "Drama","Jhon", 2020, "Amazon", true),
      new Pelicula(2,"La casa de papel", "Acción","Álex Pina", 2017, "Netflix", true),
      new Pelicula(3,"Stranger Things", "Ciencia ficción","Hermanos Duffer", 2016, "Netflix", true),
      new Pelicula(4,"The Crown", "Drama histórico","Peter Morgan", 2016, "Netflix", true),
      new Pelicula(5,"The Mandalorian", "Ciencia ficción","Jon Favreau", 2019, "Disney+", true),
    ];
  }
}
