import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../servce/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  createUser = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private apiservice: ApiService, private router: Router) {}

  ngOnInit(): void {}
  regUser() {
    console.log(this.createUser.value);
    this.apiservice.createUser(this.createUser.value).subscribe((result) => {
      console.log(result, 'data created sucessfull');
      this.router.navigate(['login']);
    });
  }
}
