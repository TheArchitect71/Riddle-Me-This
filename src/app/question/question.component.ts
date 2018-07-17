import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  constructor(private quiz: QuizService) {
    this.quiz = quiz;
    // shows description defined in the QuizService

  }




}
