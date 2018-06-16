import React, {Component} from 'react'

export class UpdateNameMethodWorks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name
    }

    this.updateName = this.updateName.bind(this)
  }

  updateName({target: {value: name}}) {
    this.setState({
      name
    })
  }

  render() {
    return <input type="text" value={this.state.name} onChange={this.updateName}/>
  }
}

export class UpdateNameOnStateBreaks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name,
      updateName: ({target: {value: name}}) => {
        this.setState({
          name
        })
      }
    }

  }

  render() {
    return <input type="text" value={this.state.name} onChange={this.state.updateName}/>
  }
}
