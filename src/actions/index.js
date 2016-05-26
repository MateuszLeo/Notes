export const addNote = ({ img, text, id }) => {
  return {
    type: 'ADD_NOTE',
    text,
    img,
    id,
  };
};

export const delteNote = (id) => {
  const notes = getLocalStorage();
  if ( notes.length !== 1 ){
    notes.splice(id, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
  } else {
    localStorage.clear();
  }
}

export const updateNote = ({ text, id, img }) => {
  let notes = getLocalStorage();
  notes[id] = {
    text: text,
    id: id,
    img: img,
  }
  localStorage.setItem('notes', JSON.stringify(notes));
};

export const getLocalStorage = () => {
    let notes = localStorage.getItem('notes');
    return ( notes !== null ) ? JSON.parse(notes): [];
};

export const findImg = (note) => {

    let imgRegEx = /https?:\/\/.*\.(?:png|jpg)/gi
    let urlRegEx = /(https?:\/\/[^\s]+)/g

    let getUrl = note.match(urlRegEx);
    console.log(getUrl);
    return getUrl !== null ? getUrl.toString() : '';
};

export const addToLocal = ({ img, text, id }) => {
  let notes = getLocalStorage();
  notes.push({ text, img, id });
  localStorage.setItem('notes', JSON.stringify(notes));
};
