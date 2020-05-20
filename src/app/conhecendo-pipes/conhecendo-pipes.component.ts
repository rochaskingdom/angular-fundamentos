import {Component} from '@angular/core';

@Component({
  selector: 'app-conhecendo-pipes',
  templateUrl: './conhecendo-pipes.component.html',
  styleUrls: ['./conhecendo-pipes.component.css']
})
export class ConhecendoPipesComponent {

  nome = 'Vinicius';
  dataAniversario = new Date(1999, 6, 25);
  preco = 12855.32;
  troco = 0.57392;

}
