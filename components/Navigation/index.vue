<script setup lang="ts">
import { Button } from '@/components/ui/Button';
</script>

<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <NavigationLogo />
      <div>
        <Button class="bg-green-500 hover:bg-green-600 text-white"
          >Add New Task</Button
        >
      </div>
    </div>
  </nav>
</template>
