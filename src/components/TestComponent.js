import React, {Component} from 'react'

export default class TestComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: props.name,
      shortName: props.name[0],
      inputValue: ''
    }
  }

  inputOnChange = (evt) => {
    this.setState({
      inputValue: evt.target.value
    })
  }

  handleClick = () => {
    this.setState({
      name: this.state.inputValue,
      shortName: this.state.inputValue[0] || ''
    })
  }

  render () {
    return (<div>
      HOLA {this.state.name}, short name: {this.state.shortName}
      <br />
      <input onChange={this.inputOnChange} />
      <br />
      <button onClick={this.handleClick}> Change NAME! </button>
    </div>)
  }
}
