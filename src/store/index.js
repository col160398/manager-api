import { createStore } from 'vuex'
import auth from './modules/auth'
import customers from './modules/customers'
import notifications from './modules/notifications'
export default createStore({
	state: {
	},
	mutations: { 
	},
	actions: {
	},
	modules: {
		auth,
		customers,
		notifications
	}
})
