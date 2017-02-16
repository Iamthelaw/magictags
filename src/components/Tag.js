import React from 'react'

class Tag extends React.Component {
  render () {
    return (
      <span className='tag__item'>
        {this.props.name}
        <a href='#' onClick={() => this.props.deleteTag(this.props.name)}>✕</a>
      </span>
    )
  }
}

export default Tag
