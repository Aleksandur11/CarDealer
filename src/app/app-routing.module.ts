import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";


const routes: Routes = [
{
  path:'',
  pathMatch:'full',
 component:RegisterComponent,
},
{
  path:'home',
  component: AppComponent,
},
{
  path:'register',
  component: RegisterComponent,
},
{
  path:'login',
  component:LoginComponent,
}
];

export const AppRoutingModule= RouterModule.forRoot(routes);