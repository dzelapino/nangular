import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
  isAngular = true;
  angularFeatures = ['Modularność', 'Dependency Injection', 'RxJS', 'Kompleksowe narzędzia do testowania'];
}
