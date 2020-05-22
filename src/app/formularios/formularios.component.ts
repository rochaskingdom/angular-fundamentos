import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao = '';
}

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {

  cliente = new Cliente();
  profissoes = ['Desenvolvedor', 'Empresario', 'Outra'];

  salvar(form: NgForm) {
    console.log(form);

    form.reset();
  }

}
