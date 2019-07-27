import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { NavController } from '@ionic/angular';

import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class CadastroService {

    //codigo digitado pelo usuario para comparacao com codigo enviado por sms
    codigo: string;

    //instancia do recaptcha
    recaptchaInstance:any;
    //resultado ao enviar codigo para celular
    signinPhoneResult:any;

    //informacoes do usuario preenchidas no inicio do cadastro
    private userInfo = {
        nome : "",
        email : "",
        celular : ""
    }

    constructor(
        public fireAuth: AngularFireAuth,
        public nv: NavController,
        public router: Router,

        private firestore: AngularFirestore
    ) {}

    //cadastra email e senha do usuario
    cadastroUser(info: {nome, email, senha, celular}) : Promise<any> {
        return new Promise((resolv, reject)=>{
            this.fireAuth.auth.createUserWithEmailAndPassword(info.email, info.senha).then(res => {

                this.userInfo.nome = info.nome;
                this.userInfo.email = info.email;
                this.userInfo.celular = info.celular;

                resolv(res);
            }).catch(err => {
                reject(err);
            });
        });
    }


    //retorna informacoes do usuario preenchidas no inicio do cadastro
    getUserInfo(){
        return this.userInfo;
    }

    
    //inicia o recaptcha criando uma instancia.
    //cria uma nova instancia do firebase passando o config
    //assim que o recaptcha for preenchido, resolve a promise
    recaptchaStart() : Promise<any> {
        
        firebase.initializeApp(environment.firebase);
            
        this.recaptchaInstance = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        this.recaptchaInstance.render();

        return new Promise((resolv,reject)=>{
            this.recaptchaInstance.verify().then(res=>{
                resolv(res);
            }).catch(err=>{
                reject(err);
            });
        });
    }

    

    //envia o codigo por sms para celular
    enviarCodigo(celular:string) : Promise<any> {
        return new Promise((resolv, reject) =>{
            console.log("Enviando codigo para ",celular);
            this.fireAuth.auth.signInWithPhoneNumber(celular, this.recaptchaInstance).then(signinPhoneResult => {
                this.signinPhoneResult = signinPhoneResult;
                resolv(signinPhoneResult);
            }).catch(err => {
                reject(err);
            });
        });
    }

    //confirma o codigo digitado pelo usuario com  o enviado por sms
    verificarCodigo(codigo): Promise<any> {
        return new Promise((resolv,reject)=>{
            this.signinPhoneResult.confirm(codigo).then(result => {

                //depois de verificado o celular, grava as info do usuario no banco
                //cadastra o usuario no banco
                this.addDbUser({
                    email : this.userInfo.email,
                    name : this.userInfo.nome,
                    phone : this.userInfo.celular,
                    phoneVerificado : true
                }).then(res=>{
                    resolv(res);
                }).catch(err=>{
                    reject(err);
                });
            }).catch(err => {
                reject(err)
            });
        });
    }



    //CADASTRO NA TABELA -----------------------------------------
    addDbUser(value: { email: string; name: string; phone: string, phoneVerificado: boolean }):Promise<any> {
        const usersCollection = this.firestore.collection('users');
        return usersCollection.add(value);
    }
}
