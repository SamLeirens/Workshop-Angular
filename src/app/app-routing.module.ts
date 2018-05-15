import { OverzichtComponent } from './Overzicht/overzicht.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
 {path: 'overzicht', component: OverzichtComponent},
  {path: '**', redirectTo: 'overzicht'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule 
  ]
})
export class AppRoutingModule { }
