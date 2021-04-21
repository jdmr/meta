import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(createMetaManager()).mount('#app')
