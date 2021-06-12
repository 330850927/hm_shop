import Vue from 'vue'
import App from './App'
import { myRequest} from './util/api.js'

Vue.prototype.$myRequest = myRequest

Vue.filter('formatDate',(date)=>{
	const nDate = new Date(date)
	const y = nDate.getFullYear()
	const m = nDate.getMonth().toString().padStart(2,0)
	const d = nDate.getDate() .toString().padStart(2,0)
	const h = nDate.getHours() .toString().padStart(2,0)
	const min = nDate.getMinutes().toString().padStart(2,0)
	const s = nDate.getSeconds().toString().padStart(2,0)
	return y + "-" + m + "-" + d + ' ' + h + ":" + min + ":" + s
})
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
