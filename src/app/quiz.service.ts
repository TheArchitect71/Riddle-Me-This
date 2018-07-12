import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  //All your quiz logic exists here, Define your vairable here
  description = "I am a string inside of the service!";

  constructor() { }
}
