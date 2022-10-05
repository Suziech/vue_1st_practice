import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact'

const app = createApp(App).mount('#app');

app.component('friend-contact', FriendContact);

app.mount('#app');
