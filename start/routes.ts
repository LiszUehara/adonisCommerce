import router from '@adonisjs/core/services/router'

router.get('/', () => {
  return 'Hello world from the home page.'
})

const UsersController = () => import('#controllers/users_controller')

router.get('users', [UsersController, 'index'])
