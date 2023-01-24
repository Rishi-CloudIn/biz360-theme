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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BootstrapComponent,
    SematicComponent,
    MdBootstrapComponent,
    AngularMaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
