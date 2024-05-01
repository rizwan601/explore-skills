import React from 'react'

function   Input(props: string) {
  return (
    <input type={props.type} placeholder={props.placeholder} required />
  )
}

export default Input