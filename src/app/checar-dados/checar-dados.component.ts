import { Component,
   OnInit, 
   OnChanges, 
   DoCheck, 
   AfterContentInit,
   AfterContentChecked,
  AfterViewInit,
  AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-checar-dados',
  standalone: true,
  imports: [],
  templateUrl: './checar-dados.component.html',
  styleUrl: './checar-dados.component.css'
})
export class ChecarDadosComponent implements OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked  {
 qunt:number = 0;
  constructor(){}

  adicionar(){
    this.qunt += 1
  }

  diminuir(){
    this.qunt -= 1
  }

  //checked --> content --> view

  //Quando primeiro conteudo iniciado
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

 //depois inicialização da view
 ngAfterViewInit(): void {
  console.log('fterViewInit');
}

 //apos alguma alteração, verifica conteudo
 ngAfterContentChecked(): void {
  console.log('fterContentChecked');
}

//apos alguma alteração verifica a view
  ngAfterViewChecked(): void {
    console.log('fterViewChecked');
  }
 
 
  ngDoCheck(): void {
    console.log('DoChec');
  }
  ngOnChanges(): void {
    console.log('OnChanges');
  }
  ngOnInit(): void {
    console.log('OnInit');
  }

}
