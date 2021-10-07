import { Box, Typography, makeStyles} from '@material-ui/core'
import React from 'react'

const styles = makeStyles({
    container:{
        border:'1px solid grey',
        borderRadius:10,
        margin:10,
        display:'flex',
        alignItems:"center",
        flexDirection:'column',
        height:360,
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image:{
        width:"100%",
        objectFit:"cover",
        borderRadius:"10px 10px 0 0",
        height:"100"
    },
    textColor:{
        fontSize:12,
        color:"grey"
    },
    heading:{
        fontSize:18,
        fontWeight:600
    },
    details:{
        fontSize:15,
        wordBreak:"break-word"
    }
})

function Post({post}) {
    const url = post.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
    const classes = styles()

    const addElipsis = (str,limit) => {
        return str.length > limit ? str.substring(0,limit) + "...": str
    }

    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image}/>
            <Typography className={classes.textColor}>{post.categories}</Typography>
            <Typography className={classes.heading}>{addElipsis(post.title, 30)}</Typography>
            <Typography className={classes.textColor}>Author : {post.username}</Typography>
            <Typography className={classes.details}>{addElipsis(post.description, 120)}</Typography>
        </Box>
    )
}

export default Post
