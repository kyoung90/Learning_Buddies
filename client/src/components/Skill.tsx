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
      <p className='left'>Name: {skill.name}</p>
      <br/>
      <p>Resources</p>
      {generateResources()}
    </div>
  )
}
export default Skill
