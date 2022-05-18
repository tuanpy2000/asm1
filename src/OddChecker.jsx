import React, { Component } from 'react'

export default class OddChecker extends Component {
  render() {
    return (
      <div>
          {this.props.counterValue %2 == 0 ? (<div className='checker'>La so Chan</div>): (<div className='checker'>La so le</div>)}
      </div>
    );
  }
}
