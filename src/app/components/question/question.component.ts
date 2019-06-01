import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions$ : Object;
  constructor(private data: QuestionService) { }

  ngOnInit() {
    this.data.getQuestions().subscribe(
      data => this.questions$ = data
    );
  }

}
