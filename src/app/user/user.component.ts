import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  datas:any;
  constructor(private service: ServiceService) {}

  getEventDetails() {
    this.service.getEvent().subscribe((data: any) => {
      this.datas = data;
    });
  }
}
