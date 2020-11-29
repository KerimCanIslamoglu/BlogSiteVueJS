// import axios from 'axios'
import { HTTP } from './common';
import post from '../store/modules/post'

export default {
    getAllPosts(cb) {
        HTTP
            .get('Post/GetAllPosts')
            .then(response => {
                setTimeout(() => {
                    const postList = [];
                    for (let i = 0; i < response.data.length; i++) {
                        postList.push(response.data[i])
                    }
                    post.state.posts = postList
                    cb(post.state.posts)
                }, 100)

            })
    },
}