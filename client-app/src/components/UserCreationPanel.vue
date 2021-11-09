<template>
  <div class="user-creation">
    <input v-model="newUser.name" placeholder="Name">
    <input v-model="newUser.surname" placeholder="Surname">
    <input v-model="newUser.university" placeholder="University">
    <div class="button small outline" @click="createUser">
      Add User!
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCreationPanel',
  data() {
    return {
      newUser: {
        name: '',
        surname: '',
        university: ''
      }
    }
  },

  methods: {
    createUser() {
      // TODO Persist changes
      const user = this.storeUser(this.newUser)
      // Emit the new user to store it locally
      this.$emit('user-created', this.$event, user);
      // Reset newUser temporary entry
      this.newUser = {}
    },

    storeUser(user) {
      user.id = `${user.name.trim().toLowerCase()[0]}.${user.surname.trim().toLowerCase()}`;
      return user;
    }
  }
}
</script>

<style scoped>
  input {
    font-size: 14pt;
    padding: 0.2rem;
    margin: 1rem;
    border: none;
    border-radius: 3px;
  }


</style>