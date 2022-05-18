import React, { Component } from 'react'

export default class  ToDoList extends Component {


  render() {
    return (
      <div className='item-container' key={this.props.name}>
          <p>{`${this.props.name} ${this.props.date}`}</p>
          <button onClick={()=>this.props.deleteItem(this.props.name)}>Delete</button>
      </div>
      
    )
  }
}
