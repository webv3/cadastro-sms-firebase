import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from '../cadastro.service';
@Component({
    selector: 'app-verifica-celular',
    templateUrl: './verifica-celular.page.html',
    styleUrls: ['./verifica-celular.page.scss'],
})
export class VerificaCelularPage implements OnInit {


    codigo: string;
    signinPhoneResult:any;

    celular;
    recaptchaChecado = false;
    
    ngOnInit(){
        this.cadastroS.recaptchaStart().then(res=>{
            console.log(res);
            this.recaptchaChecado = true;
        });
    }
    
    constructor(
        public fireAuth: AngularFireAuth,
        public aRoute:ActivatedRoute,
        private route:Router,
        private cadastroS: CadastroService,
    ) {
        this.celular = this.cadastroS.getUserInfo().celular;
    }


    enviarCodigo(){
        this.cadastroS.enviarCodigo(this.celular).then(res=>{
            console.log(res);
            this.route.navigateByUrl('/codigo-verificacao-celular');
        }).catch(err=>{
            console.log(err);
        });
    }

}
