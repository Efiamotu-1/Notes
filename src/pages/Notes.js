import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import NoteCard from '../components/NotesCards'
import Masonry from 'react-masonry-css'




export default function Notes() {

  const [notes, setNotes] = useState([])

  useEffect(()=>{
  fetch('http://localhost:8000/notes')
  .then(res => res.json())
  .then(data => setNotes(data))
}, [])

const handleDelete = async (id) => {
  await fetch('http://localhost:8000/notes/' + id, {
    method : 'DELETE'
  })
  const newNotes = notes.filter(note => note.id != id)
setNotes(newNotes)
}

 const breakpoint = {
   default : 3,
   1100 : 2,
   700 : 1
 }

  return (
    <Container>
      <Masonry
      breakpointCols={breakpoint}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid-column'
      >
     {notes.map((note)=> (

          <div  key={note.id} item xs={12} md={6} lg={4}>
              <NoteCard note={note} handleDelete = {handleDelete}/>
          </div>
      ))}
      </Masonry>
    </Container>

  )
}
