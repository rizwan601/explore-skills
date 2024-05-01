import React from 'react'

function Button(props:string) {
  return (
    <button  className="hero_btn btn">{props.title}</button>
  )
}

export default Button