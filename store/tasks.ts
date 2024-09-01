import type { Task } from '@/types/task';
import { defineStore } from 'pinia';

export const useTasksStore = defineStore({
  id: 'tasks',
  state: () => ({
    tasks: [] as Task[],
  }),
  actions: {
    async fetchTasks() {
      const response = await $fetch<Task[]>(
        'https://jsonplaceholder.typicode.com/todos'
      );
      this.tasks = response;

      return this.tasks;
    },

    add(task: Task) {
      this.tasks.push({
        userId: task.userId ?? 1,
        id: task.id ?? this.tasks.length + 1,
        title: task.title,
        completed: false,
      });
    },
  },
});
