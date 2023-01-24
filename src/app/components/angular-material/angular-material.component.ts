import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css'],
})
export class AngularMaterialComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AngularMaterialComponent>) {}

  ngOnInit() {}
}
