import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{

  public idPost: number
  public tituloPost: string
  public textoPost: string
  public data: Date
  public palavraChavePost: string
  public usuario: Usuario
  public tema: Tema
}