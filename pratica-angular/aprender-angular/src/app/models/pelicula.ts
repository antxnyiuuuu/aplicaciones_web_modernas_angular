export class Pelicula {
  constructor(
    public id: number,
    public title: string,
    public genero: string,
    public director: string,
    public anio: number,
    public plataforma: string,
    public pago: boolean
  ) {}
}
