import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  datas: any;
  constructor(private service: ServiceService) {

  }

  ngOnInit(): void {
    this.getEventDetails();
  }

  getEventDetails() {
    this.service.getEvent().subscribe((data: any) => {
      this.datas = data;
    });
  }
}
