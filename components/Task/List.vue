<script setup lang="ts">
defineProps({
  tasks: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ul class="gap-5 flex items-center flex-col justify-center h-full">
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
  </ul>
</template>
