import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  nome = environment.nome;
  foto = environment.foto;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {

  }
  
  sair() {

    this.router.navigate(['/bem-vindo'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.idUsuario = 0
  }

}
