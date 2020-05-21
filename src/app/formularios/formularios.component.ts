import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao: string;
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
    // this.cliente.nome = form.value.primeiroNome;
    // this.cliente.email = form.value.emailAddress;
    // this.cliente.profissao = form.value.profissao;
    console.log(form);
    // console.log(this.cliente);
  }

}
