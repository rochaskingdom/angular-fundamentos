import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {

  profissoes = ['Desenvolvedor', 'Empresario', 'Outra'];

  salvar(form: NgForm) {
    console.log(form.value);
  }

}
