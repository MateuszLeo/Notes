import React, { Component } from 'react'
import AddNote from '../components/AddNote'
import NotesList from '../components/NotesList'
import { connect } from 'react-redux'
import { addToLocal, addNote, findImg } from '../actions'

class NoteApp extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(text){
    let note = {
      text: text,
      img: findImg(text),
      id: this.props.notes.length
    }
    addToLocal(note);
    this.props.dispatch(addNote(note));
  }

  render(){
    const { notes } = this.props;
    return (
      <div>
        <AddNote onSubmit={this.handleSubmit}/>
        <NotesList notes={notes}/>
      </div>
    )
  }
};

function mapStateToProps(state){
  const { notes } = state;
  return {
    notes: notes,
  }
}

export default connect(mapStateToProps)(NoteApp)
