import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css'],
})
export class AuthViewComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    const user = {
      username: form.value.username,
      password: form.value.password,
    };

    const isAuth = this.authService.signIn(user);
    if (isAuth) {
      //Redirect User to /serial
      this.router.navigate(['serial']);
    }
  }
}


