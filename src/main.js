import { createApp } from 'vue'
import './style.css'

import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight , faClock, faPhone, faEnvelope, faChevronRight, faLocationDot, faArrowUp, faAward, faLock, faPenToSquare, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faArrowRight, faClock, faPhone, faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faChevronRight, faLocationDot, faArrowUp, faAward, faLock, faPenToSquare, faGraduationCap)

import App from './App.vue'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
