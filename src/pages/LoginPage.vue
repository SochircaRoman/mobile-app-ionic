<template>

  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button href="/auth"></ion-back-button>
      </ion-buttons>
      <ion-title>Log In</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <form>
      <ion-item lines="full">
        <ion-label position="floating">Username</ion-label>
        <ion-input type="text" required></ion-input>
      </ion-item>
      <ion-item lines="full">
        <ion-label position="floating">Password</ion-label>
        <ion-input type="password" required></ion-input>
      </ion-item>
      <ion-row>
        <ion-col>
          <ion-button type="submit" class="btn" strong="true" shape="round" expand="block" color="danger">Sign In</ion-button>
          <a class="small-text">Forgot Password?</a>
        </ion-col>
      </ion-row>
    </form>
  </ion-content>
  
</template>

<script>
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonItem, IonBackButton, IonLabel, IonRow, IonCol, IonInput, } from '@ionic/vue';


export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonRow,
    IonCol,
    IonButtons,
    IonItem,
    IonBackButton,
    IonLabel,
    IonInput,
  },
}
</script>

<style>
.small-text {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.btn {
  margin: 0 auto;
  max-width: 75%;
  margin-top: 5px;
}

</style>