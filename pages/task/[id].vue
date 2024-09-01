<script lang="tsx" setup>
const route = useRoute();
const taskId = route.params.id;
</script>

<template>
  <div>hello {{ taskId }}</div>
</template>
