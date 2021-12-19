import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginCadastrarComponent } from './login-cadastrar/login-cadastrar.component';
import { PostagensComponent } from './postagens/postagens.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path:'', redirectTo: 'bem-vindo', pathMatch: 'full'},

  {path:'bem-vindo',component: BemVindoComponent},
  {path:'login-cadastrar', component: LoginCadastrarComponent},

  {path: 'inicio', component: InicioComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'postagens', component: PostagensComponent},

  {path: 'tema-edit/:idTema', component: TemaEditComponent},
  {path: 'tema-delete/:idTema', component: TemaDeleteComponent},
  {path: 'postagem-edit/:idPost', component: PostagemEditComponent},
  {path: 'postagem-delete/:idPost', component: PostagemDeleteComponent},
  {path: 'usuario-edit/:idUsuario', component: UsuarioEditComponent

}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
