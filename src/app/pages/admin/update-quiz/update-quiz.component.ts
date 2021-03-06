import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css'],
})
export class UpdateQuizComponent implements OnInit {
  qId = 0;
  quiz;
  categories;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.qId = this.route.snapshot.params.qid;
    // alert(this.qId);
    this.quizService.getQuiz(this.qId).subscribe(
      (data: any) => {
        this.quiz = data;
      },
      (error) => {
        console.log(error);
      }
    );

    this.categoryService.getAllCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        alert('error in loading categories');
      }
    );
  }

  //update form submit
  public updateData() {
    this.quizService.updateQuiz(this.quiz).subscribe(
      (data) => {
        Swal.fire('Success', 'quiz updated', 'success').then((e) => {
          this.router.navigate(['/admin-dashboard/quizzes']);
        });
      },
      (error) => {
        Swal.fire('Error', 'error in updating quiz', 'error');
        console.log(error);
      }
    );
  }
}
