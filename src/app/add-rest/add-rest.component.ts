import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../servce/api.service';

@Component({
  selector: 'app-add-rest',
  templateUrl: './add-rest.component.html',
  styleUrls: ['./add-rest.component.css'],
})
export class AddRestComponent implements OnInit {
  addRestaurent = new FormGroup({
    name: new FormControl(''),
    Adress: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(public apiservice: ApiService, public router: Router) {}

  ngOnInit(): void {}
  craeteResto() {
    this.apiservice.addRest(this.addRestaurent.value).subscribe((data) => {
      this.addRestaurent.reset();
      this.router.navigate(['all-rest']);
      console.log(data);
    });
  }
}
