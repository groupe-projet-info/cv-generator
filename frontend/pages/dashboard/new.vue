<template>
  <v-dialog :value="true" persistent width="500">
    <v-card>
      <v-card-title>Hello, World !</v-card-title>
      <v-card-actions>
        <v-spacer />
        <v-btn plain rounded icon :ripple="false" color="red" to="/dashboard">
          <v-icon>fa-xmark</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts"></script>