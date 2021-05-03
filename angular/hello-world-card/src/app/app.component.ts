import { Component } from '@angular/core';
import { HelloWorldCardComponent } from './hello-world-card/hello-world-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-card';
}
