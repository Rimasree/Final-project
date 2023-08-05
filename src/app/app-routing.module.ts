import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { PnfComponent } from './component/pnf/pnf.component';




import { CreateComponent } from './component/create/create.component';

import { UpdateComponent } from './component/update/update.component';

import { ProfileComponent } from './component/profile/profile.component';
import { ProfileOneComponent } from './component/profile-one/profile-one.component';
import { RecipeComponent } from './feedback/recipe/recipe.component';
import { authGuardGuard } from './guard/auth-guard.guard';


const routes: Routes = [
  {path:"",redirectTo:"/home-page",pathMatch:"full"},
  {path:'home-page',component:HomeComponent},

  {path:"sign-in/:in_id",component:SigninComponent},
  {path:"sign-up/:up_id",component:SignupComponent},
  {path:"profile",component:ProfileComponent},
  {path:"profileone",component:ProfileOneComponent},
  {path:"blog",component:CreateComponent},

  {path:"recipe/details/:id",component : RecipeComponent,canActivate:[authGuardGuard]}, 
  {path:"profileone/details/:id",component:UpdateComponent},

  // {path:"menu/details/:id",component:ReadOneComponent},
  

  // {path:"menu",component:MenuComponent},
  // {path:"menu/details/:id",component:MenuOneComponent},
  // {path:"",component:MenuTwoComponent},
  
  { path: 'feedback', loadChildren: () => import('./feedback/feedback.module').then(m => m.FeedbackModule) },
  {path:"error",component:PnfComponent},
  {path:"**",redirectTo:"/error"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
