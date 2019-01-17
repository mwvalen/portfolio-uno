import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './store'
import { colors } from 'vuetify/lib'

var config = {
  apiKey: 'AIzaSyAhYaxPJjPR5G0vRPuzcn2NDiH1NpeZ9xc',
  authDomain: 'portfolio-uno.firebaseapp.com',
  databaseURL: 'https://portfolio-uno.firebaseio.com',
  projectId: 'portfolio-uno',
  storageBucket: 'portfolio-uno.appspot.com',
  messagingSenderId: '532385635472'
}

firebase.initializeApp(config)

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: colors.teal
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
