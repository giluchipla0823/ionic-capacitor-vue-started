<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Detail Page #{{ id }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum beatae vitae qui culpa blanditiis nostrum expedita? Id vitae non fugit quisquam architecto quasi, nemo dolorum, aliquam sint enim quos sunt?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi, excepturi assumenda est provident repellendus voluptatum tenetur dolorem vero facilis, tempora harum eaque? Repellendus dolores qui placeat magni officiis molestias.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat alias fugit recusandae nam dignissimos aspernatur hic, ad deleniti quo aperiam quos unde voluptas assumenda cumque non. At quo beatae natus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur dolor rem corporis, iusto doloribus. Consequatur in tempore, ad eos accusantium voluptates, sequi distinctio vitae laboriosam amet nostrum, commodi quisquam.
      </p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, onIonViewDidEnter } from '@ionic/vue';
  import { useRoute } from 'vue-router';
  import { onMounted } from 'vue';

  const route = useRoute();

  const { id } = route.params;
  
  onMounted(() => {
    console.log('DetailPage - onMounted', { id });

  });

  onIonViewDidEnter(() => {
      console.log('DetailPage - onIonViewDidEnter');
  });

</script>