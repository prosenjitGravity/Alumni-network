import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
     public cover_image:String='assets/images/code_open.jpg'
     public user_image:String="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg ";
     public first_name:String="Merida"
     public last_name:String="Avatar"
     public gender:String=""
     

    
}
