import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-cadastrar',
  templateUrl: './login-cadastrar.component.html',
  styleUrls: ['./login-cadastrar.component.css']
})
export class LoginCadastrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  usuario: Usuario = new Usuario()
  confirmarSenha: string
  tipoUser: string

  constructor(
    private authService : AuthService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    
    window.scroll(0,0)
  }

  confirmSenha(event : any){
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event : any){
    this.tipoUser = event.target.value    
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUser

    if(this.usuario.senha != this.confirmarSenha){
      alert('As senhas estão incorretas.')
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp 
        this.router.navigate(['/login-cadastrar'])     
        this.alerta.showAlertSuccess('Usuário cadastrado com sucesso!')
      }, erro => {
        if (erro.status != 201){
          this.alerta.showAlertDanger('Usuário já está cadastrado, tente com um novo usuário!')
        }
      })
    }
  }

  logar(){
    this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.foto = this.usuarioLogin.foto
      environment.nome = this.usuarioLogin.nome
      environment.idUsuario = this.usuarioLogin.idUsuario
      environment.tipo = this.usuarioLogin.tipo
      
      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.foto)
      console.log(environment.idUsuario)
      console.log(environment.tipo)


      this.router.navigate(['/inicio'])      
    }, erro=>{
      if(erro.status != 201){
        alert('Usuário ou senha estão incorretos.')
      }
    }
    )
  }
}
