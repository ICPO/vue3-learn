import {createApp} from 'vue'
import '/src/assets/main.css'
import App from './App.vue'
import {syncState} from './storage'
import {startCurrentDateTimer} from './time'


syncState()
startCurrentDateTimer()
document.addEventListener('visibilitychange', () =>
    syncState(document.visibilityState === 'visible')
)

createApp(App).mount('#app')
