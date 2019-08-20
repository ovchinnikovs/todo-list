import React from 'react'
import './Button.css'


export default function Button({ onClick, title, disabled, className, type }) {
  return (
    <button type={type} className={className} disabled={disabled} onClick={onClick}>
      {title}
    </button>
  )
}
