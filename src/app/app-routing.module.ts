import { PostagensComponent } from './postagens/postagens.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';

import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';

const routes: Routes = [


  {path:'', redirectTo: 'bem-vindo', pathMatch: 'full'},

  {path:'bem-vindo',component: BemVindoComponent},
  {path:'login-cadastrar', component: LoginCadastroComponent},
  {path:'esqueceu-senha', component: EsqueceuSenhaComponent},

  {path: 'inicio', component: InicioComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'postagens', component: PostagensComponent},

  {path: 'tema-edit/:idTema', component: TemaEditComponent},
  {path: 'tema-delete/:idTema', component: TemaDeleteComponent},

  {path: 'postagem-edit/:idPost', component: PostagemEditComponent},
  {path: 'postagem-delete/:idPost', component: PostagemDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
