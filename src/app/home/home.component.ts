import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({standalone:false,changeDetection:ChangeDetectionStrategy.Eager,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public quiz: QuizService) {
    this.quiz = quiz;
    // shows description defined in the QuizService
   }
    
  ngOnInit() {
  }

}
