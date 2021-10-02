<script>
export default {
  data: () => ({
    hasError: null,
    component: null
  }),
  props: {
    fallback: {
      type: Object,
      required: true
    }
  },
  errorCaptured (err) {
    this.hasError = true
    console.log('captured: ', err)
    this.$emit('error-captured', { err })
  },
  render (h) {
    if (this.hasError) {
      return h(this.fallback)
    }

    return this.$slots.default
  }
}
</script>
