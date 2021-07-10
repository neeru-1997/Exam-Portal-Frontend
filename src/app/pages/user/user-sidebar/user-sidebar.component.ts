import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent implements OnInit {
  categories;

  constructor(
    private categoryService: CategoryService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        this.snackbar.open('Error in loading categories from the server', '', {
          duration: 3000,
        });
      }
    );
  }
}
