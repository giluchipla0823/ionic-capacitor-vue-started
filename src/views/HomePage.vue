<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item v-on:click="goToPage('/new')">
          <ion-label>New Page</ion-label>
        </ion-item>
        <ion-item v-on:click="goToPage('/other-page')">
          <ion-label>Other Page</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-page id="main-content" v-bind="$attrs">
    
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Home Page</ion-title>

        <ion-buttons slot="end">
          <ion-menu-button ></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button expand="block" router-link="/new" router-direction="forward" color="primary">GO TO NEW PAGE</ion-button>

      <ion-button expand="block" v-on:click="goToNewPage()" color="tertiary">GO TO NEW PAGE 2</ion-button>

      <ion-button expand="block" v-on:click="goToOtherPage()" color="danger">GO TO OTHER PAGE</ion-button>

      <ion-grid>
        <ion-row>
          <ion-col size="12" v-for="(item, index) in [].constructor(10)" :key="index">
            <ion-card :router-link="`/details/${index + 1}`" router-direction="forward">
              <ion-card-header>
                <ion-card-title>Title {{ index + 1 }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio dolorem perferendis maiores dolore cum voluptas! Eveniet, rem repellat delectus fuga asperiores sint consectetur ea in. Adipisci sequi explicabo quas?
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { menuController, IonMenu, IonLabel, IonList, IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, onIonViewDidEnter, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonMenuButton, IonButtons } from '@ionic/vue';

import { useIonRouter } from '@ionic/vue';
import { onMounted } from 'vue';

const ionRouter = useIonRouter();

onMounted(() => {
  console.log('HomePage - onMounted');
});

onIonViewDidEnter(() => {
    console.log('HomePage - onIonViewDidEnter');
});

const goToOtherPage = (): void => {
  ionRouter.navigate('/other-page', 'forward', 'push');
}

const goToNewPage = (): void => {
  ionRouter.push('/new');
}

const goToPage = async (url: string) => {

  await menuController.close();

  ionRouter.push(url);
}
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-grid {
  --ion-grid-padding-xs: 0;
  /* --ion-grid-column-padding: 10px; */
}

ion-grid ion-card {
  margin: 0;
}

</style>
