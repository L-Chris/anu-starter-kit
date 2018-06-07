import {BaseURL} from '@/utils/decorators'
import Base from './Base'

@BaseURL('/user')
class User extends Base {
  constructor (args) {
    super()
  }
}

export default new User()
