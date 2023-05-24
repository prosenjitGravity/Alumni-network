import { Component,HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-toolbar',
  templateUrl: './profile-toolbar.component.html',
  styleUrls: ['./profile-toolbar.component.css']
})
export class ProfileToolbarComponent {
  public name:String='Merida'
  public user_image:String="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg ";
  isSticky: boolean = false;
  constructor(private router:Router){}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 80;
  }
  logout(){
    localStorage.clear();
    alert("logout successfully");
    this.router.navigateByUrl("/")
  }
}

