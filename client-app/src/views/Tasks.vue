<template>
  <div class="tasks">
    <div class="header">
      <h4 class="subtitle">Create and Manage</h4>
      <h2 class="title">Tasks</h2>
    </div>

  </div>
</template>


<style scoped>
  .header {
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    -webkit-box-shadow: 5px 5px 0px 0px #07b5cc, 10px 10px 0px 0px #51e2f5, 15px 15px 0px 0px #c3e0e4, 5px 5px 15px 5px rgba(0,0,0,0);
    box-shadow: 5px 5px 0px 0px #07b5cc, 10px 10px 0px 0px #51e2f5, 15px 15px 0px 0px #c3e0e4, 5px 5px 15px 5px rgba(0,0,0,0);
    border-left: 2px solid #d8fbff; border-top: 1px solid #d8fbff;
    border-radius: 10px;
  }
  .header .title, .header .subtitle {
    margin: 0
  }
</style>