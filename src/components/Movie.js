import React, { Component } from "react"

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      title: "",
      director: "",
    }
  }

  componentDidMount() {
    this.setState({
      title: this.props.movie.title,
      director: this.props.movie.director,
    })
  }

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    })
  }

  handleTitle = (value) => {
    this.setState({ title: value })
  }

  handleDirector = (value) => {
    this.setState({ director: value })
  }

  handleSave = () => {
    this.props.editMovie(this.props.index, {
      title: this.state.title,
      director: this.state.director,
    })
    this.toggleEditMode()
  }

  render() {
    return this.state.editMode ? (
      <div style={{ backgroundColor: "pink" }}>
        <input
          value={this.state.title}
          onChange={(e) => this.handleTitle(e.target.value)}
        />
        <input
          value={this.state.director}
          onChange={(e) => this.handleDirector(e.target.value)}
        />
        <button onClick={this.handleSave}>Save</button>
      </div>
    ) : (
      <div style={{ backgroundColor: "pink" }}>
        <p>{this.props.movie.title}</p>
        <p>{this.props.movie.director}</p>
        <button onClick={() => this.props.deleteMovie(this.props.index)}>
          Delete Movie
        </button>
        <button onClick={this.toggleEditMode}>Edit</button>
      </div>
    )
  }
}

export default Movie

// class Movie extends Component{
//   constructor(props){
//     super(props)
//     this.state = {}
//   }

//   render(){
//     return(
//       <div>
//       <p>MOVIE TITLE GOES HERE {this.props.title}</p>
//       <p>MOVIE DIRECTOR GOES HERE</p>
//     </div>
//     )
//   }
// }
