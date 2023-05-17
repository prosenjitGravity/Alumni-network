import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  constructor(private modal:MatDialog){}
  Openmodal(){
    this.modal.open(ModalComponent,{
      width:"40%",
      enterAnimationDuration:"350ms",
      exitAnimationDuration:"300ms"
    })
  }
}
