import React, { Component } from "react"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      director: "",
    }
  }

  handleTitle = (value) => {
    this.setState({
      title: value,
    })
  }

  handleDirector = (value) => {
    this.setState({
      director: value,
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.title}
          onChange={(e) => this.handleTitle(e.target.value)}
        />
        <input
          value={this.state.director}
          onChange={(e) => this.handleDirector(e.target.value)}
        />
        <button onClick={() => {
          this.props.addMovie(
          {
            title: this.state.title,
            director: this.state.director
          }
        )
        this.setState({title: '', director: ''})
        }}>Add Movie</button>
      </div>
    )
  }
}

export default Form
