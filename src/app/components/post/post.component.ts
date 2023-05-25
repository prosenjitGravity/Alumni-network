import { Component,OnInit } from '@angular/core';
import { GetAllPostService } from 'src/app/services/get-all-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public date:any=Date.now();
  user_image='https://media.licdn.com/dms/image/C4D03AQGFTnOaQa4fUQ/profile-displayphoto-shrink_800_800/0/1623400653670?e=1689811200&v=beta&t=Vscu_ibrw3fgrwm2DkFFDdNXMLXqyNe1o6MRU_2xuDw';
  post_image='https://media.licdn.com/dms/image/D4E22AQELxk33IeYs0Q/feedshare-shrink_1280/0/1682426333538?e=1687392000&v=beta&t=9v942U-hDwC1XL4tyWuPifiM8MLUq0Q7ap4J-DXopzo';
  public posts:any;


  constructor(private service:GetAllPostService){}
  ngOnInit(): void {
    this.service.getAllPost()
    .subscribe((response)=>{
      console.log("response in posts : ",response.msg)
      this.posts=response.msg;
      console.log("ready all post : ",this.posts)
    })
  }




  
}
