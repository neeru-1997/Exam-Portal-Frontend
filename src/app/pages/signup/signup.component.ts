import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      // alert('user is required');
      this.snackBar.open('Username is required !!', '', {
        duration: 3000,
      });
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //success
        console.log(data);
        // alert('success');
        Swal.fire(
          'Success',
          'User is registered with Id ' + data.id,
          'success'
        );
      },
      (error) => {
        //error
        console.log(error);
        // alert('something went wrong');
        this.snackBar.open('Something went wrong !!', '', {
          duration: 3000,
        });
      }
    );
  }
}
