import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  id!: any;
  Recipe!: any;
  constructor( private activatedroute: ActivatedRoute, private router: Router, private api: HttpService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params) => {
      this.id = params.get('id');

      console.log("id collected :", this.id);
    this.api.fetchRecipe(this.id).subscribe((res: any) => {
      
      this.Recipe = res;
      console.log("Collected old data: ",this.Recipe);
    })   
    })
  
  }

 
  submitData(data: NgForm){
    console.log("Recieved form :",data.value);

    let itemData = {
      heading: (data.value.heading == '') ? this.Recipe.heading : data.value.heading,
      name: (data.value.name == '') ? this.Recipe.name : data.value.name,
      content: (data.value.content == '') ? this.Recipe.content : data.value.content,
      email:window.localStorage.getItem('email')
    };
    console.log("new data to send :", itemData);

  this.api.updateRecipe(this.id, itemData).subscribe((res) => {
    
       console.log("Editted Data:", res);
      alert("blog ediited successfully");
      
      this.router.navigate(["/profileone"]);
    })

  } 

}  
