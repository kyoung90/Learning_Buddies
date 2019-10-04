import React from 'react';
import {observer} from 'mobx-react-lite'
import {useContext} from 'react'
import userStoreContext from '../stores/userStore'


const Matched = () => {
  const activityStore = useContext(userStoreContext)
  const {user} = activityStore
  const generateMatchedUsers = () =>{
    let matched = user.matched_users
    if (matched){
        return matched.map((matched_user) => <h1>{matched_user.name}</h1>)
    }

  }
  return (
    <div>
      <h1>Matched Users Page</h1>
      {user ? generateMatchedUsers() : <h1>LOG IN!</h1>}
    </div>
  )
}
export default observer(Matched)
