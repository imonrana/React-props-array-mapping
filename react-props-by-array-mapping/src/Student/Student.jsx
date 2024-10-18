import React from 'react'
import App from '../App'





const Student =(props) => {
  return (
    <div>
        <div className="content">
        <h1>Name: {props.name} </h1>
        <h2>ID: {props.id} </h2>
        </div>

    </div>
  )
}

export default Student