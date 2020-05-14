import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-title {
      text-transform: uppercase;
      color: hotpink;
    }
  `]
})
export class FuncionarioCardComponent {

  @Input('obj') funcionario: any;

  // getClassesCss() {
  //   return ['badge', 'badge-dark'];
  // }

  isAdmin() {
    return this.funcionario.nome.startsWith('V');
  }

  getEstilosCartao() {
    return {
      'borderWidth.px': this.funcionario.id,
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }

}
