<script setup lang="ts">
import madisonImg from "@/assets/madison_todo_main.webp";
</script>

<template>
  <img class="madison-img" :src="madisonImg" alt="Madison" />
  <p>This is just some text.</p>
</template>

<style lang="css">
.madison-img {
  display: block;
  margin: 0 auto 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
