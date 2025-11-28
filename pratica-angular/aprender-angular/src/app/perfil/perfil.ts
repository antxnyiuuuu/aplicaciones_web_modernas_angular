import { Component, DoCheck } from "@angular/core";
import { Cuenta } from "../cuenta/cuenta";
import { Transacciones } from "../transacciones/transacciones";
import { Prestamos } from "../prestamos/prestamos";

@Component({
    selector: "mi-perfil",
    imports: [Cuenta, Transacciones, Prestamos],
    templateUrl: "./perfil.html",
    styleUrl: "./perfil.css"
},

)

export class PerfilComponent implements DoCheck {

    public nombre: string = "Antony";
    public edad: number = 30;
    public direccion: string = "Av. Amazonas y Río Coca, Quito, Ecuador";
    public telefono: string = "+593 999 999 999";
    public correo: string = "Antony@gmail.com";

    private edadAnterior: number = 30;
    private direccionAnterior: string = "Av. Amazonas y Río Coca, Quito, Ecuador";

    constructor() {
        alert("¡Bienvenido al perfil, estás dentro de la aplicación!");
        console.log("¡Bienvenido al perfil, estás dentro de la aplicación!");
    }

    ngDoCheck(): void {
        if (this.edad !== this.edadAnterior || this.direccion !== this.direccionAnterior) {
            console.log("Componente actualizado");
            this.edadAnterior = this.edad;
            this.direccionAnterior = this.direccion;
        }
    }

    cambiarEdad(): void {
        this.edad = Math.floor(Math.random() * 50) + 20;
    }

    cambiarDireccion(): void {
        this.direccion = "Nueva dirección " + Math.floor(Math.random() * 1000);
    }

}
