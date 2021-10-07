import React,{useEffect,useState} from 'react'
import {Box,makeStyles, Typography} from "@material-ui/core"
import {Delete, Edit} from "@material-ui/icons"
import {Link} from "react-router-dom"
import {getPost,deletePost} from '../../services/api'
import { useHistory } from 'react-router'
import Comments from './Comments'



const styles = makeStyles(theme => ({
    container:{
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image:{
        height:'60vh',
        width:"100%",
        objectFit:"cover"
    },
    icons:{
        float:"right"
    },
    icon:{
        border:"1px solid grey",
        margin:5,
        padding:5,
        borderRadius:9
    },
    heading:{
        fontSize:40,
        fontWeight:600,
        textAlign:'center',
        margin:"50px 0 10px 0"
    },
    detail:{
        display:'flex',
        margin:"25px 0",
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
}))

function DetailsPost({match}) {
    
    const classes = styles()
    
    const [post, setPost] = useState({})
    const history = useHistory()
    
    const url = post.image || 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPost(match.params.id)
            // console.log(data)
            setPost(data)
        }
        fetchData()
    }, [])

    const deleteBlog = async () => {
        await deletePost(post._id)
        history.push('/')
    }

    return (
        <Box className={classes.container}>
           <img src={url} alt="post" className={classes.image}/>
           
           <Box className={classes.icons}>
               <Link to={`/update/${post._id}`}>
                    <Edit className={classes.icon} color="primary"/>
               </Link>
               <Link>
                    <Delete className={classes.icon} onClick={() => deleteBlog()} color="error"/>
               </Link>
           </Box>

           <Typography className={classes.heading}>{post.title}</Typography>

           <Box className={classes.detail}> 
           <Link to={`/?username=${post.username}`} className={classes.link}>
               <Typography>
                   Author : {post.username}
               </Typography>
           </Link>
               <Typography style={{marginLeft: 'auto'}}>
                   Date : {new Date(post.createdDate).toDateString()}
               </Typography>
           </Box>

           <Typography>
                {post.description}
           </Typography>

           <Comments post={post}/>
        </Box>
    )
}

export default DetailsPost
