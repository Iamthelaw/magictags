import React from 'react'
import Tag from './Tag'

class TagsWrapper extends React.Component {
  render () {
    return (
      <div className='tags__wrapper'>
        {this.props.tags.map((object, i) => {
          return <Tag name={object} key={i} deleteTag={this.props.deleteTag} />
        })}
      </div>
    )
  }
}

export default TagsWrapper
