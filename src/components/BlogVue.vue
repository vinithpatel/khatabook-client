<template>
    <v-layout class="rounded rounded-md">
    <v-app-bar title="Khatabook.online"></v-app-bar>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">

        <v-card
            class="mx-auto"
            prepend-icon="mdi-home"
        >
            <template v-slot:title>
                What is Khatabook?
            </template>

            <template v-slot:subtitle>
                Khatabook is a free mobile app and web platform designed to simplify financial management for small businesses in India. Imagine it as your digital bookkeeping assistant, helping you:
            </template>

            <v-card-text>
                
                Record customer and supplier transactions (no more paper ledgers!)
               Send automated payment reminders (get paid faster!)
                Track your inventory levels (avoid stockouts and save money)
                Generate reports on your finances (gain valuable insights)
                Accept online payments (go cashless and embrace convenience)
                
                <p>With Khatabook, you can ditch time-consuming manual bookkeeping and focus on growing your business.</p>
            </v-card-text>
        </v-card>
    </v-main>
  </v-layout>
</template>

<script >
</script>

<style>

</style>