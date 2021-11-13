<template>
  <div class="task-item" :class="task.status">
    <div 
      class="button small outline"
      @click="deleteTask"
    >
      DEL
    </div>
    <h3>{{task.name}}</h3>
    <div class="divider"></div>
    <p v-if="task.status === 'AVAILABLE'">Complete by:</p>
    <p v-else>Expired on:</p>
    <h4>{{task.expiration}}</h4>
  </div>
</template>


<script>
export default {
  name: 'TaskItem',
  props: ['task'],
  methods: {
    deleteTask() {
      // TODO Persist changes
      console.log("DELETING ", this.task);
      // Emit the delete task to update it locally
      this.$emit('task-deleted');
    }
  }
}
</script>


<style scoped>
  div {
    border-radius: 8px;
  }
  .task-item{
    position: relative;
    box-shadow: 3px 3px 3px #adadad;
    padding: 0 2rem 2rem 2rem;
  }

  .AVAILABLE{
    background: #e0c672;
  }
  
  .EXPIRED{
    background: #b6b6b6;
  }

  h3 {
    text-align: left;
    padding: 0 1rem;
    margin: 1rem 0;
    margin-top: 2rem;
  }

  p {
    text-align: left;
    padding: 0 1rem;
    margin: 0.5rem 0;
  }

  h4 {
    margin: 0.5rem;
    font-weight: 400;
  }

  .divider {
    margin: 0 1.5%;
    width: 97%;
    height: 0.15rem;
    background: #8a8a8a;
  }

  .button {
    margin: 0;
    position: absolute;
    top: 0; right: 0;
    font-size: 9pt;
    padding: 0.5rem;
    border-width: 1px;
  }

  .button:hover {
    background: #750000;
    border-color: #750000;
    color: white;
  }
</style>