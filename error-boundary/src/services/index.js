import axios from 'axios'
import PostsService from './posts'

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export default {
  posts: PostsService(httpClient)
}
