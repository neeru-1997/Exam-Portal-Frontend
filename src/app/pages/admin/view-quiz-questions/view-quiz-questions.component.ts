import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css'],
})
export class ViewQuizQuestionsComponent implements OnInit {
  qid;
  qtitle;
  questions = [];

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params.qid;
    this.qtitle = this.route.snapshot.params.title;
    // console.log(this.qid);
    // console.log(this.qtitle);
    this.questionService.getQuestionsOfQuiz(this.qid).subscribe(
      (data: any) => {
        this.questions = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
