import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Usuario } from 'src/app/model/Usuario';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem: Postagem = new Postagem()
  idPost: number

  usuario: Usuario = new Usuario()
  idUsuario: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService

  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idPost = this.route.snapshot.params['idPost']
    this.findByIdPostagem(this.idPost)
  }

  findByIdPostagem(idPost: number){
    this.postagemService.getByIdPostagem(idPost).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }


  apagar(){
    this.postagemService.deletePostagem(this.idPost).subscribe(()=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'Postagem apagada com sucesso!',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['/inicio'])
    })
  }

}