import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.page.html',
  styleUrls: ['./acercade.page.scss'],
})
export class AcercadePage implements OnInit {

  messages = [
    { name: 'David Guzman', main: 'Excelente curso', info: 'Buen profe, excelente videos' },
    { name: 'Cristofer Padilla', main: 'Mas y mejor', info: 'Produccion de alto nivel' },
    { name: 'Dunia Herrera', main: 'Sigan adelante', info: 'No se que rellenar aca' },
    { name: 'Pedro Vargas', main: 'Somos campeones', info: 'Yo igual xD' },
    { name: 'Raul Nota', main: 'Vamos que se puede', info: 'este men -.-' },
    { name: 'Gerardo Vargas', main: 'Maso que va', info: 'xD xD xxD' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
