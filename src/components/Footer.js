import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Footer extends Component {
  render() {
    return (
      <div className="footer"> created by: {this.props.author} </div>
    )
  }
}
Footer.propTypes = {
  author: PropTypes.string.isRequired
}

export default React.memo(Footer);