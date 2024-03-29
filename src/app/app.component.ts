import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentesComponent } from './componentes/componentes.component';
import { ChecarDadosComponent } from './checar-dados/checar-dados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentesComponent, ChecarDadosComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){}
}
