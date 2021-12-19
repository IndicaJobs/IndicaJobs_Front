import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

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

  putUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('https://indicajobs.herokuapp.com/usuarios/atualizar', usuario)
  }
  
  logado(){
    let ok = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  adm(){
    let ok = false

    if(environment.tipo == 'adm'){
      ok = true
    }
    return ok
  }
}
