import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { StoreServiceService } from 'src/app/service/store-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  loginForm!:FormGroup;
  data!:any;
  in_id!:any;

  constructor(private fb: FormBuilder,private aroute:ActivatedRoute,private api:ApiServiceService,private router:Router,private storeSer:StoreServiceService){}
  // password!:any;

  // show = false;
  ngOnInit(): void {

    // this.aroute.paramMap.subscribe((params)=>{
    //   this.in_id=params.get('id');
    //   console.log("Collected id:",this.in_id);

    // })
    this.loginForm=this.fb.group({
      
      email:['',Validators.required],
      password:['',Validators.required],
      // cpassword:['',Validators.required],
    })

    // this.password = 'password';
  }
  dataSubmit(){
    console.log("Submitted value:",this.loginForm.value);
    
    this.api.loginData(this.loginForm.value).subscribe((res:any)=>{
      console.log("Response after posting:",res);
      let userResponse:any=res;
      if(res.status==200)
      {
        alert(userResponse.message);
        this.storeSer.setData(userResponse.data.first_name,
          userResponse.data.last_name,
        
          userResponse.data.email,
          userResponse.token,userResponse.data.profile_pic);
        // alert("Login Done");
        this.router.navigateByUrl('/profile');
        
      }
      else
      {
        alert("Registration Error,try again");
      }
    })
  }

}
