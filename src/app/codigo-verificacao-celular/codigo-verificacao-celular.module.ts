import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CodigoVerificacaoCelularPage } from './codigo-verificacao-celular.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoVerificacaoCelularPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CodigoVerificacaoCelularPage]
})
export class CodigoVerificacaoCelularPageModule {}
