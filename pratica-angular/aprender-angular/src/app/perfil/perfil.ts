import { Component } from "@angular/core";

@Component({
    selector: "mi-perfil",
    templateUrl: "./perfil.html",
    styleUrl: "./perfil.css"
},

)

export class PerfilComponent {
    constructor() {
        alert("¡Bienvenido al perfil, estás dentro de la aplicación!");
        console.log("¡Bienvenido al perfil, estás dentro de la aplicación!");
    }

}
