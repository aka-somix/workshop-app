<template>
  <div id="app" class="container">
    <!-- <playground/> -->
    <div id="nav">
      <router-link class="entry" to="/">Home</router-link>
      <router-link class="entry" to="/users">Users</router-link>
      <router-link class="entry" to="/tasks">Tasks</router-link>
      <router-link class="entry" to="/pg">Playground</router-link>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>


<style>

/* GLOBAL PROPERTIES */
html {
  font-size: 14pt;
  color: #2c3e50;
}

h1 {
  font-size: 80pt;
}
h2 {
  font-size: 50pt;
}
h3 {
  font-size: 30pt;
}
h4 {
  font-size: 20pt;
}

.button {
  display: inline-block;
  cursor: pointer;
  padding: 1rem 2rem;
  background: #00a896;
  color: white;
  border-radius: 8px;
  font-size: 20pt;
  transition: 300ms;
  margin: 0.5rem;
}

.button.small{
  padding: 0.5rem 1rem;
  font-size: 14pt;
  border-radius: 5px;
}

.button:hover {
  background: #08d8c3;
}

.button.outline {
  background: none;
  border: 4px solid white;
}
.button.outline:hover {
  background: white;
  color: #00a896;
}

/* APP Global Styling */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
  background: #d5d6d6;
}

/* NAV Styling */

#nav, .users, .tasks {
  margin: 1vw 5vw;
}

#nav {
  display: flex;
}

#nav .entry {
  padding: 1rem;
  font-size: 20pt;
  text-decoration: none;
  color: #00a896;
}

#nav .entry:hover {
  text-decoration: underline double;
  background-color: #029DB1;
  color: white;
  border-radius: 6px;
  transition: 200ms;
}

</style>
