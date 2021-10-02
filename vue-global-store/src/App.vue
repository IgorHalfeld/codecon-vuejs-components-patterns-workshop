<template>
  <div>
    <custom-header />
    <custom-content />
    <custom-footer />
  </div>
</template>

<script>
import { setCurrentUser } from './stores/user'
import { setLoading, setError, setPosts } from './stores/posts'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import services from './services'

export default {
  name: 'App',
  components: {
    CustomHeader: Header,
    CustomContent: Content,
    CustomFooter: Footer
  },
  mounted () {
    setTimeout(async () => {
      try {
        setLoading(true)
        const { data: posts } = await services.posts.getAll()
        setPosts(posts)
      } catch (err) {
        setError(!!err)
      } finally {
        setLoading(false)
      }

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
