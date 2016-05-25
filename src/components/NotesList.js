import React, { Component } from 'react'
import Note from './Note'

export default class NotesList extends Component{
  render(){
    const { notes } = this.props;

    const NotesComponent = notes.map( note =>
        <Note key={note.id} {...note}/>
      )
    return(
      <ul>
        {NotesComponent}
      </ul>
    )
  }
}
