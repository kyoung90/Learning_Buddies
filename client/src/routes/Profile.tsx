import React from 'react';
import {observer} from 'mobx-react-lite'
import {useContext} from 'react'
import userStore from '../stores/userStore'


const Profile = () => {
  const activityStore = useContext(userStore)
  const {user} = activityStore
  console.log(user.matched_users)
  return (
    <div>
      <h1>Profile Page</h1>
      {user ? <h1>{user.email}</h1> : <h1>LOG IN!!!</h1>}
    </div>
  )
}
export default observer(Profile);
