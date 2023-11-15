import { useEffect, useState } from 'react'
import './App.css'
// import MovieDescription from './Components/MovieDescription'
import MovieCard from './Components/MovieCard'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
 
// const [moviesData, setMoviesData] = useState("")

const [movies, setMovies] = useState ([
  {
    id: 1,
    title:"Oh My",
    year: "2020",
    rating: "6.5",
    trailer:"//www.youtube.com/embed/5TGa3xTIsfI"
  },
  {
    id: 2,
    title:"City Boy",
    year: "2020",
    rating: "6.5",
    trailer:"https://www.youtube.com/embed/hLDQ88vAhIs"
  },
  {
    id: 3,
    title:"Calm Down",
    year: "2020",
    rating: "6.5",
    trailer:"https://www.youtube.com/embed/CQLsdm1ZYAw?si"
  },
  {
    id: 4,
    title:"Commend",
    year: "2020",
    rating: "6.5",
    trailer:"https://www.youtube.com/embed/pr5YwkazQbw?si"
  },
  {
    id: 5,
    title:"Ye",
    year: "2020",
    rating: "6.5",
    trailer:"https://www.youtube.com/embed/lPe09eE6Xio"
  },
  {
    id: 6,
    title:"Essence",
    year: "2020",
    rating: "6.5",
    trailer:"https://www.youtube.com/embed/jipQpjUA_o8"
  },
  {
    id: 7,
    title:"Try Me",
    year: "2020",
    rating: "6.5",
    trailer:"https://www.youtube.com/embed/hVEp-P2-rqY"
  },
  {
    id: 8,
    title:"Vanilla",
    year: "2020",
    rating: "6.5",
    trailer:"https://www.youtube.com/embed/wNYl4ZCZDAI"
  },
  {
    id: 9,
    title:"All My Life",
    year: "2020",
    rating: "6.5",
    trailer:"https://www.youtube.com/embed/IW4KbVdISps"
  },
  {
    id: 10,
    title:"Toast",
    year: "2020",
    rating: "6.5",
    trailer:"https://www.youtube.com/embed/p8HoEvDh70Y"
  },
  {
    id: 11,
    title:"Fall",
    year: "2020",
    rating: "6.5",
    trailer:"https://www.youtube.com/embed/3Iyuym-Gci0?si"
  },
  {
    id: 12,
    title:"Risky",
    year: "2020",
    rating: "6.5",
    trailer:"https://www.youtube.com/embed/B9H3iinXZv0?s"
  },
])

const [searchText, setSearchText] = useState("")


const filteredMovies = movies?.filter(
  (movie) => (
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  )
);
const handlehome = () => {
  setSearchText("")
}
  return (
    <>
     <div>
      {/* <Router path="/movie/:title">
      <MovieDescription
      title={filteredMovies.title}
      year={filteredMovies.year}
      rating={filteredMovies.rating}
      trailer={filteredMovies.trailer}/>
      </Router> */}
      <Router path="/">
      <div className="form">
      <form>
      <input type="text"
      placeholder='Search...'
      value={searchText}
      onChange = {(event) => setSearchText(event.target.value)}
      />
      </form>
      </div>

      <div className="first">
      {filteredMovies.map(({id, title, year, rating, trailer}) => {
        return (
          <MovieCard
          key={id}
          title={title}
          year={year}
          rating={rating}
          trailer={trailer}
          />
        )
      })}
      </div>
      </Router>
     </div>
    </>
  )
}


export default App
