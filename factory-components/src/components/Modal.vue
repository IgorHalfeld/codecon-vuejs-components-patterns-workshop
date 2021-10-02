<template>
  <div class="modal">
    <div class="body">
      <h1>my content</h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.modal {
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

.body {
  width: 600px;
  height: 400px;
  background-color: #f4f4f4;
}
</style>
