import { Routes } from '@angular/router';
import {VueComponent} from './vue/vue.component';
import {ReactComponent} from './react/react.component';
import {AngularComponent} from './angular/angular.component';
import {LoginComponent} from './login/login.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {authGuard} from './auth.guard';

export const routes: Routes = [
  { path: 'angular', component: AngularComponent },
  { path: 'react', component: ReactComponent },
  { path: 'vue', component: VueComponent },
  { path: '', redirectTo: '/angular', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'adminpanel', component: AdminPanelComponent, canActivate: [authGuard] },
];
