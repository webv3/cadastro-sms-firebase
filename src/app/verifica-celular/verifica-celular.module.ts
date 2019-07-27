import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerificaCelularPage } from './verifica-celular.page';
import { AngularFireAuth } from '@angular/fire/auth';

const routes: Routes = [
  {
    path: '',
    component: VerificaCelularPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerificaCelularPage],
  providers: [AngularFireAuth]
})
export class VerificaCelularPageModule {}
