import { Component } from '@angular/core';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent {
  public help:String='assets/images/help_page.png'
  public userName:String='Einstein'
}
