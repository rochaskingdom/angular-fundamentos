import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') onFocus() {
    this.corDeFundo = 'coral';
  }

  @HostListener('blur') offFocus() {
    this.corDeFundo = 'transparent'
  }

}
