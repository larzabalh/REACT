import React, { Component } from 'react'

class Like extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLiked: props.defaultValue,
      clicks: 0
    }
  }

  toggleLike = () => {
    this.setState({
      isLiked: !this.state.isLiked,
      clicks: this.state.clicks + 1
    })
  }

  render() {
    return (
      <div onClick={this.toggleLike}>
        {this.state.isLiked ? 'like!' : 'Not Like'}
        <b>{this.state.clicks}</b>
      </div>
    )
  }
}

export default Like