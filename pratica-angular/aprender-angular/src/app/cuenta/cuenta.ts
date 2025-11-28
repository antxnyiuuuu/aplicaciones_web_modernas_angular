import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta implements OnInit, OnDestroy {

  ngOnInit(): void {
    console.log("Componente Cuenta inicializado");
  }

  ngOnDestroy(): void {
    console.log("Componente Cuenta destruido");
  }

}
