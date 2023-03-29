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
    <form @submit.prevent="handleLogin">
      <ion-item lines="full">
        <ion-label position="floating">Email</ion-label>
        <ion-input type="email" :value="model.email" @ionInput="model.email = $event.target.value;" required></ion-input>
      </ion-item>
      <ion-item lines="full">
        <ion-label position="floating">Password</ion-label>
        <ion-input type="password" :value="model.password" @ionInput="model.password = $event.target.value;" required></ion-input>
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
  data: () => ({
    model: {
      email: '',
      password: '',
    },
    loginStatus: false,
    successful: false,
    message: "",
  }),
  computed: {
    loggedIn() {
      return this.$store.state.authen.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/home");
    }
  },
  methods: {
    handleLogin() {
      const data = this.model;
      const email = this.model.email;
      const password = this.model.password;

      this.$store.dispatch("authen/login", {data, email, password}).then(
        () => {
          this.loginStatus = true;
          setTimeout(() => {
            this.$router.push("/home");
          }, 2000)
        },
        (error) => {
          this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        }
      )
    }
  }
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