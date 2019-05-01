import React from 'react'

export default function ImageGallery({images}) {
  return (
    <ul>
    {
        images.map((img, i) => img && <img src={img} key={i} alt="yo" />)
    }
    </ul>
  )
}
