import { Component } from '@angular/core';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Holimpiade';
  image = "../assets/images/background.jpg";
}
