import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  // STRING DATA FOR TITLE
  title: string = "Your Journey has Come to an End";

  // STRING DATA FOR QUOTE
  paragraph: string = `"The most important reason for going from one place to another is to see what's in between, and they took great
       pleasure in doing just that."`;
  author: string = "― Norton Juster, The Phantom Tollbooth ";

  // STRING DATA FOR RESULT
  // answer: string = "Superman";

  constructor(private quiz: QuizService) {
    this.quiz = quiz;
    // shows description defined in the QuizService
   }

  ngOnInit() {
  }

}
