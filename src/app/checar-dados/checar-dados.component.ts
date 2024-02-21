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

  constructor(){}
  ngAfterViewChecked(): void {
    throw new Error('fterViewChecked');
  }
  ngAfterViewInit(): void {
    throw new Error('fterViewInit');
  }
  ngAfterContentInit(): void {
    throw new Error('AfterContentInit');
  }
  ngAfterContentChecked(): void {
    throw new Error('fterContentChecked');
  }
  ngDoCheck(): void {
    throw new Error('DoChec');
  }
  ngOnChanges(): void {
    throw new Error('OnChanges');
  }
  ngOnInit(): void {
    throw new Error('OnInit');
  }

}
