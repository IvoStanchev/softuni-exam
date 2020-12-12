import { ViewFlags } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthRecponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  //* Functions

  // ? Switch the auth mode
  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  // ? Submit the form
  onSubmit(form: NgForm) {
    // * If the form is invalid don't do anything.
    if (!form.valid) {
      return;
    }

    // ? Fetch the required details from the form
    const email = form.value.email;
    const password = form.value.password;

    // * Loading spinner
    this.isLoading = true;

    // ? Observable which will in the end expect the response data fom the auth service.
    let authObs: Observable<AuthRecponseData>;

    // ? Depending on the login status on the front end we either sign up or login to an existing account, parts of the error message is handled here as well.
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    //? After the observable is pupulated by the if statement, we apply the error handling and spinner loading state.
    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['']);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        // this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  // * Vars
  isLoginMode = false;
  isLoading = false;
  error: string = null;
}
