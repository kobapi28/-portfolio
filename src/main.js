import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee,faHandshake,faCode,faUserCircle,faHammer,faPen,faSchool,faSearch,faEnvelope,faMapMarkerAlt,faGlobe,faBlog } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee,faHandshake,faCode,faUserCircle,faHammer,faPen,faSchool,faSearch,faTwitter,faGithub,faEnvelope,faMapMarkerAlt,faGlobe,faBlog)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
