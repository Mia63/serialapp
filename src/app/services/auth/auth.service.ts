import { Injectable } from '@angular/core';
import { reduce } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false;

  constructor() { }

  /**
   * Checks if user is Admin and Sign In
   * @param username
   * @param password
   * @returns
   */
  signIn(user: any): boolean {
    const trueUsername = "Administrateur";
    const truePass = "azerty";

    if (user.username === trueUsername && user.password === truePass) {
      this.isAuth = true;
    }

    return this.isAuth;
  }

  signOut() {
    this.isAuth = false;
  }
}
