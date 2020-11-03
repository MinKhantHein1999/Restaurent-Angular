import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../servce/api.service';

@Component({
  selector: 'app-update-rest',
  templateUrl: './update-rest.component.html',
  styleUrls: ['./update-rest.component.css'],
})
export class UpdateRestComponent implements OnInit {
  editRestaurent = new FormGroup({
    name: new FormControl(''),
    Adress: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    public apiservice: ApiService,
    private router: Router,
    private actrouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.apiservice
      .getCurrentData(this.actrouter.snapshot.params.id)
      .subscribe((result) => {
        this.editRestaurent = new FormGroup({
          name: new FormControl(result['name']),
          Adress: new FormControl(result['Adress']),
          email: new FormControl(result['email']),
        });
      });
  }
  updateResto() {
    // const id = this.actrouter.snapshot.params.id
    this.apiservice
      .updateResto(this.actrouter.snapshot.params.id, this.editRestaurent.value)
      .subscribe((result) => {
        console.log(result, 'data updated successfull');
        this.router.navigate(['all-rest']);
      });
  }
}
