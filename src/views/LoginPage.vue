<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">
      <div class="wrapper-page">
        <ion-button class="btn-login" v-on:click="handleLogin()">
            Login
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonButton, loadingController, useIonRouter } from '@ionic/vue';

const ionRouter = useIonRouter();

const handleLogin = async () => {
    console.log('HANDLE LOGIN');

    const loading = await loadingController.create({ mode: 'ios', message: 'Checking credentials...' });

    await loading.present();

    setTimeout(async () => {
        await loading.dismiss();

        ionRouter.replace('/home');
    }, 2000);

}
</script>


<style scoped>
.wrapper-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

ion-button.btn-login {
    width: 100%;
}

</style>