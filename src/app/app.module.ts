import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {FuncionarioCardComponent} from './funcionario-card/funcionario-card.component';
import {FuncionarioFormComponent} from './funcionario-form/funcionario-form.component';
import {CampoColoridoDirective} from './campo-colorido.directive';
import {ConhecendoPipesComponent} from './conhecendo-pipes/conhecendo-pipes.component';
import { FormulariosComponent } from './formularios/formularios.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    ConhecendoPipesComponent,
    FormulariosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
