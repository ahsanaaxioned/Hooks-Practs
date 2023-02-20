import React, { Component } from 'react'

export class ClassHooks extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

   onClickHandle =()=>{
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className="clsshooks">
        <p className="para">the number of subscribers are {this.state.count}</p>
        <button className="btn" onClick={this.onClickHandle}>Subscribe Us</button>
      </div>
    )
  }
}

export default ClassHooks

