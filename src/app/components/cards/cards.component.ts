import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  images = [
    { src: 'assets/images/nsec1.jpg', heading:'Winner of the Shark Pool ', description: 'Team PowerCon including Damini Ghosh, Prantap Nag and Aditya Banerjee with their product Energy Saver bagged once again the title of WINNERS at Shark Pool Season 2 at Amiphoria 2k23 organized by Amity University Kolkata.' },
    { src: 'assets/images/StudentHome.png', description: 'Image 2' },
    { src: 'https://picsum.photos/id/239/200/300', description: 'Image 3' },
    // { src: 'https://picsum.photos/id/240/200/300', description: 'Image 4' }
  ];
}
