<template>
  <div>
    <h1>Trygve Jørgensen</h1>
    <img src="images/KvadratProfilbilde.jpeg" alt="Profile picture" id="profilePicture"/>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
h1 {
  font-size: 2.2em;
}

div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
}

img {
  height: 70px;
  border-radius: 35px;
}

@media screen and (min-width: 600px) {
  h1 {
    font-size: 3em;
  }

  img {
    height: 100px;
    border-radius: 50px;
  }
}

</style>