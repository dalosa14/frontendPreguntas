import axios from 'axios'
import VueAxios from 'vue-axios'
import { createApp } from 'vue'
import App from './App.vue'

let  app =createApp(App).mount('#app')
app.use(VueAxios,axios)
