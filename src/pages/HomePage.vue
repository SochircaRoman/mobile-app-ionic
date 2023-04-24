<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home Page</ion-title>
        <ion-button @click.prevent="handleLogout" slot="end" class="btn" strong="true" shape="round" expand="block" color="danger">logout</ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="example-content">Home Page</div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton } from '@ionic/vue';

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton
  },
  computed: {
    logginUser() {
      return this.$store.state.authen.status.loggedIn;
    }
  },
  mounted () {
    if (!this.logginUser) {
      this.$router.push("/auth");
    }
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("authen/logout").then(
        () => {
          setTimeout(() => {
            this.$router.go();
          }, 1000)
        }
      )
    }
  }
}
</script>

<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.btn {
  width: 70px;
  margin-bottom: 5px;
}

</style>