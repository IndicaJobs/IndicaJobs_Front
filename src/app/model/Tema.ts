import { Postagem } from "./Postagem"

export class Tema {

public idTema: number
public tituloTema: string
public descricaoTema: string
public palavraChave: string
public postagem: Postagem[]
}