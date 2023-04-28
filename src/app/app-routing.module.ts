import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'chart/:title', component: ChartComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
