<template>
  <base-layout pageTitle="All Memories">
    <ion-list>

      <ion-item
        v-for="memory in memories"
        :router-link="`/memories/${memory.id}`"
        :key="memory.id"
      >
        <ion-thumbnail slot="start">
          <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>
        <ion-label>{{ memory.title }}</ion-label>
      </ion-item>

    </ion-list>
  </base-layout>
</template>

<script>
import {
  IonList,
  IonItem,
  IonImg,
  IonThumbnail,
  IonLabel,
} from '@ionic/vue';

export default {
  components: {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
  data() {
    return {
      memories: [
        {
          id: 1,
          image: "/assets/icon/icon.png",
          title: "Title nr.1",
          description: "This is a short description nr.1"
        },
        {
          id: 2,
          image: "/assets/icon/icon.png",
          title: "Title nr.2",
          description: "This is a short description nr.2"
        },
        {
          id: 3,
          image: "/assets/icon/icon.png",
          title: "Title nr.3",
          description: "This is a short description nr.3"
        },
      ]
    };
  },
}
</script>

<style>

</style>