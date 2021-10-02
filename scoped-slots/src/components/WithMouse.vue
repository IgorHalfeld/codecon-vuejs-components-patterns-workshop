<template>
  <div class="container" @mousemove="handleEvent">
    <slot :coords="{ x, y }"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    x: window.innerWidth * 0.5,
    y: window.innerWidth * 0.5
  }),
  methods: {
    handleEvent (event) {
      const { clientX, clientY } = event
      this.x = clientX
      this.y = clientY
    }
  }
}
</script>
