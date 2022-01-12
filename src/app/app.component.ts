import { Component } from '@angular/core';
import { SerialService } from './services/serial/serial.service';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serial-app';

  constructor(
    private serialService: SerialService,
    private authService: AuthService,
    private router: Router,
    ){
    this.serialService.findOneById(10)
  }

  onClickSignOut() {
    this.authService.signOut();
    this.router.navigate(['']);
  }


}
