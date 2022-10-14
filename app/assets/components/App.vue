<script setup>

import router from "../routes";

function goToHome () {
  router.push('/');
}

</script>

<template>
  <div id="container">
    <div class="nav-bar">
      <div class="logo" @click="goToHome">
        <img id="logo-image" src="https://www.thomasadeloach.com/wp-content/uploads/2020/11/DM-Logo-Header-v2.png">
      </div>
      <div id="nav-links">
        <div class="nav-links-wrapper">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/episodes" class="nav-link">Episodes</router-link>
          <router-link to="/blog" class="nav-link">Blog</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
      </div>
    </div>

    <div id="view">
      <router-view></router-view>
    </div>

  </div>
</template>

<style scoped>
#container {
  border: 2px solid red;
}

#logo-image {
  width: 200px;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid black;
}

#nav-links {
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 40px;
}
.nav-links-wrapper {
  display: flex;
  justify-content: space-between;
  height: 26px;
}

.nav-link {
  text-decoration: none;
  color: black;
  border-bottom: 1px solid transparent;
  font-size: 22px;
}

.router-link-active {
  border-bottom: 1px solid black;
}

/*.nav-link:hover {
  background: #727272;
}*/

.logo:hover {
  cursor: pointer;
}

#view {

}

</style>