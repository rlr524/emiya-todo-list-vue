<template>
  <div class="item-container">
    <h1>All Items: ({{ totalItems }})</h1>

    <div class="error" v-if="error">Error: {{ error }}</div>

    <ul v-if="!loading && !error">
      <li v-for="item in items" :key="item.id" class="item">
        <h3>{{ item.title }}</h3>
        <p>{{ item.itemDescription }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useItemStore } from '@/stores/useItemStore'

const itemStore = useItemStore()

const { items, loading, error, totalItems } = storeToRefs(itemStore)

onMounted(() => {
  itemStore.fetchItems()
})
</script>

<style scoped>
.item-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;
}

.error {
  color: #d32f2f;
  background-color: #ffebee;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #ffcdd2;
  margin-bottom: 20px;
}

.item {
  list-style: none;
  padding: 20px;
  margin-bottom: 15px;
  border: 1px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
