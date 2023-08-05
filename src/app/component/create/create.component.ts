import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  RecipeForm!:FormGroup;
  data!:any;
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
      alert("Recipe added")
      
      // After successful API call, refresh the blog post data
      this.getRecipe();
    });
  }
}
getRecipe(){
 
    this.api.getRecipe().subscribe(
      (res) => {
        this.data = res; // Assuming the response is an array of blog post objects
      },
      (error) => {
        console.error('Error fetching recipes:', error);
      }
    );
  
  
  this.api.getRecipe().subscribe((res)=>{
    this.data=res; 
   
    
  })
  
}

// deletion(id:number) {
//   this.api.deleteRecipe(id).subscribe(res => {
//     console.log("Product deleted:",res);
    
//     alert("Product deleted");
//     // this.router.navigate(["/blog"]);
//     this.api.getRecipe().subscribe((res)=>{
//       this.data=res;
//     })
//   })
// }
}

