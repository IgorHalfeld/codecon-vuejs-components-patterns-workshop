<template>
  <div class="container">
    <h1>Scoped slots</h1>

    <QueryRenderer entity="posts" action="getAll" :payload="{ name: 'igor' }">
      <template v-slot="{ data, hasError, isLoading }">
        <p v-if="isLoading">Carregando...</p>
        <p v-if="hasError">Deu ruim!!</p>

        <div v-if="data.length && !hasError && !isLoading">
          <ul>
            <li v-for="post in data" :key="post.id">{{ post.title }}</li>
          </ul>
        </div>
      </template>
    </QueryRenderer>
    <!--
    <with-mouse>
      <template v-slot="{ coords }">
        <div
          class="box"
          :style="{
            left: `${coords.x -75}px`,
            top: `${coords.y - 75}px`
          }" />
      </template>
    </with-mouse>
    -->
  </div>
</template>

<script>
// import WithMouse from './components/WithMouse'
import QueryRenderer from './components/QueryRenderer'

export default {
  name: 'App',
  components: {
    QueryRenderer
    // WithMouse
  }
}
</script>

<style>
@keyframes blink {
  from {
    background-color: tomato;
  }
  to {
    background-color: cyan;
  }
}

* { margin: 0; padding: 0; box-sizing: border-box }
html, body, .container {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
}

.box {
  position: absolute;
  background-color: tomato;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: blink 400ms ease-in infinite;

}
</style>
