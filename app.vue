<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
onMounted(() => {
  $fetch("/api/cookie");
});
</script>
