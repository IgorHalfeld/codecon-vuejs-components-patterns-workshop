import Vue from 'vue'

// State
const state = Vue.observable({
  currentUser: {
    id: '',
    name: '',
    email: ''
  }
})

// Getters
export const getCurrentUser = () => state.currentUser

// Actions
export function setEmail (email) {
  state.currentUser.email = email
}

export function setCurrentUser (user) {
  state.currentUser = user
}
