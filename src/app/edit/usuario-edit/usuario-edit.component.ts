import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  idUsuario: number
  usuario: Usuario = new Usuario()
  confirmarSenha: string
  tipoUser: string


  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
      }

      this.idUsuario = this.route.snapshot.params['idUsuario']
      this.findByIdUsuario(this.idUsuario)
  }

  confirmSenha(event : any){
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event : any){
    this.tipoUser = event.target.value    
  }

  atualizar(){
    this.usuario.tipo = this.tipoUser

    if(this.usuario.senha != this.confirmarSenha){
      alert('As senhas estão incorretas.')
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp 
        this.router.navigate(['/inicio'])     
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }

  findByIdUsuario(id: number){
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })

  }
}
