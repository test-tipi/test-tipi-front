import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBasesComponent } from './components/data-bases/data-bases.component';
import { LogicComponent } from './components/logic/logic.component';

const routes: Routes = [ {
  path: '',
  redirectTo: 'logic',
  pathMatch: 'full'
  },
  {
    path:'logic',
    component:LogicComponent
  },{
    path:'data-bases',
    component:DataBasesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
