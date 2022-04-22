import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EditHelferComponent } from './edit-helfer/edit-helfer.component';
import { HelferListeComponent } from './helfer-liste/helfer-liste.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: 'Helfer',
    component: HelferListeComponent,
    children: [
      {
        path: ':HelferId',
        component: EditHelferComponent
      }
    ]
  },
  {
    path: '',
    component: StartComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
