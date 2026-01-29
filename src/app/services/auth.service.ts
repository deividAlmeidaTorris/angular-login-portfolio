import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly mockUser = {
    email: 'admin@email.com',
    password: '123456',
  };

  login(email: string, password: string): boolean {
    return email === this.mockUser.email && password === this.mockUser.password;
  }
}
