import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css'],
})
export class ViewQuizQuestionsComponent implements OnInit {
  qId;
  qTitle;
  questions = [];

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.qId = this.route.snapshot.params.qid;
    this.qTitle = this.route.snapshot.params.title;
    console.log(this.qId);
    console.log(this.qTitle);
    this.questionService.getQuestionsOfQuiz(this.qId).subscribe(
      (data: any) => {
        this.questions = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //delete question
  deleteQuestion(qId) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure, you want to delete this question?',
    }).then((result) => {
      if (result.isConfirmed) {
        this.questionService.deleteQuestion(qId).subscribe(
          (data) => {
            this.snackBar.open('Question Deleted', '', {
              duration: 3000,
            });
            this.questions = this.questions.filter(
              (question) => question.quesId != qId
            );
          },
          (error) => {
            this.snackBar.open('Error in deleting questions', '', {
              duration: 3000,
            });
          }
        );
      }
    });
  }
}
