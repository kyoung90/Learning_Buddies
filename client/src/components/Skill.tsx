import React from 'react';


const Skill = ({skillData}) => {
  let skill = skillData
  console.log(skill)
  const generateResources = () => {
    return skill.resources.map((resource) => {
      return(
        <p>{resource.name}</p>
      )
    })
  }
  return (
    <div>
      <p>Name: {skill.name}</p>
      <p>Resources</p>
      {generateResources()}
      <br/>
    </div>
  )
}
export default Skill
