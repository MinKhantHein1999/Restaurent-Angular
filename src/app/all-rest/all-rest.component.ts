import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servce/api.service';

@Component({
  selector: 'app-all-rest',
  templateUrl: './all-rest.component.html',
  styleUrls: ['./all-rest.component.css'],
})
export class AllRestComponent implements OnInit {
  public collection: any = [];
  constructor(public apiservice: ApiService) {}

  ngOnInit(): void {
    this.apiservice.allRest().subscribe((result) => {
      // console.log(result);
      this.collection = result;
    });
  }
  deleteResto(resto) {
    this.collection.splice(resto.id, 1);
    this.apiservice.deleteResto(resto).subscribe((result) => {
      console.log('Data is Deleted Successfull !', result);
    });
  }
}
