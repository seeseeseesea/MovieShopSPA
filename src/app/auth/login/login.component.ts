import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: Login = {
    email:'',
    password:'',
  };

  invalidLogin: boolean;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(){}

  login() {
    this.authService.login(this.userLogin).subscribe(
      (response) => {
        if (response) {
        } else {
          this.invalidLogin = true;
        }
      },
      (err: any) => {
        this.invalidLogin = true;
      }
    );
  }
}
