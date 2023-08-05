import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeedbackComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    FormsModule
  ]
})
export class FeedbackModule { }
