import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="header-title-text">
        {this.props.title}
        Hola soy el about
      </div>
    )
  }
}
