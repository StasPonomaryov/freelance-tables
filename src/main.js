// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCs-WpNnPiiskkhfXODGDje3ZA1-wAIRDw',
  authDomain: 'freelance-5fdf5.firebaseapp.com',
  databaseURL: 'https://freelance-5fdf5.firebaseio.com',
  projectId: 'freelance-5fdf5',
  storageBucket: 'freelance-5fdf5.appspot.com',
  messagingSenderId: '974365626867',
  appId: '1:974365626867:web:ff6f206d03a48b21'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
