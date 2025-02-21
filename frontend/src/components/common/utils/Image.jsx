import React from 'react'

const Image = ({src,title,className}) => {
  return (
    <div>
        <img className={className} src={src} alt={title} />
    </div>
  )
}

export default Image