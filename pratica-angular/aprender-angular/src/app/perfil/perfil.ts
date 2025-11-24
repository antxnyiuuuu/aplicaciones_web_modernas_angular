import { Component } from "@angular/core";

@Component({
    selector: "mi-perfil",
    templateUrl: "./perfil.html",
    styleUrl: "./perfil.css"
},

)

export class PerfilComponent {

    public nombre: string = "Antony";
    public edad: number = 30;
    public direccion: string = "Av. Amazonas y Río Coca, Quito, Ecuador";
    public telefono: string = "+593 999 999 999";
    public correo: string = "Antony@gmail.com";

    constructor() {
        alert("¡Bienvenido al perfil, estás dentro de la aplicación!");
        console.log("¡Bienvenido al perfil, estás dentro de la aplicación!");
    }

}
