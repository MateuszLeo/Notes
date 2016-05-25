import React, { Component } from 'react';
import { updateNote, findImg, delteNote } from '../actions';


export default class Note extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleChange(text){
    const { id } = this.props;
    var updatedNote = {
      id,
      text: text,
      img: findImg(text)
    }
    updateNote(updatedNote);
  }

  handleDeleteClick(id, target){
    target.remove()
    delteNote(id);
  }

  render(){
    const listStyle = {
      listStyleType: "none",
    }
    const linkStyle = {
      display: 'block',
      textDecoration: 'none',
      color: 'black'
    }
    const buttonStyle = {
      border: '1px solid black',
      width: '80',
      textAlign: 'center',
    }
    const { text, img, id } = this.props;
    return(
      <li style={listStyle}>
        <p style={buttonStyle} onClick={ e => this.handleDeleteClick(id, e.target.parentNode)}>DELETE</p>
        <a style={linkStyle} href={img}>IMG: {img}</a>
        <textarea for='note' onChange={ e => this.handleChange(e.target.value) }>{text}</textarea>
      </li>
    )
  }
}
