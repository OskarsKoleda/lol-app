import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

import BaseCard from './components/ui/BaseCard.vue';
import BasePlayerItem from './components/ui/BasePlayerItem.vue';
import BaseBigButton from './components/ui/BaseBigButton.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-player-item', BasePlayerItem);
app.component('base-big-button', BaseBigButton);

app.mount('#app');