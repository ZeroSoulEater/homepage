import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './sites/index/index.component';
import { S404Component } from './sites/s404/s404.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: '**', component: S404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
