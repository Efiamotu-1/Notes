import { AppBar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { AddCircleOutlined, Note, Send, SubjectOutlined } from '@material-ui/icons'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import {format} from 'date-fns'
import Create from '../pages/Create'
import Notes from '../pages/Notes'




    const drawerWidth = 240

const useStyles = makeStyles({
        page: {
            background: '#f9f9f9',
            width : '100%'
        },

        drawer : {
            width : drawerWidth
        },

        drawerPaper: {
            width : drawerWidth
        },

        root : {
            display : 'flex'
        },

        active : {
            background : '#f4f4f4'
        },

        appbar : {
            width : `calc(100% - ${drawerWidth}px)`
        },

        date : {
            flexGrow : 1
        },
        toolbar: {
            marginTop : 100
        },

        avatar: {
            marginLeft : 16
        }
        



})

export default function Layout({children}) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            icon : <AddCircleOutlined color='secondary'/>,
            text : 'Create Notes', 
            path : '/'
        },

        {
            icon : <SubjectOutlined color='secondary'/>,
            text : 'My Notes', 
            path : '/notes'
        },

      
    ]

  return (
    <div className={classes.root}>

        {/* App Bar  */}

        <AppBar 
        elevation={0}
        className={classes.appbar}>
            <Toolbar>
                <Typography className={classes.date}>
                   Today is {format(new Date(), 'do MMMM Y')}
                </Typography>
                <Typography>
                    Mario
                </Typography>
                <Avatar src='' className={classes.avatar}/>
            </Toolbar>

        </AppBar>

    {/* Side Bar */}

        <Drawer 
        className={classes.drawer}
        anchor='left'
        classes={{paper: classes.drawerPaper}}
        variant='permanent'>
            <div>
                <Typography 
                variant='h5'
                className={classes.avatar}
                >
                     NOTES
                </Typography>
            </div>

            {/* List / Links */}

            <List>
               {menuItems.map(item => (
                   <ListItem 
                   key={item.text}
                   button
                   className={location.pathname == item.path ? classes.active : null}
                   onClick={()=> history.push(item.path)}
                   >
                       <ListItemIcon>
                           {item.icon}
                       </ListItemIcon>
                       <ListItemText primary={item.text} />

                   </ListItem>
               ))}
            </List>
        </Drawer>

        <div className={classes.page}>
       <div className={classes.toolbar}>
       {children}

       </div>
        </div>
    </div>
  )
}
