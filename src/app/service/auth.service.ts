import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://indicajobs.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://indicajobs.herokuapp.com/usuarios/cadastrar', usuario)
  }
  getByIdUsuario(idUsuario: number):Observable<Usuario>{
    return this.http.get<Usuario>(`https://indicajobs.herokuapp.com/usuarios/${idUsuario}` )
  }
  
  logado(){
    let ok = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
}
