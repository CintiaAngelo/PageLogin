import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor() { }

  isLoggedIn(): boolean {
    return this.isAuthenticated.getValue();
  }

  login(username: string, password: string): boolean {
    this.isAuthenticated.next(true);
    return true;
  }

  logout(): void {
    this.isAuthenticated.next(false);
  }
}
