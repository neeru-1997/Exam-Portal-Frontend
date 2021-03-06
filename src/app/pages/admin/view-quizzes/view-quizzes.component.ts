import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css'],
})
export class ViewQuizzesComponent implements OnInit {
  quizzes = [];
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getAllQuizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(data);

      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'Error in loading data!!', 'error');
      }
    );
  }

  deleteQuiz(qId: number) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.quizService.deleteQuiz(qId).subscribe(
          (data) => {
            this.quizzes = this.quizzes.filter((quiz) => quiz.qId != qId);
            Swal.fire('Success', 'Quiz Deleted', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error');
          }
        );
      }
    });
  }
}
