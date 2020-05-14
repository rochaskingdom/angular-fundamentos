import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-title {
      text-transform: uppercase;
      color: lawngreen;
    }
  `]
})
export class FuncionarioCardComponent {

  @Input('obj') funcionario: any;

}
