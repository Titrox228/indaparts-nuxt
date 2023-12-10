<template>
  <div>
    <NuxtLayout>

      <div class="loader-container" :class="{active: loading}">
        <div class="lds-dual-ring"/>
      </div>
      
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
<style scoped>

.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000000000000000;
  background: rgba(0, 0, 0, 0.205);
  opacity: 0;
  pointer-events: none;
  transition: .2s all ease;
}
.loader-container.active {
  opacity: 1;
  pointer-events: all;
}
.lds-dual-ring {
  display: inline-block;
  width: 120px;
  height: 120px;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 114px;
  height: 114px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid var(--red-dark);
  border-color: var(--red-dark) transparent var(--red-dark) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}</style>