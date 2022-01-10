import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

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
    private route: ActivatedRoute,


  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/bem-vindo'])
    }

    this.idUsuario = this.route.snapshot.params['idUsuario']
    this.findByIdUsuario(this.idUsuario)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event: any) {
    this.tipoUser = event.target.value
  }

  atualizar() {
    this.usuario.tipo = this.tipoUser

    if (this.usuario.senha != this.confirmarSenha) {
      alert('As senhas estão incorretas.')
    } else {
      this.authService.putUsuario(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/login-cadastro'])
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Usuário atualizado com sucesso, faça o login novamente!',
          showConfirmButton: false,
          timer: 3000
        })

        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.idUsuario = 0

        this.router.navigate(['/login-cadastrar'])
      })
    }
  }

  findByIdUsuario(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })

  }
}
