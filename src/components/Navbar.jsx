import React from 'react'
import {AppBar, Toolbar, Typography,makeStyles} from "@material-ui/core"
import {Link} from 'react-router-dom'

const useStyle = makeStyles({
    container: {
      justifyContent:'center',
      '&  >*': {
        padding: 20,
        textDecoration: 'none',
        color:"white"
    }
       
    }
})
function Navbar() {
    const classes = useStyle();
    return (
        <AppBar >
        <Toolbar className={classes.container}>
            <Link to="/"><Typography>HOME</Typography></Link>
            <Typography>ABOUT</Typography>
            <Typography>CONTACT</Typography>
        </Toolbar>
    </AppBar>
    )
}

export default Navbar
