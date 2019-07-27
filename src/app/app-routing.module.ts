import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'verifica-celular', loadChildren: './verifica-celular/verifica-celular.module#VerificaCelularPageModule' },
  { path: 'codigo-verificacao-celular', loadChildren: './codigo-verificacao-celular/codigo-verificacao-celular.module#CodigoVerificacaoCelularPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
