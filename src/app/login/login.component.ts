import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';



@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private static readonly ADMIN_USERNAME : string = 'admin';
  private static readonly ADMIN_PASSWORD : string = 'admin';

  username: string = '';
  password: string = '';

  constructor(private readonly router: Router) { }

  login() {
    if (this.username === LoginComponent.ADMIN_USERNAME && this.password === LoginComponent.ADMIN_PASSWORD) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/adminpanel']);
    } else {
      alert('Nieprawidłowe dane logowania');
    }
  }
}
