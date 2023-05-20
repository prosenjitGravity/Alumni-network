import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  panelOpenState=false;
  panelOpenState1=false
  list_image='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'

  public users:any;
  constructor(private service:UserService){}
  ngOnInit(): void {
      this.service.getAlumni()
      .subscribe( (response:any)=>{
        this.users=response.msg;
        console.log(this.users);
      })
      
  } 
}
