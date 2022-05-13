<template>
  <div>
    <v-container>
      <v-row align-content="start">
        <v-col lg="3" md="4" sm="6" cols="12" v-if="!loading && cvList.length === 0">
          <v-card>
            <v-card-text>Vous n'avez pas encore créé de CV.</v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn plain :ripple="false" color="blue" to="/dashboard/new">Commencez ici</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col lg="3" md="4" sm="6" cols="12" v-for="i in Array.from(Array(10).keys())" :key="i" v-if="loading">
          <cv-card-skeleton>
          </cv-card-skeleton>
        </v-col>
        <v-col lg="3" md="4" sm="6" cols="12" v-for="cv in cvList" :key="cv.id">
          <cv-card :cv="cv" @delete="deleteCV(cv.id)">
          </cv-card>
        </v-col>
      </v-row>
    </v-container>
    <v-btn style="position: fixed; bottom: 2vw; right: 2vw;" fab color="green" elevation="8" to="/dashboard/new">
      <v-icon>fa-plus</v-icon>
    </v-btn>
    <NuxtChild />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

async function Wait(ms: number) {
  return await new Promise(r => setTimeout(r, ms));
}

export default Vue.extend({
  middleware: 'auth',
  head: {
    title: "Dashboard"
  },
  watch: {
    '$route': function (value) {
      this.$fetch()
    }
  },
  data(): { cvList: any[], loading: boolean } {
    return {
      cvList: [],
      loading: true
    }
  },
  async fetch() {
    this.cvList = await this.$api.cv.getList()
    this.loading = false
  },
  fetchOnServer: false,
  methods: {
    async deleteCV(id: string) {
      await this.$api.cv.deleteItem(id)
      this.$fetch()
    }
  }
})
</script>