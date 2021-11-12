<template>
  <div class="task-creation">
    <input v-model="newTask.name" placeholder="Name">
    <div>
      <label>Does the Task Expire?</label>
      <input class="checkbox" type="checkbox" v-model="newTask.doesExpire">
    </div>
    <date-picker 
      v-if="newTask.doesExpire" 
      v-model="newTask.expirationDate"
      type="date"
      class="date"
    />
    <div class="button small outline" @click="createTask">
      Add Task!
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css';

export default {
  name: 'TaskCreationPanel',
  components: { DatePicker },
  data() {
    return {
      newTask: {
        name: '',
        expirationDate: '',
        doesExpire: false,
      }
    }
  },

  methods: {
    createTask() {
      // TODO Persist changes
      const task = this.storeTask(this.newTask)
      // Emit the new user to store it locally
      this.$emit('task-created', this.$event, task);
      // Reset newTask temporary entry
      this.newTask = {doesExpire: false};
    },

    storeTask(task) {
      // TODO Persist task
      const date = new Date(task.expirationDate);
      return {
        id: Date.now(),
        name: task.name,
        expiration: task.doesExpire ? date.toISOString().split('T')[0] : 'NOT EXPIRES',
        status: 'AVAILABLE'
      };
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

  input.checkbox {
    height: 1rem;
    width: 1rem;
    margin: 0 1rem;
  }

  .date {
    padding: 0.2;
    margin: 1rem;
    width: 23rem;
  }

  label {
    color: white
  }
  
</style>
