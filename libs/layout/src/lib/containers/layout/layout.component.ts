import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'barrel-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(public router: Router) {}
}
