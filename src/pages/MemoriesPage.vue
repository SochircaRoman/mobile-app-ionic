<template>
  <base-layout pageTitle="All Memories">
    <ion-list>
      <ion-item router-link="/memories/1">Roman</ion-item>
      <ion-item>Max</ion-item>
      <ion-item>Alexadru</ion-item>
      <ion-item>Daniel</ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import {
  IonList,
  IonItem,
} from '@ionic/vue';

export default {
  components: {
    IonList,
    IonItem,
  }
}
</script>

<style>

</style>