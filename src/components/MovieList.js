import React, {Component} from 'react'
import Movie from './Movie'
import Form from './Form'

class MovieList extends Component{
  constructor(props){
    super(props)
    this.state = {
      movies: [
        {
          title: 'Star Wars',
          director: "George Lucas"
        },
        {
          title: "Ford vs Ferrari",
          director: "Nate Campbell"
        },
        {
          title: "Movie 3",
          director: "Somebody"
        }
      ]
    }
  }

  deleteMovie = (index) => {
    const {movies} = this.state
    movies.splice(index, 1)
    this.setState({movies})
  }

  addMovie = (movie) => {
    this.setState({
      movies: [movie, ...this.state.movies]
    })
  }

  editMovie = (index, movie) => {
    const {movies} = this.state
    movies.splice(index, 1, movie)
    this.setState({movies})
  }

  render(){
    return(
      <div>
        <h3>Above Movies</h3>
        <Form addMovie={this.addMovie} />
        {this.state.movies.map((movie, index) => {
          return (
            <Movie 
            movie={movie}
            deleteMovie={this.deleteMovie}
            editMovie={this.editMovie}
            index={index}
            //  title={movie.title} director={movie.director}
             />
            // <div>
            //   <p>{movie.title}</p>
            //   <p>{movie.director}</p>
            // </div>
          )
        })}
        <h3>Below Movies</h3>
      </div>
    )
  }
}

export default MovieList