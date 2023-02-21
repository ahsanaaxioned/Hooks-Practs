import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'hello ahsan'
        }

        // third method for binding event
        this.changeClick = this.changeClick.bind(this)
    }
    changeClick() {
        console.log(this)
        this.setState({
            name: 'good morning'
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                {/* <button className='btn' onClick={this.changeClick.bind(this)}>Click On Me</button> */}
                {/* 1st method for event binding */}
                {/* <button className='btn' onClick={()=>{this.changeClick()}}>Click On Me</button> */}
                {/* 2nd method for event binding */}
                <button className='btn' onClick={this.changeClick}>Click On Me</button>
            </div>
        )
    }
}

export default EventBind
