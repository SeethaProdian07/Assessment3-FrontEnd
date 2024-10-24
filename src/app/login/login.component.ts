import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required]
    });
  }

    onSubmit() {
      if (this.loginForm.valid) {
        console.log(this.loginForm.value);
        this.service.postDetails(this.loginForm.value).subscribe((data: any) => {
          console.log(data);
          const registerId = data.userId;
          alert(`Registration successful. Your User ID is: ${registerId}`);
          this.loginForm.reset();
          this.router.navigate(['/home']);
        });
      }
    }
}
