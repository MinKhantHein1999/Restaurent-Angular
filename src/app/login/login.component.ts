import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  logIn() {
    if (this.email == 'admin@gmail.com' && this.password == 'Admin@123') {
      this.router.navigate(['./list']);
    } else {
      alert('Please Enter Valid Details');
    }
  }
}
