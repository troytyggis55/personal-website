<template>
  <nav>
    <ul class="menu">
      <li><a href="#aboutme">Academic Projects</a></li>
      <li><a href="#cv">Personal Projects</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Heavily copied from https://github.com/frontend-joe/css-navbars/blob/main/navbar-15/styles.css */

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav {
  width: 100%;
  padding-top: 20px;
}

a {
  cursor: pointer;
}

.menu {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 70px;
  gap: 20px;
}

.menu li {
  display: inline-block;
  width: 180px;
  transition: all 0.3s ease-in-out;
}

.menu > li:hover > a {
  color: #3e95ff;
}

.menu > li:hover > a::before {
  visibility: visible;
  scale: 1 1;
}

.menu > li a {
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 7px;
  text-decoration: none;
  position: relative;
  height: 100%;

  transition: all 0.4s ease-in-out
}

.menu > li > a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 3px;
  left: 0px;
  background-color: #3e95ff;
  transition: all 0.4s ease-in-out;
  scale: 0 0;
  visibility: hidden;
}
</style>