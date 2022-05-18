import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
        const post = this.props.allPeople.filter(item =>
          item.login.toLowerCase().includes(e.target.value.toLowerCase())
        );
        this.props({
          people: post
        })
      }

  render() {
    return (
        <div>
          <label>Name</label>
          <input value={this.props.filterText} onChange={this.handleFilterTextChange}></input>
        </div>
    )
  }
}
