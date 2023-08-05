import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodItemsService } from 'src/app/service/food-items.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  id!: any;
  subData: any[] = []; // You can replace 'any' with a custom type if available.

  constructor(private aroute: ActivatedRoute, private ser: FoodItemsService) {}

  ngOnInit(): void {
    this.aroute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log('Collected id:', this.id);

      // Find the food item using the +this.id (converts id to number)
      this.subData = this.ser.allFoods.filter((x: any) => x.id === +this.id);
      console.log('Sub-product:', this.subData);
    });
  }
}
