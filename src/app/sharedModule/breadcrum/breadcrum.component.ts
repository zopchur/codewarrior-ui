import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.scss']
})
export class BreadcrumComponent implements OnInit {
  @Input() breadcrumValue: string | undefined;
  constants = Constants;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('test');
  }

  breadCrumbHome() {
    this.router.navigate(['/dashboard']);
  }

}
