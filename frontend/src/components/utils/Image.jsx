import React from 'react'

const Image = ({src,title,className}) => {
  return <img className={className} src={src} alt={title} />
}

export default Image