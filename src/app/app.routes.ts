import { Routes } from '@angular/router';
import {VueComponent} from './vue/vue.component';
import {ReactComponent} from './react/react.component';
import {AngularComponent} from './angular/angular.component';

export const routes: Routes = [
  { path: 'angular', component: AngularComponent },
  { path: 'react', component: ReactComponent },
  { path: 'vue', component: VueComponent },
  { path: '', redirectTo: '/angular', pathMatch: 'full' }
];
