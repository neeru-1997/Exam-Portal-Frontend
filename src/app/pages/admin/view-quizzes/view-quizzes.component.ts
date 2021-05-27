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
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'Error in loading data!!', 'error');
      }
    );
  }
}
