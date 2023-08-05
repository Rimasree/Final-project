import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { StoreServiceService } from 'src/app/service/store-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userDetails!: any;
  img_path!:any;
  arr: any[] = []; 
  blog: string = ''; 
  
  baseUrl : string = "https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/";
 
  constructor(private userSer : ApiServiceService,private storeSer : StoreServiceService ,private router : Router){}
  ngOnInit(): void {
    this.userSer.user_profile().subscribe((res:any)=>{
      console.log("User details res :",res);
      this.userDetails = res.data;
      console.log("User details:",this.userDetails);

      this.img_path = this.baseUrl + this.userDetails?.profile_pic;

      console.log(this.img_path); 

    })
  }
  loggingOut()
  {
    this.storeSer.getDestroy();
    alert("You have logged out successfully")
    this.router.navigate(['/home-page']);
  }
  
}
