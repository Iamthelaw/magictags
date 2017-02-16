import React, { Component } from 'react'
import _ from 'lodash'
import TagsWrapper from './components/TagsWrapper'
import './App.css'

const dataIsValid = (input) => {
  if (input && input.length > 2) {
    return true
  }
  return false
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      tags: []
    }
  }

  saveTag (event) {
    if (event.key === 'Enter') {
      let inputData = event.target.value
      if (dataIsValid(inputData)) {
        let tags = inputData.split(' ')
        this.setState({tags: _.compact(_.union(tags, this.state.tags))})
      }
      // clear input
      event.target.value = ''
    }
  }

  deleteTag (tagName) {
    this.setState({tags: _.difference(this.state.tags, [tagName])})
  }

  render () {
    return (
      <div className='App'>
        <input
          type='text' onKeyPress={this.saveTag.bind(this)}
          placeholder='Add more tags' />
        <TagsWrapper
          tags={this.state.tags} deleteTag={this.deleteTag.bind(this)} />
      </div>
    )
  }
}

export default App
