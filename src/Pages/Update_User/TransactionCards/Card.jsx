import React from 'react'
import "./Card.css"
export default function Card({value}) {
  return (
    <div className='card'>Card No. {value}</div>
  )
}
