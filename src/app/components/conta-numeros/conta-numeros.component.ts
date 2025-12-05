import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conta-numeros',
  templateUrl: './conta-numeros.component.html',
  styleUrls: ['./conta-numeros.component.scss']
})
export class ContaNumerosComponent {
  
  @Input()
  numeros= 0;

}
