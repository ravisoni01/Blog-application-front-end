import axios from 'axios'

const url = 'http://localhost:8000'

export const createPost = async (post) => {
    // console.log("hello")
    try {
        return await axios.post(`${url}/create`, post)
    } catch (error) {
        console.log("error occur while creating post ", error)
    }
}
export const getAllPosts = async (params) => {
    try {
        const data = await axios.get(`${url}/posts${params}`)
        return data.data
    } catch (error) {
        console.log("error occur while getting all posts ", error)
    }
}
export const getPost = async (id) => {
    try {
        let data = await axios.get(`${url}/post/${id}`)
        // console.log(data)
        return data.data
    } catch (error) {
        console.log("error occur while get one post ", error)
    }
}
export const updateBlog = async (id, post) => {
    try {
        await axios.post(`${url}/update/${id}`, post)

    } catch (error) {
        console.log("error occur while get one post ", error)
    }
}
export const deletePost = async (id) => {
    try {
        await axios.delete(`${url}/delete/${id}`)

    } catch (error) {
        console.log("error occur while delete post ", error)
    }
}
export const uploadFile = async (data) => {
    // console.log(data)
    try {
        return await axios.post(`${url}/file/upload`, data)
    } catch (error) {
        console.log("error occur while uploading the image :", error)
    }

}
export const postComment = async (comment) => {
    try {
        return await axios.post(`${url}/comment/post`, comment)
    } catch (error) {
        console.log("error occur while post comment in the blog:", error)
    }

}
export const getComment = async (id) => {
    try {
        const response = await axios.get(`${url}/comments/${id}`)
        return response.data
    } catch (error) {
        console.log("error occur while get comment in the blog:", error)
    }

}
export const deleteComment = async (id) => {
    try {
        return await axios.delete(`${url}/comments/delete/${id}`)
    } catch (error) {
        console.log("error occur while delete comment in the blog:", error)
    }

}
