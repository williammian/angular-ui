import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColorido2]'
})
export class CampoColorido2Directive {

  @Input() cor = 'green';

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') aoGanharFoco() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') aoPerderFoco() {
    this.corDeFundo = 'transparent';
  }

}
