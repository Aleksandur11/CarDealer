import { Component } from '@angular/core';
import * as Parse from 'parse';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    // Initialize your Parse App Keys
    Parse.initialize("cL8puxyL4c4X3bKoMS8uGNNT3AXTPlsQHtwISn95","adWKgxqhTUylXmA9kp2gsq05cuyshYdtEYyCElTF"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    (Parse as any).serverURL = 'https://parseapi.back4app.com/';
  }
}
