<template>
  <div class="users">
    <div class="header">
      <h4 class="subtitle">Create and Manage</h4>
      <h2 class="title">Users</h2>
    </div>

    <!-- User Creation -->
    <div 
      class="button" 
      :class="addUserClass"
      @click="showCreationPanel = !showCreationPanel;"
    >
      {{showCreationPanel ? 'Hide Add User' : '+ Add user'}}
    </div>
    <user-creation-panel
      v-if="showCreationPanel"
      @user-created="onUserCreated"
    />

    <!-- User management -->
    <div v-if="users.length > 0">
      <div class="user-item header">
        <h4>Name</h4>
        <h4>Surname</h4>
        <h4>University</h4>
        <h4>Options</h4>
      </div>
      <user-item 
        v-for="(user, index) in users"
        :key="user.username"
        :user="user"
        @user-deleted="onUserDeleted(index)"
      />
    </div>
    <div v-else class="not-found">
      <img id="not-found-img" src="../assets/users_not_found.svg"/>
      <h3>
        It seems like there are no Users so far 😥 <br>
        Start by creating one up here!
      </h3>
    </div>
  </div>
</template>

<script>
import UserCreationPanel from '@/components/UserCreationPanel.vue'
import UserItem from '../components/UserItem.vue'

export default {
  name: 'User',
  components: {UserCreationPanel, UserItem},
  // Local properties of component
  data() {
    return {
      // Local user list
      users: [],
      // Creation panel status
      showCreationPanel: false,
    }
  },
  // Lifecycles Hooks
  mounted() {
    console.log("MOUNTED");
  },
  computed: {
    addUserClass() {
      return this.showCreationPanel ? 'focused':'';
    }
  },
  methods: {
    onUserCreated(evt, user) {
      this.users.push(user);
      this.showCreationPanel = false;
    },
    onUserDeleted(index) {
      const user = this.users[index];
      console.log("USER", user);
      this.users.splice(index, 1);
    }
  }
}
</script>

<style scoped>
  .header {
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    -webkit-box-shadow: 5px 5px 0px 0px #1ac2b1, 10px 10px 0px 0px #19dbc8, 15px 15px 0px 0px #b9dbd8, 5px 5px 15px 5px rgba(0,0,0,0);
    box-shadow: 5px 5px 0px 0px #1ac2b1, 10px 10px 0px 0px #19dbc8, 15px 15px 0px 0px #b9dbd8, 5px 5px 15px 5px rgba(0,0,0,0);
    border-left: 2px solid #d4fffb; border-top: 1px solid #d4fffb;
    border-radius: 10px;
  }
  .header .title, .header .subtitle {
    margin: 0
  }

  .button {
    margin-top: 2rem;
  }

  .button.focused {
    background: #029DB1;
    width: 27rem;
    border-end-end-radius: 0px;
    border-end-start-radius: 0px;
  }

  .button.focused:hover {
    background: #16b1c5;
  }

  .user-creation {
    width: 30rem;
    display: grid;
    grid-template-columns: 25rem;
    justify-content: center;
    background: #029DB1;
    margin: auto;
    border-end-end-radius: 10px;
    border-end-start-radius: 10px;
  }

  .user-item.header {
    box-shadow: none;
    -webkit-box-shadow: none;
    border: 4px solid #08d8c3;
    padding: 0.2rem;
  }

  .user-item {
    margin: 2rem auto;
    width: 70rem;
    display: grid;
    justify-content: center;
    grid-template-columns: 29% 29% 29% 13%;
  }

  #not-found-img{
    padding: 2vw;
    width: 35%;
    height: auto;
  }

</style>