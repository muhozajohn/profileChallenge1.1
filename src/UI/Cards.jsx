import React from 'react'

const Cards = ({className,children}) => {
  return (
    <article className={`card ${className}`}>
        {children}

    </article>
  )
}

export default Cards