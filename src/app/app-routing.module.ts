import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { MdBootstrapComponent } from './components/md-bootstrap/md-bootstrap.component';
import { SematicComponent } from './components/sematic/sematic.component';

const routes: Routes = [
  {
    path: 'bootstrap',
    component: BootstrapComponent,
  },

  {
    path: 'sematic',
    component: SematicComponent,
  },
  {
    path: 'md-bootstrap',
    component: MdBootstrapComponent,
  },
  {
    path: 'angular-mat',
    component: AngularMaterialComponent,
  },
  {
    path: '**',
    redirectTo: 'bootstrap',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
