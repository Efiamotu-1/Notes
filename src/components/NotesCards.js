import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core'
import { blue, green, pink, yellow } from '@material-ui/core/colors'
import { Delete, DeleteOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

 const useStyles = makeStyles({
    avatar: {
        backgroundColor : (note) => {
            if (note.category == 'work') {
                return yellow[700]
            }
            if (note.category == 'todos') {
                return green[500]
            }
            if (note.category == 'money') {
                return pink[400]
            }

            return blue[700]
        }
    }
 })

export default function NoteCard({note, handleDelete}) {
  
    const classes = useStyles(note)
  
    return (
      

    <div>
        <Card>
            <CardHeader 
            avatar= {
                <Avatar className={classes.avatar}>
                    {note.category[0].toUpperCase()}
                </Avatar>
            }
            action={
                <IconButton onClick={()=> handleDelete(note.id)}>
                    <DeleteOutlined />
                </IconButton>
            }
            title={note.title}
            subheader={note.category}
            />
            <CardContent>
                <Typography variant='body2' color='textSecondary' elevation={3}>
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

