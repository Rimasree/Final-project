import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [{ path: '', component: FeedbackComponent,children:[

 
],
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
