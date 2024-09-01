<script setup lang="ts">
import type { Task } from '@/types';
import { getRandomEmoji } from '@/utils/getRandomEmoji';
const emoji = getRandomEmoji();
defineProps<{
  task: Task;
}>();
</script>

<template>
  <li
    class="w-full p-4 bg-slate-50 rounded-lg border border-slate-200 text-slate-800 flex items-center"
  >
    <span class="text-2xl mr-4">{{ emoji }}</span>
    <NuxtLink :to="`/task/${task.id}`" class="max-w-52 truncate font-medium">{{
      task.title
    }}</NuxtLink>
  </li>
</template>
