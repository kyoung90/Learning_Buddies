import { observable, action, computed } from 'mobx'
import { createContext } from 'react'

class UserStore {
  @observable user = {}



  @action loadUser = () => {
    // windows.localStorage.setItem("jwt", token)
    // widows.localStorage.getItem("jwt")
    // let token = document.querySelector('meta[name="csrf-token"]').content;
    // 'X-CSRF-Token': token
    return fetch('http://localhost:5000/users/1.json')
    .then(response => response.json())
    .then(userData => {
      this.user = userData
    })
  }


}

export default createContext(new UserStore())
