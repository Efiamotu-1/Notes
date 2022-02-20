import React, { useState } from 'react'
import  Typography  from '@material-ui/core/Typography'
import { Button, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { AcUnitOutlined, Work } from '@material-ui/icons'
import { Send } from '@material-ui/icons'
import { KeyboardArrowRight } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Radio, RadioGroup } from '@material-ui/core'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const useStyles = makeStyles({

  field : {
    marginTop: 20,
    marginBottom : 20,
    display : 'block'
  }
  // btn: {
  //   fontSize : 10,
  //   backgroundColor : 'violet',
  //   '&:hover': {
  //     backgroundColor : 'blue'
  //   }
  // },

  // title: {
  //   textDecoration: 'underline',
  //   marginBottom : 20
  // }
})



export default function Create() {
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false) 
  const [category, setCategory] = useState('') 
  


  const handleSubmit = (e)=>{
    e.preventDefault()

    setTitleError(false)
    setDetailsError(false)

    if (title == '') {
        setTitleError(true)
    }

    if (details == '') {
      setDetailsError(true)
    }

    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"content-type" : "application/json"},
        body: JSON.stringify({title,details,category})
      }).then(()=> history.push('/'))
    }

  }
  
  return (
    <Container>  

      <Typography 
      className={classes.title}
      variant='h6'
      component='h2'
      gutterBottom
      color='textSecondary'
      >
        Create a new note
      </Typography>
     

<form noValidate autoComplete='off' onSubmit={handleSubmit}>
  <TextField
   label='Note Title' 
  variant='outlined' 
  color='secondary' 
  fullWidth
  required
  className={classes.field}
  onChange={(e)=> setTitle(e.target.value)}
  error={titleError}
  // onChange={}
  />

<TextField
   label='Details' 
  variant='outlined' 
  color='secondary' 
  fullWidth
  required
  className={classes.field}
  multiline
  rows={4}
  error={detailsError}
  onChange={(e)=> setDetails(e.target.value)}
  />
  
<FormControl className={classes.field}>
  <FormLabel>Choose a category</FormLabel>
<RadioGroup value={category} onChange={(e)=>{setCategory(e.target.value)}}>
    <FormControlLabel value="money" control={<Radio/>} label='Money' />
    <FormControlLabel value="todos" control={<Radio/>} label='Todos' />
    <FormControlLabel value="reminders" control={<Radio/>} label='Reminders' />
    <FormControlLabel value="work" control={<Radio/>} label='Work' />
</RadioGroup>
</FormControl>
<Button type='submit' className={classes.btn}  endIcon={< KeyboardArrowRight />} color='secondary' variant='contained'>submit</Button>


</form>
 

    </Container>
  )
}


// startIcon={<Send />}

 {/* <Typography 
      variant="h1"
      color="primary"
      align="center"
      >
        Create a new note
      </Typography> */}

          {/* <Typography 
          noWrap
          color="secondary"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quo iusto libero reprehenderit impedit atque corporis ut sint, fuga nostrum adipisci tempora voluptatum doloribus delectus corrupti explicabo illo ullam. Amet.
      </Typography> */}

       {/* icons */}

      {/* <AcUnitOutlined color='secondary' fontSize='large' />
      <AcUnitOutlined  fontSize='small' color='disabled'/> */}

      // <Button
      //   variant='outlined'
      //   type='submit'
      //   color='secondary'

      //   >Submit</Button>