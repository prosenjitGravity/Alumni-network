import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
   public footer_logo:String='assets/images/nsec_logo.png' 
   public office_no:String='24572227'
   public number:String='9933764953'
   public address:String='Techno City, Garia, West Bengal 700152'
}
