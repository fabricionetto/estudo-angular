import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-componentes',
  standalone: true,
  imports: [],
  templateUrl: './componentes.component.html',
  styleUrl: './componentes.component.css'
})
export class ComponentesComponent implements OnInit, OnChanges{

  @Input() nome:string = ''
  
  ngOnInit(): void {
    console.log("Componentente nasceu!");
  }

  ngOnChanges(): void {
    console.log("detectei alteração");
  }
  
  constructor(){
    console.log("Construtor");
  }
  
}
