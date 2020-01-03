import { observable, action, computed } from 'mobx'
import { createContext } from 'react'

class UserStore {
  @observable user = {}

  // set up axios



  @action loadUser = () => {
    // windows.localStorage.setItem("jwt", token)
    // widows.localStorage.getItem("jwt")
    // let token = document.querySelector('meta[name="csrf-token"]').content;
    // 'X-CSRF-Token': token
    return fetch('http://localhost:8000/users/1.json')
    .then(response => response.json())
    .then(userData => {
      this.user = userData
    })
  }


}

export default createContext(new UserStore())
