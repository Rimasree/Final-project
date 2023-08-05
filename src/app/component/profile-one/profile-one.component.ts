import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-profile-one',
  templateUrl: './profile-one.component.html',
  styleUrls: ['./profile-one.component.css']
})
export class ProfileOneComponent implements OnInit{

  RecipeForm!:FormGroup;
  data!:any;
  userEmail!: string;
  filteredData!: any[];

constructor(private formbuilder : FormBuilder,private router:Router,private api:HttpService){}



ngOnInit(): void {
  this.RecipeForm=this.formbuilder.group({
    heading:['',Validators.required], 
    content:['',Validators.required],   
    name:['',Validators.required],
   
  })
  this.getRecipe();
}



addRecipe(data:any) {
  // Check if the form is valid before submitting
  let stored_email=window.localStorage.getItem('email');
  console.log("STored email: ",stored_email);
  
  if (this.RecipeForm.valid) {
    // Send the form data to the API using HttpService
    let recipe={
      ...this.RecipeForm.value,
      email:stored_email
    }
    console.log(recipe);
    
    this.api.addRecipe(recipe).subscribe((res) => {
      console.log("API Response:", res);
      alert("Blog added")
      
      // After successful API call, refresh the blog post data
      this.getRecipe();
    });
  }
}
getRecipe() {
  this.api.getRecipe().subscribe(
    (res) => {
      this.data = res; // Assuming the response is an array of blog post objects
      // Find the user's email from the data array
 
      let stored_email=window.localStorage.getItem('email');
      const userPost = this.data.find((x: any) => x.email ===stored_email);
      if (userPost) {
        this.userEmail = userPost.email;
        // Filter the data array to get only the blog posts that match the user's email
        this.filteredData = this.data.filter((x: any) => x.email === this.userEmail);
      }
    },
    (error) => {
      console.error('Error fetching recipes:', error);
    }
  );
}


deletion(id:number) {
  this.api.deleteRecipe(id).subscribe(res => {
    console.log("Blog deleted:",res);
    
    alert("Blog deleted");
    // this.router.navigate(["/blog"]);
    this.api.getRecipe().subscribe((res)=>{
      this.data=res;
      this.getRecipe();
    });
  });
 
}

}
