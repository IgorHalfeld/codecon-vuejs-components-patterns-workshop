<template>
  <div class="loading" v-if="status">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    status: false
  }),
  created () {
    this.$g.loading.onToggle(({ payload }) => {
      console.log('toggling')
      this.status = payload
    })
  },
  destroyed () {
    this.$g.loading.off()
  }
}
</script>

<style scoped>
.loading {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .6);
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  color: white;
  font-weight: 800;
  font-size: 44px;
}
</style>
