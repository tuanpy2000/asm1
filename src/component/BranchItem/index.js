import React, { Component } from 'react'

export default class  BranchItem extends Component {

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.name !==nextProps.name||this.props.price!==nextProps.price){
            return true
        }
        return false
    }

  render() {
    console.log(`Branch item with name${this.props.name} render at ${new Date()}`)
    return (
      <div className='item-container' key={this.props.name}>
          <p>{`${this.props.name}-${this.props.price}`}</p>
      </div>
    )
  }
}
