import React,{useState, useEffect} from 'react'
import {Box, Button, TextareaAutosize, makeStyles} from '@material-ui/core'
import {postComment, getComment} from '../../services/api'
import Comment from './Comment'

const styles = makeStyles({
    container:{
        display:"flex",
        marginTop:50,
        marginBottom:60
    },
    image:{
        width:50,
        height:50,
        borderRadius:"50%"
    },
    text:{
        margin:"0 10px",
        width:"100%"
    },
    button:{
        height:40
    },

})
const initialValue = {
    username:"",
    comment:"",
    date:new Date(),
    postId:""
}

function Comments({post}) {
    const classes = styles()
    // console.log(post)

    const url = "https://th.bing.com/th/id/R.a12a420a08a45d015a39a58c898ba894?rik=bumHaJmzYpGBXw&riu=http%3a%2f%2favatars.design%2fwp-content%2fuploads%2f2016%2f09%2f28_GIF.gif&ehk=SUIWZH553x%2fEqHyNiBc4D0KPe72oY1ntbIEyne5On5U%3d&risl=1&pid=ImgRaw&r=0"

    const [comment, setComment] = useState(initialValue)
    const [comments, setComments] = useState([])
    const [toggle , setToggle] = useState(false)
    const [data, setData] = useState()

    useEffect(() => {
        const getData = async () => {
            const response = await getComment(post._id)
            setComments(response)
        }
        getData()
    }, [toggle, post])

    const handleChange = (e) => {
        setComment({
            ...comment,
             username:post.username,
             postId:post._id,
             comment:e.target.value
        })
        setData(e.target.value)
    }


    const addComment = async () =>{
        await postComment(comment)
        setData('')
        setToggle(prev => !prev)
    }

    return (
        <Box>
            <Box className={classes.container}>
                <img src={url} alt="dp" className={classes.image}/>
                <TextareaAutosize minRows={5} className={classes.text} onChange={(e) => handleChange(e)} value={data}/>
                <Button variant="contained" color="primary" className={classes.button} onClick={(e) => addComment(e)}>Post</Button>
            </Box>

            <Box>
                {
                    comments && comments.map(comment => (
                        <Comment comment={comment} setToggle={setToggle}/>
                    ))
                }
            </Box>
        </Box>
    )
}

export default Comments

