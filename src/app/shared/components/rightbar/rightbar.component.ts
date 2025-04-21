import { Component } from '@angular/core';

@Component({
  selector: 'app-rightbar',
  standalone: true,
  imports: [],
  templateUrl: './rightbar.component.html',
  styleUrl: './rightbar.component.css'
})
export class RightbarComponent {
  image="assets/images/background.jpg";
  public  color:string="green"

  ngOnInit(){
    this.color="red"
  }

}
