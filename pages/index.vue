<script setup lang="ts">
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const {
  data: todos,
  pending,
  error,
} = await useAsyncData('todos', () =>
  $fetch<Todo[]>('https://jsonplaceholder.typicode.com/todos')
);
</script>

<template>
  <div>hello index</div>
</template>
