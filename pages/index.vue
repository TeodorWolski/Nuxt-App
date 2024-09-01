<script setup lang="ts">
import { type Task } from '@/types/task';

const {
  data: tasks,
  pending,
  error,
} = await useAsyncData('tasks', () =>
  $fetch<Task[]>('https://jsonplaceholder.typicode.com/todos')
);
</script>

<template>
  <div>hello index</div>
</template>
