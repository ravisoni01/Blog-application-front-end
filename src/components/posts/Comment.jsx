import React from 'react'
import {Box, Typography, makeStyles} from "@material-ui/core"
import {Delete} from "@material-ui/icons"
import { deleteComment } from '../../services/api'
const styles = makeStyles({
    container:{
        display:"flex"
    },
    image:{
        width:30,
        height:30,
        borderRadius:"50%",
        marginRight:10
    },
    box:{
        background:"#eaeaea",
        margin:'30px 0',
        padding:15
    },
    name:{
        fontSize:19,
        fontWeight:700
    },
    date:{
        color:"#696969",
        fontSize:14,
        marginLeft:20
    },
    icon:{
        marginLeft:'auto'
    }
})

function Comment({comment, setToggle}) {
    console.log(comment)
    const url = "https://th.bing.com/th/id/R.a12a420a08a45d015a39a58c898ba894?rik=bumHaJmzYpGBXw&riu=http%3a%2f%2favatars.design%2fwp-content%2fuploads%2f2016%2f09%2f28_GIF.gif&ehk=SUIWZH553x%2fEqHyNiBc4D0KPe72oY1ntbIEyne5On5U%3d&risl=1&pid=ImgRaw&r=0"

    const classes = styles()

    const removeComment = async () => {
       await deleteComment(comment._id)
       setToggle(prev => !prev)
    }


    return (
       <Box className={classes.box}>
            <Box className={classes.container}>
                <img src={url} alt="dp" className={classes.image}/>
                <Typography className={classes.name}>{comment.username}</Typography> 
                <Typography className={classes.date}>{new Date(comment.date).toDateString()}</Typography> 
               <Delete className={classes.icon} onClick={() => removeComment()}/>
            </Box>
           <Typography>{comment.comment}</Typography>
       </Box>
    )
}

export default Comment
