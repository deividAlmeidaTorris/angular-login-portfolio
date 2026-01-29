import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  goToAddUser() {
    throw new Error('Method not implemented.');
  }
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  goToListUsers() {
    this.router.navigate(['/users-list']);
  }
}
