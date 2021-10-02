<template>
  <div>
    <loading />
    <custom-header />
    <custom-content />
    <custom-footer />
  </div>
</template>

<script>
import { setCurrentUser } from './stores/user'
import { setLoading, setError, setPosts } from './stores/posts'
import Loading from './components/Loading'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Loading,
    CustomHeader: Header,
    CustomContent: Content,
    CustomFooter: Footer
  },
  async mounted () {
    try {
      setLoading(true)
      const { data: posts } = await this.$services.posts.getAll()
      setPosts(posts)
    } catch (err) {
      setError(!!err)
    } finally {
      setLoading(false)
    }

    setTimeout(async () => {
      setCurrentUser({
        id: '123',
        name: 'Igor',
        email: 'igor@igor.com'
      })
      console.log('setCurrentUser dispatched')
    }, 2000)
  }
}
</script>
