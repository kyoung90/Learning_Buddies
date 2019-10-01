import { observable } from 'mobx'
import { createContext } from 'react'

class UserStore {
  @observable title = 'Hello from mobx'
}

export default createContext(new UserStore())
