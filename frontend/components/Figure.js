import React from 'react'

export default function Figure({imageURL, caption}) {
    return(
      <figure>
        <img src={imageURL}></img>
        <figcaption className='captiondate'> Taken on {caption}</figcaption>
      </figure>
    )
  }