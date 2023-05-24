import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-video',
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.css'],
})
export class CardVideoComponent {
      public name:String='Netaji Subhash Engineering College';
      public profile:String='assets/images/nasa_engineer.png'
}
