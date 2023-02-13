<template>
  <base-layout page-title="Search a Memory">
    <search-bar></search-bar>
  </base-layout>
</template>

<script>
import BaseLayout from '../components/BaseLayout.vue';
import SearchBar from '../components/UI/SearchBar.vue';

export default {
  components: {
    BaseLayout,
    SearchBar,
  }
}
</script>

<style>

</style>