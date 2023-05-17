import { Component,HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent {
 public title:String ='Nsec Alumni Community'
 public isSticky:any;
 isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
 .pipe(
   map(result => result.matches),
   shareReplay()
 );
 constructor( private breakpointObserver: BreakpointObserver){
  window.addEventListener('scroll', function(){
    var mattoolbar:any = document.querySelector("mat-toolbar");
    mattoolbar.classList.toggle("sticky", window.scrollY > 0);
  }
  )
 }
 @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 60;
  }
}
