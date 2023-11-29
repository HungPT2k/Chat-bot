import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = 'hung';
  password: string = '123';
  errorMessage = 'Wrong';
  successMessage: string = 'Login successFully';
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}

  handleLogin() {
    this.authenticationService
      .authenticationService(this.username, this.password)
      .subscribe(
        (result: any) => {
          this.invalidLogin = false;
          this.loginSuccess = true;
          if (result) {
            this.successMessage = 'Login Successful.';
            localStorage.setItem('user', JSON.stringify(result));
            this.router.navigate(['home']);
          } else {
            this.successMessage = 'Login False';
          }
        },
        () => {
          this.invalidLogin = true;
          this.loginSuccess = false;
        }
      );
  }
  back() {
    this.router.navigate(['home']);
    localStorage.removeItem('user');
  }
}
