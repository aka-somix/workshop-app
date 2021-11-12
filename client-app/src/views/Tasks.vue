<template>
  <div class="tasks">
    <div class="header">
      <h4 class="subtitle">Create and Manage</h4>
      <h2 class="title">Tasks</h2>
    </div>

    <!-- Task Creation -->
    <div 
      class="button" 
      :class="addTaskClass"
      @click="showCreationPanel = !showCreationPanel;"
    >
      {{showCreationPanel ? 'Hide Add Task' : '+ Add task'}}
    </div>
    <task-creation-panel
      v-if="showCreationPanel"
      @task-created="onTaskCreated"
    />

    <!-- Task management -->
    <div class="panel" v-if="tasks.length > 0">
          <!-- TASKS HERE!  -->
    </div>
    <div v-else class="not-found">
      <img id="not-found-img" src="../assets/users_not_found.svg"/>
      <h3>
        It seems like there are no Tasks so far 😥 <br>
        Start by creating one up here!
      </h3>
    </div>

  </div>
</template>

<script>
import TaskCreationPanel from '@/components/TaskCreationPanel.vue'

export default {
  name: 'User',
  components: {TaskCreationPanel},
  // Local properties of component
  data() {
    return {
      // Local task list
      tasks: [],
      // Creation panel status
      showCreationPanel: false,
      forceReload: 0,
    }
  },
  // Lifecycles Hooks
  mounted() {
    console.log("MOUNTED")
  },
  computed: {
    addTaskClass() {
      return this.showCreationPanel ? 'focused':'';
    }
  },
  methods: {
    onTaskCreated(evt, task) {
      this.tasks.push(task)
      this.showCreationPanel = false;
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
    -webkit-box-shadow: 5px 5px 0px 0px #07b5cc, 10px 10px 0px 0px #51e2f5, 15px 15px 0px 0px #c3e0e4, 5px 5px 15px 5px rgba(0,0,0,0);
    box-shadow: 5px 5px 0px 0px #07b5cc, 10px 10px 0px 0px #51e2f5, 15px 15px 0px 0px #c3e0e4, 5px 5px 15px 5px rgba(0,0,0,0);
    border-left: 2px solid #d4fffb; border-top: 1px solid #d4fffb;
    border-radius: 10px;
  }
  .header .title, .header .subtitle {
    margin: 0
  }

  .button {
    background: #029DB1;
    margin-top: 2rem;
  }

  .button.focused {
    background: #1ac2b1;
    width: 27rem;
    border-end-end-radius: 0px;
    border-end-start-radius: 0px;
  }

  .button.focused:hover {
    background: #14ac9c;
  }

  .task-creation {
    width: 30rem;
    display: grid;
    grid-template-columns: 25rem;
    justify-content: center;
    background: #1ac2b1;
    margin: auto;
    border-end-end-radius: 10px;
    border-end-start-radius: 10px;
  }

  .panel {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;  
  }

  #not-found-img{
    padding: 2vw;
    width: 35%;
    height: auto;
  }

</style>