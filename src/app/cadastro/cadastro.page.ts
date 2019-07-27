import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.page.html',
    styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

    nome: string;
    email: string;
    senha: string;
    celular: string;
    codigo: string;
    
    ngOnInit(){}
    constructor(
        private cadastroS: CadastroService,
        private router:Router
    ) {}


    cadastro() {
        this.cadastroS.cadastroUser({
            nome: this.nome,
            email: this.email,
            senha: this.senha,
            celular: "+55"+this.celular
        }).then(res=>{
            console.log(res);
            this.router.navigateByUrl("/verifica-celular");
        });
    }
}
