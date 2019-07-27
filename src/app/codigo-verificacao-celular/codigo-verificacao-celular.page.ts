import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigo-verificacao-celular',
  templateUrl: './codigo-verificacao-celular.page.html',
  styleUrls: ['./codigo-verificacao-celular.page.scss'],
})
export class CodigoVerificacaoCelularPage implements OnInit {

    
    codigo;

    ngOnInit() {}
    constructor(
        private router: Router,
        private cadastroS:CadastroService
    ) {}


    verificarCodigo(){
        this.cadastroS.verificarCodigo(this.codigo).then(res=>{
            console.log(res);
            this.router.navigateByUrl("/home");
        }).catch(err=>{
            alert("ERRO!");
            console.log(err);
        })
    }

}
