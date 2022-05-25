import { Component, OnInit } from '@angular/core';
import { featured } from './featured';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  featured = featured;
  constructor() {}

  ngOnInit(): void {}
}
