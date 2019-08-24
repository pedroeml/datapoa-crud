import { Component, OnInit } from '@angular/core';

export interface Tile {
  text: string;
  cols: number;
  rows: number;
  color: string;
  imageUrl: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public tiles: Tile[] = [{
    text: 'Esta aplicação foi desenvolvida utilizando Angular CLI 7.',
    cols: 2,
    rows: 2,
    color: '#1976d2',
    imageUrl: 'assets/images/angular_logo.png'
  }, {
    text: 'A interface desta aplicação foi desenvolvida com Angular Material.',
    cols: 2,
    rows: 2,
    color: '#3f51b5',
    imageUrl: 'assets/images/angular_material_logo.png'
  }, {
    text: 'A navegação entre os componentes desta aplicação se vale do mecanismo de Routing do Angular.',
    cols: 2,
    rows: 2,
    color: '#fafafa',
    imageUrl: 'assets/images/angular_routing_logo.png'
  }, {
    text: 'Os eventos estão sendo tratados com RxJs, o que permite que a aplicação seja mais reativa à interação com o usuário.',
    cols: 2,
    rows: 2,
    color: '#333',
    imageUrl: 'assets/images/rxjs_logo.png'
  }];

  constructor() { }

  ngOnInit() {
  }

}
