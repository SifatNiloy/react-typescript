import React from 'react'

const User = (props:{name: string; age: number}) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
    </div>
    
  )
}

export default User