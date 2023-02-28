<template>

  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Registration</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="auth-form">
      <ion-grid>
        <ion-row>
          <ion-col align-self-center>
            <ion-button expand="block" color="primary">Register</ion-button>
            <span class="divider line one-line">or</span>
            <span class="already">Already a user?</span>
            <ion-button expand="block" color="danger">Sign In</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>

  </ion-page>
  
</template>

<script>
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonButton, IonRow, IonCol  } from '@ionic/vue';

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonGrid,
    IonButton,
    IonRow,
    IonCol,
  },
}
</script>

<style>

</style>