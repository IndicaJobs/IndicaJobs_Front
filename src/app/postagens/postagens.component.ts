import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {

  nome = environment.nome;
  foto = environment.foto;
  
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  tituloPost: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  tituloTema: string

  usuario: Usuario = new Usuario()
  idUsuario = environment.idUsuario

  key: 'data'
  reverse: true

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    if(environment.token == ''){
        this.router.navigate(['/entrar'])
    }

    this.getAllTema()
    this.findByIdUsuario()
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

  findByTituloPostagem(){
    if(this.tituloPost == ''){
      this.getAllPostagens
    }
    this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByTituloTema(){
    if(this.tituloTema == ''){
      this.getAllTema
    }
    this.temaService.getByTituloTema(this.tituloTema).subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  publicar(){
    this.tema.idTema = this.idTema
    this.postagem.tema = this.tema

    this.usuario.idUsuario = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'Postagem realizada com sucesso!',
        showConfirmButton: false,
        timer: 3000
      })
      this.postagem = new Postagem()
      this.getAllPostagens()
    })

  }
}
