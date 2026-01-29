import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  private readonly mockUser = {
    email: 'admin@email.com',
    password: '123456',
  };

  login(email: string, password: string): boolean {
    const success =
      email === this.mockUser.email && password === this.mockUser.password;

    this.isAuthenticated = success;
    return success;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
