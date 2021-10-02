<script>
import services from '../services'

export default {
  props: {
    entity: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    payload: {
      type: [Object, Array],
      default: () => ({})
    }
  },
  data: () => ({
    data: [],
    isLoading: false,
    hasError: false
  }),
  async created () {
    try {
      if (!services[this.entity]) {
        throw new Error('entity not found')
      }

      const { data: response } = await services[this.entity][this.action](this.payload)
      this.data = response
      this.isLoading = true
    } catch (err) {
      this.hasError = !!err
    } finally {
      this.isLoading = false
    }
  },
  render (h) {
    const slot = this.$scopedSlots.default({
      data: this.data,
      isLoading: this.isLoading,
      hasError: this.hasError
    })

    return h('div', slot)
  }
}
</script>
