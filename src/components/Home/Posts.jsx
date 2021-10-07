import React,{useEffect, useState} from 'react'
import {Grid} from "@material-ui/core"
import Post from './Post'
import {Link, useLocation} from "react-router-dom"
import {getAllPosts} from '../../services/api'


function Posts() {

    const [posts , setPosts] = useState([])
    const {search} = useLocation()
    useEffect(() => {
      const fetchData = async () => {
        const data = await getAllPosts(search)
        // console.log(data)
        setPosts(data)
      }
      fetchData()
    }, [search])

    return (
        posts.map(post => (
            <Grid item lg={3} sm={4} xs={12}>
                <Link to={`/detail/${post._id}`} style={{textDecoration:"none" , color:"inherit"}}> 
                    <Post post={post}/>
                </Link>
            </Grid>
        ))
    )
}

export default Posts
