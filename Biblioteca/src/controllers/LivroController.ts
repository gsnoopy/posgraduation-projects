import { Request, Response } from 'express'
import { LivroService } from "../services/LivroService";
import { CreateLivroDTO, ApiResponse } from '../types'

export class LivroController {
  private livroService = new LivroService();

  create = async (req: Request, res: Response) => {
    try {
      const data: CreateLivroDTO = req.body
      
      const livro = await this.livroService.createLivro(data)
      
      const response: ApiResponse = {
        success: true,
        data: livro,
        message: 'Livro criado com sucesso'
      }
      
      res.status(201).json(response)
    } catch (error) {
      const response: ApiResponse = {
        success: false,
        error: error instanceof Error ? error.message : 'Erro interno do servidor'
      }
      
      res.status(500).json(response)
    }
  }

  getAll = async (req: Request, res: Response) => {

    try {
      const livros = await this.livroService.getAllLivros()
      
      const response: ApiResponse = {
        success: true,
        data: livros,
        message: 'Livros encontrados com sucesso'
      }
      
      res.status(200).json(response)
    } catch (error) {
      const response: ApiResponse = {
        success: false,
        error: error instanceof Error ? error.message : 'Erro interno do servidor'
      }
      
      res.status(500).json(response)
    }
  }

  getById = async (req: Request, res: Response) => { /* chama service */ }
  update = async (req: Request, res: Response) => { /* chama service */ }
  delete = async (req: Request, res: Response) => { /* chama service */ }
}