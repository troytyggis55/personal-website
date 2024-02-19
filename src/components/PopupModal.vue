<template>
  <div class="popup-overlay" @click="$emit('close')">
    <div class="popup-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>


<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.30);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: rgba(106, 151, 204, 0.73);
  padding: 50px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;
  -webkit-backdrop-filter: blur(3px);  /* Safari 9+ */
  backdrop-filter: blur(3px); /* Chrome and Opera */

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
