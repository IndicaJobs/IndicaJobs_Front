import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertaComponent } from './alerta/alerta.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginCadastrarComponent } from './login-cadastrar/login-cadastrar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostagensComponent } from './postagens/postagens.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TemaComponent } from './tema/tema.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertaComponent,
    BemVindoComponent,
    PostagemEditComponent,
    TemaEditComponent,
    UsuarioEditComponent,
    PostagemDeleteComponent,
    TemaDeleteComponent,
    InicioComponent,
    LoginCadastrarComponent,
    NavBarComponent,
    PostagensComponent,
    RodapeComponent,
    TemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
