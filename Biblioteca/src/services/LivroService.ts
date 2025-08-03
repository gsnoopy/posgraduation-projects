import { prisma } from "../config/database";
import { CreateLivroDTO, UpdateLivroDTO } from "../types";

export class LivroService {

    async createLivro(data: CreateLivroDTO) {
        try {

            const livro = await prisma.livro.create({
                data: {
                titulo: data.titulo,
                autor: data.autor,
                isbn: data.isbn,
                editoraId: data.editoraId
                },
                include: {
                editora: true
                }
            })
            
            return livro
        } catch (error) {
            throw new Error(`Erro ao criar livro: ${error}`)
        }
  }

  async getAllLivros() {
    try {

      const livros = await prisma.livro.findMany({
        include: {
          editora: true
        }
      })
        
      return livros

    } catch (error) {
      throw new Error(`Erro ao buscar livros: ${error}`)
    }

  }

  async getLivroById(id: number) {

  }

  async updateLivro(id: number, data: UpdateLivroDTO) {

  }

  async deleteLivro(id: number) {
    await prisma.livro.delete({
      where: { id }
    })
  }
  
  // Métodos específicos de negócio
  async getLivrosByEditora(editoraId: number) { /* lógica */ }
  async searchLivrosByTitulo(titulo: string) { /* lógica */ }
}