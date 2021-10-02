<template>
  <h1>Post List</h1>
</template>

<script>
function getPosts () {
  return new Promise((_, reject) => { // eslint-disable-line
    setTimeout(() => {
      // resolve([{ id: 123, title: 'post 1' }, { id: 321, title: 'post 2' }])
      reject(new Error('api offline'))
    }, 2000)
  })
}

export default {
  async mounted () {
    const posts = await getPosts()
    console.log('posts', posts)
  }
}
</script>
