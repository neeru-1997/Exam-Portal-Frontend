import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {
  categories = [];

  quizData = {
    title: '',
    description: '',
    maxMarks: '',
    noOfQuestions: '',
    active: true,
    category: {
      cId: '',
    },
  };

  constructor(
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (data: any) => {
        this.categories = data;
        // console.log(data);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'Error in loading data from the server', 'error');
      }
    );
  }

  onQuizSubmit() {
    if (this.quizData.title.trim() == '' || this.quizData.title == null) {
      this.snackBar.open('Title required'!!, '', {
        duration: 3000,
      });
      return;
    }

    this.quizService.addQuiz(this.quizData).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Success', 'Quiz is added', 'success');
        this.quizData = {
          title: '',
          description: '',
          maxMarks: '',
          noOfQuestions: '',
          active: true,
          category: {
            cId: '',
          },
        };
      },
      (error) => {
        Swal.fire('Error!!', 'Error while adding quiz', 'error');
        console.log(error);
      }
    );
  }
}
