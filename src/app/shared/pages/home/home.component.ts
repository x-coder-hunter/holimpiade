import { Component } from '@angular/core';
import { LeftbarComponent } from "../../components/leftbar/leftbar.component";
import { RightbarComponent } from "../../components/rightbar/rightbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeftbarComponent, RightbarComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
