import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flex-layout';
  dir = 'rtl';

  toggleDirection(dir) {
    this.dir = dir === 'rtl' ? 'ltr' : 'rtl'
  }
}
