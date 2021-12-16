import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }


  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://indicajobs.herokuapp.com/postagens', this.token)
  }
  getByIdPostagem(idPost: number): Observable<Postagem> {
    return this.http.get<Postagem>(`https://indicajobs.herokuapp.com/postagens/${idPost}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>('https://indicajobs.herokuapp.com/postagens', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>('https://indicajobs.herokuapp.com/postagens', postagem, this.token)
  }

  deletePostagem(idPost: number) {
    return this.http.delete(`https://indicajobs.herokuapp.com/postagens/${idPost}`, this.token)
  }

}

