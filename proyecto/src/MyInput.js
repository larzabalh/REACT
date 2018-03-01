import React, { Component } from 'react'

class MyInput extends Component {
  


  render() {
    return (
      <input value={this.props.value} type=""  onChange={this.props.onChange} className="style" />
    )
  }
}

export default MyInput