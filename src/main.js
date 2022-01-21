import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import router from './Router'

const app = createApp(App);
app.use(router);

app.mount('#app');