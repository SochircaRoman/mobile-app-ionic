<template>
  <base-layout page-title="Search a Memory">
    <search-bar :titles="titles"></search-bar>
  </base-layout>
</template>

<script>
import BaseLayout from '../components/BaseLayout.vue';
import SearchBar from '../components/UI/SearchBar.vue';

export default {
  components: {
    BaseLayout,
    SearchBar,
  },
  computed: {
    titles() {
      const titles = [];
      const memories = this.$store.getters.memories;
      for (let i in memories) {
        titles.push(memories[i].title);
      }
      return titles;
    }
  }
}
</script>

<style>

</style>