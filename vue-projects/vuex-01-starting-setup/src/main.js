import { createApp } from 'vue';
import {createStore} from 'vuex';

import App from './App.vue';

const app = createApp(App);

const store = createStore({
    state(){
        return{
            counter:0
        }
    }
})
app.use(store)

app.mount('#app');
