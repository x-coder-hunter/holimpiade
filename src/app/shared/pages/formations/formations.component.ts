import { Component } from '@angular/core';
import { ContentComponent } from './sections/content/content.component';
import { SidebarComponent } from './sections/sidebar/sidebar.component';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [ContentComponent, SidebarComponent],
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.css'
})
export class FormationsComponent {

}
