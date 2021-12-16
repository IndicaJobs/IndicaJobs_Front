import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { Router } from '@angular/router';
import { Usuario } from './../model/Usuario';
import { Tema } from './../model/Tema';
import { Postagem } from './../model/Postagem';
import { AuthService } from './../service/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav: MatSidenav;
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  idUsuario = environment.idUsuario
  usuario: Usuario = new Usuario()

  nome = environment.nome;
  foto = environment.foto;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService) { }

    ngOnInit() {

      if(environment.token == ''){
          this.router.navigate(['/entrar'])
      }

      this.getAllTema()
      this.getAllPostagens()
    }

    getAllTema(){
      this.temaService.getAllTema().subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }

    findByIdTema(){
      this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
        this.tema =resp
      })
    }

    getAllPostagens(){
      this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }

    findByIdUsuario(){
      this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
        this.usuario = resp
      })

    }

    publicar(){
      this.tema.idTema = this.idTema
      this.postagem.tema = this.tema

      this.usuario.idUsuario = this.idUsuario
      this.postagem.usuario = this.usuario

      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        alert('Postagem realizada com sucesso!')
        this.postagem = new Postagem()
        this.getAllPostagens()
      })

    }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=> {
      if(res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();

      }
    })
  }
}
