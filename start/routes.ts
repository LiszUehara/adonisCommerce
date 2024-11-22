import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
router.get('/', () => {
  return 'Hello world from the home page.'
})

const UsersController = () => import('#controllers/users_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('users', [UsersController, 'index'])
router.post('/register', [AuthController, 'register']).as('auth.register')
router.post('/login', [AuthController, 'login']).as('auth.login')
router.delete('/logout', [AuthController, 'logout']).as('auth.logout')
router.get('/me', [AuthController, 'me']).as('auth.me')
