import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaNumerosComponent } from './conta-numeros.component';

describe('ContaNumerosComponent', () => {
  let component: ContaNumerosComponent;
  let fixture: ComponentFixture<ContaNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaNumerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
