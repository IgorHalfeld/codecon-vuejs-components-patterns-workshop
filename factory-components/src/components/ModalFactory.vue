<template>
  <component :is="component" />
</template>

<script>
import ModalLogin from './ModalLogin'
import ModalRegister from './ModalRegister'

export default {
  components: {
    ModalLogin,
    ModalRegister
  },
  props: {
    component: { type: String, required: true }
  }
}
</script>
