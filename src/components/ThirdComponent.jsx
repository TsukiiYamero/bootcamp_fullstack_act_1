import React from 'react'

export const ThirdComponent = ({ name, lastName, card }) => {

  return (
    <div>
      <h2>Comunicación </h2>
      <ul>
        <li>{name}</li>
        <li>{lastName}</li>
        <li>{card.height}</li>
      </ul>
    </div>
  )
}


