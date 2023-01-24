import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { MdBootstrapComponent } from './components/md-bootstrap/md-bootstrap.component';
import { NavComponent } from './components/nav/nav.component';
import { SematicComponent } from './components/sematic/sematic.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BootstrapComponent,
    SematicComponent,
    MdBootstrapComponent,
    AngularMaterialComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, CommonModule, NgbModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
