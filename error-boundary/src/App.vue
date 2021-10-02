<template>
  <div>
    <loading />
    <custom-header />
    <custom-content />
    <custom-footer />
    <error-boundary :fallback="fallbackComponent">
      <post-list />
    </error-boundary>
  </div>
</template>

<script>
import { setCurrentUser } from './stores/user'
import ErrorBoundary from './components/ErrorBoundary'
import Loading from './components/Loading'
import Header from './components/Header'
import PostList from './components/PostList'
import Content from './components/Content'
import Footer from './components/Footer'
import Fallback from './components/Fallback'

export default {
  name: 'App',
  data: () => ({
    fallbackComponent: Fallback
  }),
  components: {
    Loading,
    CustomHeader: Header,
    CustomContent: Content,
    CustomFooter: Footer,
    PostList,
    ErrorBoundary
  },
  async mounted () {
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
