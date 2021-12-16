import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatButtonModule} from '@angular/material/button'
import { MatIconModule} from '@angular/material/icon'
import { MatDividerModule} from '@angular/material/divider'


import { AppComponent } from './app.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { PostagensComponent } from './postagens/postagens.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';



@NgModule({
  declarations: [
    AppComponent,

    LoginCadastroComponent,
    RodapeComponent,
    NavBarComponent,
    BemVindoComponent,
    EsqueceuSenhaComponent,
    InicioComponent,
    TemaComponent,
    PostagensComponent,
    TemaEditComponent,
    PostagemEditComponent,
    TemaDeleteComponent,
    PostagemDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
