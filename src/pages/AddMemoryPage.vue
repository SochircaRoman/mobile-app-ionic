<template>
  <base-layout page-title="Add a Memory" page-default-backLink="/memories">
    <create-memory-form></create-memory-form>
  </base-layout>
</template>

<script>
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue';

export default {
  components: {
    CreateMemoryForm,
  },
  methods: {
    saveMemory(memoryData) {
      
    }
  }
};
</script>

<style>

</style>