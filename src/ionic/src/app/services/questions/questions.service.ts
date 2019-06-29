import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions = [
    { question: 'Conoces las herramientas de Word, Excel y Powerpoint?', name: 'qone' },
    { question: 'Sabes que son las redes sociales y como se usan?', name: 'qtwo' },
    { question: 'Conoces lo que es un navegador web?', name: 'qthree' },
    { question: 'Conoces lo que es un correo electronico o e-mail?', name: 'qfour' },
  ];

  constructor() { }

  getQuestion() {
    return this.questions;
  }
}
