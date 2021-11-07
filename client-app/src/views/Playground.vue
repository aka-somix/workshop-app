<template>
  <h3 class="title">
    HI {{name}}!
  </h3>
</template>

<script>
export default {
  name: 'Playground',
  data() {
    return {
      name: 'Salvo'
    }
  }
}
</script>

<style scoped>
  .title{
    color:blue;
  }

</style>