import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  imports: [],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  constructor(private readonly router: Router) { }

  logout() {
    localStorage.removeItem('isLoggedIn');

    this.router.navigate(['/login']);
  }
}
