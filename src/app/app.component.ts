import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { StoreServiceService } from './service/store-service.service';
import { ApiServiceService } from './service/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';
  userData!: any;
  usertoken!: any;
  fname!:any;
  lname!:any;
  image!:any;


  baseUrl : string = "https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/";
loading : boolean = false;
  constructor(private router : Router,private user: StoreServiceService,private http : ApiServiceService){}

 
  ngOnInit(): void {
    this.router.events.subscribe(event =>{
      if (event instanceof RouteConfigLoadStart){
        this.loading= true;
        console.log("loading started"); 
      }
      else if(event instanceof RouteConfigLoadEnd){
        setTimeout(()=>{
          this.loading = false;
          console.log("loading done");
          
        },2000)
      }
    })
  }
  loggedIn()
  {
    this.usertoken=this.user.getToken();
    
    // console.log("Token collected:",this.usertoken);

    if(this.usertoken)
    {
      this.userData=this.user.getData();
      // console.log("user logged in:",this.userData); 
      this.fname=this.userData[0].first_name; 
      this.lname=this.userData[0].last_name;
      this.image=this.baseUrl+this.userData[0].profile_pic ;
    }
    return this.usertoken;
    
  }
  loggingOut()
  {
    this.user.getDestroy();
  }

}
 


