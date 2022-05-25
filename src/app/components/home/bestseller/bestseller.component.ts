import { Component, OnInit } from '@angular/core';
import { bestseller } from './bestseller';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.scss'],
})
export class BestsellerComponent implements OnInit {
  bestseller = bestseller;
  constructor() {}

  ngOnInit(): void {}
}
