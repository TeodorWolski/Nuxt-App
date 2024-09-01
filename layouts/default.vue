<template>
  <div class="min-h-screen flex flex-col bg-gradient">
    <Navigation />
    <main class="flex-grow container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center mb-8 text-gray-800">
        Welcome to My Task Manager
      </h1>
      <div class="bg-white shadow-lg rounded-lg p-6">
        <slot />
      </div>
    </main>

    <footer class="bg-white shadow-md py-4">
      <div class="container mx-auto px-4 text-center text-gray-500">
        &copy; 2024 T.F. Wolski. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<style scoped>
.bg-gradient {
  background: linear-gradient(to right, #f8fafc, #edf2f7, #e2e8f0);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
