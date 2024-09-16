import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TestComponent } from './test/test.component';
import { ResultComponent } from './result/result.component';
import { loginGuard } from './login.guard';
import { alertGuard } from './alert.guard';

export const routes: Routes = [
    {path:'',component:WelcomeComponent},
    {path:'test',component:TestComponent,canActivate:[loginGuard],canDeactivate:[alertGuard]},
    {path:'result',component:ResultComponent},
    {path:'**',component:WelcomeComponent}
];
