import { createApp } from 'vue'
import App from './App.vue'

import './assets/scss/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faCircleArrowDown, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCircleArrowDown, faCircleArrowRight)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')