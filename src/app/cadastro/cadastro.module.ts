import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroPage } from './cadastro.page';

import { AngularFireAuth } from '@angular/fire/auth';

const routes: Routes = [
    {
        path: '',
        component: CadastroPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CadastroPage],
    providers: [
        AngularFireAuth
    ]
})
export class CadastroPageModule { }
