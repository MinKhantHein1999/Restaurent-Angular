import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public base_url = 'http://localhost:3000/resto';
  public regURL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  allRest() {
    return this.http.get(this.base_url);
  }

  getCurrentData(id) {
    return this.http.get(`${this.base_url}/${id}`);
  }

  addRest(data) {
    return this.http.post(this.base_url, data);
  }

  deleteResto(id) {
    return this.http.delete(`${this.base_url}/${id}`);
  }

  updateResto(id, data) {
    return this.http.put(`${this.base_url}/${id}`, data);
  }

  createUser(data) {
    return this.http.post(this.regURL, data);
  }
}
