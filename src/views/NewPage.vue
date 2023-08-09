<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>New Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button v-on:click="onClick()">
        CLICK TEST
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';

  const onClick = () => {
    console.log('CLICK !!!');
  }
  
</script>