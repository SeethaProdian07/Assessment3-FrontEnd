import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private apiUrl = 'http://localhost:8080/event/getDetails';

  private apiUrl1 = 'http://localhost:8080/event/addEvent';

  constructor(private http: HttpClient) {}

  getEvent() {
    return this.http.get(this.apiUrl);
  }

  postDetails(data:any) {
    return this.http.post(this.apiUrl1,data);
  }
}
