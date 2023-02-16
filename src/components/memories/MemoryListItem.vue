<template>
  <ion-item :router-link="`/memories/${memory.id}`" button detail="true">
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt="memory.title"></ion-img>
    </ion-thumbnail>
    <ion-label>
      <h3>{{ memory.title }}</h3>
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonImg, IonThumbnail, IonLabel } from '@ionic/vue';

export default {
  props: ["memory"],
  components: {
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
}
</script>

<style>

</style>