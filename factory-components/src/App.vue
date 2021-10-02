<template>
  <div>
    <h1>Factory component</h1>
    <modal-factory :component="component" />
  </div>
</template>

<script>
import ModalFactory from './components/ModalFactory'

export default {
  name: 'App',
  components: { ModalFactory },
  data: () => ({
    component: 'ModalLogin'
  }),
  mounted () {
    setInterval(() => {
      if (this.component === 'ModalLogin') {
        this.component = 'ModalRegister'
        return
      }

      this.component = 'ModalLogin'
    }, 1000)
  }
}
</script>
