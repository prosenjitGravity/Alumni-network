import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent {
  panelOpenState = false;
  panelOpenState1= false;
  constructor( private breakpointObserver: BreakpointObserver){
  window.addEventListener('scroll', function(){
    var mattoolbar:any = document.querySelector("mat-toolbar");
    mattoolbar.classList.toggle("sticky", window.scrollY > 0);
  }
  )
 }
}
