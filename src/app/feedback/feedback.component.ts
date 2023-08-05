import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodItemsService } from '../service/food-items.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  foods !:any;
  constructor(private fs : FoodItemsService,private router : ActivatedRoute){}

  ngOnInit(): void {
     this.foods=this.fs.allFoods;
  console.log("All Items:",this.foods);
  }
  searchItem(data : NgForm){
    let searchText=data.value.sText;
    if(searchText=="")
    {
      this.foods=this.foods;
    }
    else
    {
      this.foods=this.foods.filter((food: any) =>food?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    }
    console.log("Searched Items:",this.foods);
    
  }
  
}
