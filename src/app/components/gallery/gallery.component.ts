import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    { src: 'assets/images/nsec1.jpg', title: 'Image 1' },
    { src: 'assets/images/activity1.jpg', title: 'Image 2' },
    { src: 'assets/images/activity3.jpg', title: 'Image 3' },
    { src: 'assets/images/activity5.jpg', title: 'Image 4' },
    { src: 'assets/images/activity6.jpg', title: 'Image 5' },
    { src: 'assets/images/activity7.jpg', title: 'Image 6' },
    { src: 'assets/images/activity8.jpg', title: 'Image 3' },
    { src: 'assets/images/activity9.jpg', title: 'Image 4' },
    { src: 'assets/images/activity4.jpg', title: 'Image 5' },
    { src: 'assets/images/activity11.jpg', title: 'Image 4' },
    { src: 'assets/images/activity12.jpg', title: 'Image 5' },
    { src: 'assets/images/activity13.jpg', title: 'Image 6' }
  ];
}
