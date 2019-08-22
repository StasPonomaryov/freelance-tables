<template>
  <b-container>
    <h1>{{ pageTitle }}</h1>
    <h2>Clients</h2>
    <b-table hover :items="clients" :fields="fields"></b-table>
    <router-link to="/login" class="btn btn-primary">Sign in</router-link>
  </b-container>
</template>

<script>
import {db} from '@/main'

export default {
  name: 'DashboardHome',
  data () {
    return {
      pageTitle: 'Welcome to Freelance Tables project!',
      fields: ['name', 'description'],
      clients: []
    }
  },
  firestore () {
    return {
      clients: db.collection('clients')
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
