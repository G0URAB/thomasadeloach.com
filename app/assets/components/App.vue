<script setup>


</script>

<template>
  <div id="container">
    <div class="nav-bar">
      <div class="logo">
        Pastor Thomas
      </div>
      <div id="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/episodes" class="nav-link">Episodes</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </div>
    </div>

    <div id="view">
      <router-view></router-view>
    </div>

  </div>
</template>

<style scoped>
#container {
  margin: auto;
  width: 80%;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid black;
}

#nav-links {
  width: 400px;
  display: flex;
  justify-content: space-between;
}

.nav-link {
  text-decoration: none;
  color: black;
  border-bottom: 1px solid transparent;
}

.router-link-active, .nav-link:hover {
  border-bottom: 1px solid black;
}

#view {
  display: flex;
  justify-content: center;
  padding: 20px;
}

</style>