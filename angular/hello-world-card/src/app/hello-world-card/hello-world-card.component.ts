import { Component, OnInit } from '@angular/core';
import './../../web-components/hello-world-card';

@Component({
  selector: 'hello-world-card',
  templateUrl: './hello-world-card.component.html',
  styleUrls: ['./hello-world-card.component.css']
})
export class HelloWorldCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
