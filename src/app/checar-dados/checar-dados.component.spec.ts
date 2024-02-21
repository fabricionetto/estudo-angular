import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecarDadosComponent } from './checar-dados.component';

describe('ChecarDadosComponent', () => {
  let component: ChecarDadosComponent;
  let fixture: ComponentFixture<ChecarDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecarDadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChecarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
