import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AngularMaterialComponent } from '../angular-material/angular-material.component';
@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css'],
})
export class BootstrapComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(AngularMaterialComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  
}
