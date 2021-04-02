import { createApp } from 'vue'
import App from './App'
import NewFriend from '@/NewFriend'

const app = createApp(App)
app.component('new-friend', NewFriend)

app.mount('#app')
