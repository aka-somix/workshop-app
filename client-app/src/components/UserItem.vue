<template>
  <div class="user-item">
    <h4>{{user.name}}</h4>
    <h4>{{user.surname}}</h4>
    <h4>{{user.university}}</h4>
    <div class="button small" @click="deleteUser">Delete</div>
  </div>
</template>

<script>
export default {
  name: 'UserCreationPanel',
  props: ['user'],
  methods: {
    deleteUser() {
      // TODO Persist changes
      // Emit the delete user to update it locally
      this.$emit('user-deleted');
    }
  }
}
</script>

<style scoped>
  h4 {
    margin: 0.5rem 0;
    border-bottom: 2px solid black;
  }

  .button {
    height: 1rem;
  }
</style>