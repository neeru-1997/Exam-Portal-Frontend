import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  category = {
    title: '',
    description: '',
  };

  constructor(
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.category.title.trim() == '' || this.category.title == null) {
      this.snackBar.open('Title Required !!', '', {
        duration: 3000,
      });
      return;
    }

    this.categoryService.addCategory(this.category).subscribe(
      (data) => {
        this.category.title = '';
        this.category.description = '';
        Swal.fire('Success!!', 'Category is added successfully', 'success');
        this.router.navigateByUrl('/admin-dashboard/categories');
      },
      (error) => {
        Swal.fire('Error!!', 'Server error', 'error');
      }
    );
  }
}
