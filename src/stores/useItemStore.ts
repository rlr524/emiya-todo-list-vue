import { defineStore } from "pinia";
import {ref, computed} from "vue";
import type {Item, ItemState} from "../types";

export const useItemStore = defineStore("itemStore", () => {
  const items = ref<Item[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const totalItems = computed(() => items.value.length);
  const getItemsById = computed(() => {
    return (id: string) => items.value.find(item => item.id === id);
  });

  async function fetchItems() {
    loading.value = true;
    error.value = null;
    var environment = "dev";
    var response: Response = await fetch("http://localhost:8080/api/v1/items")

    try {
      if (environment != "dev") {
        response = await fetch("http://suga:8080/api/v1/items/mine");
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: Item[] = await response.json();
      items.value = data;
    } catch (err) {
      error.value = err instanceof Error ? err.message: "An unknown error occurred";
    } finally {
      loading.value = false;
    }
  }

  return {
    items,
    loading,
    error,
    totalItems,
    getItemsById,
    fetchItems
  };
});

