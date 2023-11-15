import React from 'react'
import { Link,useParams } from 'react-router-dom'

const MovieDescription = ({trailer, title, year}) => {
  return (
    <>
    <div>
        <Link to= "/App">Back to Home</Link>
    </div>
    <div>
        <h2>{title}</h2>
        <p>{year}</p>
    </div>
    </>
    
  )
}

export default MovieDescription