<template>
  <div>
    <h1>Footer</h1>

    <p v-if="!hasUserLogged">Nenhum usuário logado</p>
    <p v-else>Usuário logado: {{ currentUser.name }}</p>
  </div>
</template>

<script>
import { getCurrentUser } from '../stores/user'

export default {
  computed: {
    hasUserLogged () {
      return this.currentUser.id !== ''
    },
    currentUser: getCurrentUser
  }
}
</script>

<style scoped>
div {
  display: flex;
  padding: 10px;
  border: 1px solid red;
  justify-content: space-between;
  align-items: center;
}

h1 {
  color: purple;
}
</style>
