import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css'],
})
export class LoadQuizComponent implements OnInit {
  catId;
  quizzes;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.catId = params.catId;

      if (this.catId == 0) {
        //load all the quiz
        this.quizService.getActiveQuizzes().subscribe(
          (data) => {
            this.quizzes = data;
          },
          (error) => {
            alert('error in loading all quizzes');
          }
        );
      } else {
        //load specific quiz
        this.quizService.getActiveQuizzesOfCategory(this.catId).subscribe(
          (data) => {
            this.quizzes = data;
          },
          (error) => {
            alert('error in loading quiz data');
          }
        );
      }
    });
  }
}
