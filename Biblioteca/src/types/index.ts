export interface CreateLivroDTO {
  titulo: string
  autor: string
  isbn: string
  editoraId?: number
}

export interface UpdateLivroDTO {
  titulo?: string
  autor?: string
  isbn?: string
  editoraId?: number
}

export interface CreateEditoraDTO {
  nome: string
}

export interface UpdateEditoraDTO {
  nome?: string
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}
