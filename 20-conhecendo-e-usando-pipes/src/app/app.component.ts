import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome = 'William Mian';
  dataAniversario = new Date(1989, 3, 22);
  preco = 12854.32;
  troco = 0.57394;

}
