<template>
  <div>
    <p v-if="hasError">Um error aconteceu</p>
    <p v-if="isLoading">Carregando</p>

    <template v-if="posts.length && !isLoading">
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </template>

    <p v-if="!posts.length && !isLoading">Nenhum post :(</p>
  </div>
</template>

<script>
import {
  getPosts,
  isLoading,
  hasError
} from '../stores/posts'

export default {
  computed: {
    posts: getPosts,
    isLoading,
    hasError
  }
}
</script>
