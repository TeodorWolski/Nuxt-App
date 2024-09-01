import type { Task } from '@/types/task';
import { defineStore } from 'pinia';

export const useTasksStore = defineStore({
  id: 'tasks',
  state: () => ({
    todos: [] as Task[],
  }),
  actions: {
    add(task: Task) {
      this.todos.push({
        userId: task.userId ?? 1,
        id: task.id ?? this.todos.length + 1,
        title: task.title,
        completed: false,
      });
    },
  },
});
