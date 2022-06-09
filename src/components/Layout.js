import { AppBar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { AddCircleOutlined, Note, Send, SubjectOutlined } from '@material-ui/icons'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import {format} from 'date-fns'
import passport from './PASSPORT.jpg'



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
            background : 'blue'
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
            icon : <SubjectOutlined color='secondary'/>,
            text : 'My Notes', 
            path : '/'
        },

        {
            icon : <AddCircleOutlined color='secondary'/>,
            text : 'Create Notes', 
            path : '/create'
        },

      
    ]
    // const action = function () {
    //     const time = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23 ]
        
    //     if (new Date().getHours() === time[0] || time[1] || time[2] || time[3] || time[4] || time[5] || time[6] || time[7] || time[8] || time[9] || time[10] || time[11]){
    //         return 'Good Morning'
    //     } 
    //      else if (new Date().getHours() === time[12] || time[13] || time[14] || time[15] || time[16] || time[17] || time[18]) {
    //         return 'Good Afternoon'
    //     }
    //     else if (new Date().getHours() === time[19] || time[20] || time[21] || time[22] || time[23]) {
    //         return 'Good Evening'
    //     }

    // }

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
                  
                   Welcome Habeeb
                </Typography>
                <Avatar src={passport} className={classes.avatar}/>
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
                   sx={{color : 'white'}}
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
