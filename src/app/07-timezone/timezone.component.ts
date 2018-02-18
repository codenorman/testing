import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  @Input() datetime;
  @Input() tzOffset;

  hours = [];
  constructor() {
    this.hours = Array.from(Array(24).keys()).map(index => index-12);
  }

  ngOnInit() {}

  hourOffset = (hour) => this.tzOffset
}
