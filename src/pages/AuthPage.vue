<template>

  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Form</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid class="auth-form">
        <ion-row>
          <ion-col align-self-center>
            <ion-button href="/register" class="btn" strong="true" shape="round" expand="block" color="primary">Register</ion-button>
            <div class="line-container">
              <span class="line">
              </span>
              <span>or</span>
              <span class="line"></span>
            </div>
            <ion-button href="/login" class="btn" strong="true" shape="round" expand="block" color="danger">Sign In</ion-button>
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
.line-container {
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
}

.line {
  height: 1px;
  background: white;
}

.auth-form {
  margin-top: 50%;
}

.btn {
  margin: 0 auto;
  max-width: 75%;
}


</style>