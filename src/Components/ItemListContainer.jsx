import React from 'react'

export default function ItemListContainer(props) {
  return (
    <div style={{ textAlign: 'center', padding: '1.5 rem'}}>
      <h2>{ props.greeting }</h2>
    </div>
  )
}