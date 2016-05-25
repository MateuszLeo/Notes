import React, { Component } from 'react'

export default class AddNote extends Component {
  render(){
    const { onSubmit } =  this.props;

    let input;
    return (
      <div>
        <form id='notes'
          onSubmit={ e => {
            e.preventDefault();
            onSubmit(input.value)
            }}
          >
          <button type='submit'>ADD NOTE</button>
        </form>
        <textarea for='notes' ref={ node => { input = node ;} }></textarea>
      </div>
    )
  }
};
