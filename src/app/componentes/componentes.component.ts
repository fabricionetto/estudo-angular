import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  standalone: true,
  imports: [],
  templateUrl: './componentes.component.html',
  styleUrl: './componentes.component.css'
})
export class ComponentesComponent implements OnInit{

  nome:string = 'Jose'
  constructor(){}
  ngOnInit(): void {
    this.nome = `Ola ${this.nome}`
  }

}
