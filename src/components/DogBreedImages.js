import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages (props) {
  return (
    <div className="dog-breed-images">
      { props.images && props.images.map(url => <img src={ url } alt="Dog" />) }
      { !props.images && 'Loading...' }
      <Link to="/">Go back to the index</Link>
    </div>
  )
}
