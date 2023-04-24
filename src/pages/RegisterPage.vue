<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button :default-href='"/auth"'></ion-back-button>
      </ion-buttons>
      <ion-title>Register</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <form @submit.prevent="handleRegister">
      <ion-item lines="full">
        <ion-label position="floating">Username</ion-label>
        <ion-input minlength="6" type="text" :value="model.username" @ionInput="model.username = $event.target.value;" required></ion-input>
      </ion-item>
      <ion-item lines="full">
        <ion-label position="floating">Email</ion-label>
        <ion-input type="text" :value="model.email" @ionInput="model.email = $event.target.value;" required></ion-input>
      </ion-item>
      <ion-item lines="full">
        <ion-label position="floating">Password</ion-label>
        <ion-input minlength="6" type="password" :value="model.password" @ionInput="model.password = $event.target.value;" required></ion-input>
      </ion-item>
      <ion-row>
        <ion-col>
          <ion-button class="btn" type="submit" color="danger" expand="block">Register</ion-button>
        </ion-col>
      </ion-row>
      <div v-if="message" class="error__message">{{ message }}</div>
    </form>
  </ion-content>
</template>

<script>

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonItem, IonBackButton, IonLabel, IonRow, IonCol, IonInput,  } from '@ionic/vue';

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
  data: () => ({
    model: {
      username: '',
      email: '',
      password: '',
    },
    successful: false,
    message: "",
  }),
  computed: {
    loggedIn() {
      return this.$store.state.authen.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/home");
    }
  },
  methods: {
    handleRegister() {
      this.message = "";
      this.successful = false;
      const data = this.model;
      const email = this.model.email;
      const password = this.model.password;

      this.$store.dispatch("authen/register", {data, email, password}).then(
        () => {
          this.loginStatus = true;
          setTimeout(() => {
            this.$router.go();
          }, 2000)
        },
        (error) => {
          this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
          this.successful = false;
        }
      )
    }
  }

}
</script>

<style>
.error__message {
  text-align: center;
  color: #e77e7e;
}

.btn {
  margin: 0 auto;
  max-width: 75%;
  margin-top: 5px;
}

</style>