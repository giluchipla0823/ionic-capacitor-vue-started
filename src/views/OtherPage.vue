<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="dark">
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Other Page</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi reprehenderit a? Itaque facilis ipsum tempora dolor excepturi, dolorum ipsa enim laboriosam aliquam a quaerat delectus consectetur temporibus! Eligendi, qui?
            </p>

            <ion-button :router-link="`/details/${id}`" router-direction="forward">
                GO TO DETAILS PAGE
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonBackButton, IonContent, IonButtons, IonButton } from '@ionic/vue';

export default defineComponent({
    name: 'Other',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonBackButton,
        IonContent,
        IonButtons,
        IonButton
    },  
    setup() {
        return {
            id: 1
        };
    },
})
</script>

