import Vue from 'vue'

const state = Vue.observable({
  posts: [],
  isLoading: false,
  hasError: false
})

export const getPosts = () => state.posts
export const isLoading = () => state.isLoading
export const hasError = () => state.hasError

export function setPosts (posts) {
  state.posts = posts
}

export function setLoading (loading) {
  state.isLoading = loading
}

export function setError (error) {
  state.hasError = error
}
