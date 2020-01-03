import React from 'react';
import {observer} from 'mobx-react-lite'
import {useContext} from 'react'
import userStore from '../stores/userStore'

import Skill from '../components/Skill'


const Profile = () => {
  const activityStore = useContext(userStore)
  const {user} = activityStore
  const generateSkills = () => {
    let skills = user.skills
    if (skills) {
      return skills.map((skill) => {
        return (
            <Skill skillData={skill} />
        )
      })
    }
  }
  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h4>{user.email}</h4>
        <p>{user.bio}</p>
        <div>


            <p>Listed Skills</p>
            <br/>
            {generateSkills()}

        </div>
      </div>
    )
  } else {
    return (
      <h1>LOG IN!!!</h1>
    )
  }
}
export default observer(Profile);
