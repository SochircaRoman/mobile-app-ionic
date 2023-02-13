<template>
  <ion-header>
    <ion-toolbar>
      <ion-searchbar
        :debounce="1000"
        @ionChange="handleChange($event)"
        color="dark"
        placeholder="Search..."
      >
      </ion-searchbar>
    </ion-toolbar>
  </ion-header>

  <ion-list>
    <ion-item v-for="result in results" :key="result">
      <ion-label>{{ result }}</ion-label>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonHeader, IonSearchbar, IonToolbar, IonItem, IonList } from '@ionic/vue';

export default {
  components: {
    IonHeader,
    IonSearchbar,
    IonToolbar,
    IonItem,
    IonList,
  },
  data() {
    return {
      data: ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva'],
      results: [],
    }
  },
  methods: {
    handleChange(event) {
      const query = event.target.value.toLowerCase();
      this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
    }
  }
}
</script>

<style>

</style>