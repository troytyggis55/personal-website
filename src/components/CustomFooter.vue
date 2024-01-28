<template>
  <footer>
    <div class="details">
      <p>+47 94 05 05 56</p>
      <a href="mailito: trygveabjo@gmail.com"><p>trygveabjo@gmail.com</p></a>
    </div>
    <div class="icons">
      <a href="https://github.com/troytyggis55" target=”_blank”><img src="github-mark-white.svg" alt="Github Logo"/></a>
      <a href="https://www.linkedin.com/in/trygve-j%C3%B8rgensen-80b1b9259/" target=”_blank”><img src="linkedin-round-svgrepo-com.svg" alt="LinkedIn Logo"/></a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'CustomFooter'
}
</script>
<style scoped>
footer {
  display: block;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid rgba(204, 204, 204, 0.51);
  text-align: center;
}

p {
  line-height: 0.5;
}

div {
  width: 100%;
  padding-bottom: 20px;
}

img {
  height: 40px;
}

.icons {
  display: flex;
  gap: 10px;
  justify-content: center;
}

@media screen and (min-width: 480px) {
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    margin-top: 50px;
    padding-bottom: 50px;

    text-align: right;
  }

  .details {
    text-align: right;
  }
  .icons {
    justify-content: left;
  }
}
</style>