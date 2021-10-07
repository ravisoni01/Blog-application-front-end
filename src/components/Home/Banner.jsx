import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const styles = makeStyles({
    container:{
        background: `url(${'https://source.unsplash.com/1600x900/?coding,computer'}) center/55% repeat-x #000`,
        width:"100%",
        height:'60vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center',
        "& :first-child":{
            fontSize:80,
            color:"white"
        },
        "& :last-child":{
            fontSize:25,
            background:"rgb(0,0,0,1)",
            color:"white",
            padding:10
        }
    }
})
function Banner() {
    const classes = styles()
    return (
        <Box className={classes.container}>
            <Typography>Blogger</Typography>
            <Typography>Write Your Blog Here</Typography>
        </Box>
    )
}

export default Banner
