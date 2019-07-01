import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions = [
    { question: 'Conoces las herramientas de Word, Excel y Powerpoint?', name: 'office' },
    { question: 'Sabes que son las redes sociales y como se usan?', name: 'RRSS' },
    { question: 'Conoces lo que es un navegador web?', name: 'marketing' },
    { question: 'Conoces lo que es un correo electronico o e-mail?', name: 'Google' },
  ];

  constructor() { }

  getQuestion() {
    return this.questions;
  }
}
