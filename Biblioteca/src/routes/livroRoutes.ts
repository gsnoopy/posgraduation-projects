import { Router } from 'express'
import { LivroController } from '../controllers/LivroController'

const router = Router()
const livroController = new LivroController()

router.post('/', livroController.create)
router.get('/', livroController.getAll)

export { router as livroRoutes }
