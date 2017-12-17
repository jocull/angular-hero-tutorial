import { NgModule } from '@angular/core';

import {
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations'

import {
  MatToolbarModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
  ],
  declarations: []
})
export class AppMaterialModule { }
