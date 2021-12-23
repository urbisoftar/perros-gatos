import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'perros-gatos';

  constructor(private router: Router){
  }

  gotoGatos() {
    this.router.navigateByUrl('/gatos');
  }
}
