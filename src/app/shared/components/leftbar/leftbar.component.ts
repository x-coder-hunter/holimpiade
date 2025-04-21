import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-leftbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './leftbar.component.html',
  styleUrl: './leftbar.component.css'
})
export class LeftbarComponent {
  image="assets/images/background.jpg";
  img="assets/images/img.jpg";
  img1="assets/images/img1.jpg";
  img2="assets/images/img2.jpg";
  img3="assets/images/img3.png";
  img4="assets/images/img4.jpg";
  img5="assets/images/img5.jpg";
  img6="assets/images/img6.jpg";
}
