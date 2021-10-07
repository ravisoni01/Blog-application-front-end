import React,{useState, useEffect} from 'react'
import {Box, FormControl, InputBase, makeStyles, Button, TextareaAutosize} from '@material-ui/core'
import {AddCircle} from "@material-ui/icons"
import {createPost,uploadFile} from '../../services/api'
import {useHistory} from 'react-router-dom'

const styles = makeStyles(theme => ({
    container:{
        margin:"50px 100px",
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image:{
        height:'60vh',
        width:"100%",
        objectFit:"cover"
    },
    form:{
        display:'flex',
        flexDirection:"row",
        marginTop:12
    },
    input:{
        flex:1,
        margin:"0 20px",
        fontSize:25
    },
    textArea:{
        width:"100%",
        marginTop:60,
        border:"none",
        fontSize:20,
        "&:focus-visible":{
            outline:"none"
        }
    }
}))

const initialPost = {
    title:'',
    description:'',
    image:'',
    username:'raviSoni',
    categories:'all',
    createdDate: new Date()
}

function CreatePost() {
    const classes = styles()
    const history = useHistory()

    
    const [post , setPost] = useState(initialPost)
    const [file, setFile] = useState('')
    const [image , setImage] = useState('')
    
    const url = post.image || 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    useEffect(() => {
        const getImage = async () => {
            if(file){
                const data = new FormData()
                data.append("name" , file.name)
                data.append("file", file)
                const image =  await uploadFile(data)
                post.image = image.data
                setImage(image.data)
            }
        }
        getImage()
    }, [file])

    const changeHandle = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }

    const savePost = async () => {
        await createPost(post)
        history.push('/')
    } 

    return (
          <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image}/>
            <FormControl className={classes.form}>
                <label htmlFor="fileInput">
                    <AddCircle fontSize="large" color="action"/>     
                </label>
                <input 
                    type="file"
                    id="fileInput"
                    style={{display:'none'}}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputBase
                 onChange={(e) => changeHandle(e)} 
                 placeholder="title" 
                 className={classes.input}
                 name="title"
                 />       
                <Button variant="contained" color="primary" onClick={() => savePost()}>Publish</Button>
            </FormControl>

            <TextareaAutosize 
                minRows={6}
                placeholder="Write Your Thought Here......"
                className={classes.textArea}
                name="description"
                onChange={(e) => changeHandle(e)}
            />
        </Box>
    )
}

export default CreatePost
