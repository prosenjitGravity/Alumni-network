import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-toolbar',
  templateUrl: './profile-toolbar.component.html',
  styleUrls: ['./profile-toolbar.component.css']
})
export class ProfileToolbarComponent {
  public name:String='Merida'
  public user_image:String="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg ";
}
