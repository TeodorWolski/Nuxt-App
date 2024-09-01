<script setup lang="ts">
import { useTasksStore } from '@/store/tasks';

const store = useTasksStore();

const {
  data: tasks,
  pending,
  error,
} = await useAsyncData('tasks', () => store.fetchTasks());
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Tasks</h2>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <NuxtLink :to="`/task/${task.id}`">{{ task.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
