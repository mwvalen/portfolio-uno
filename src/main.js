import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './store'
import { colors } from 'vuetify/lib'

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
