import { createStore } from "vuex";

export default createStore({
	state: {
		userLogged: JSON.parse(localStorage.getItem("isLogged")),
        userData: JSON.parse(localStorage.getItem('userData')),
	},
	getters: {
		userLogged(state) {
			if (state.userLogged == true) return true;
			else return false;
		},

        userData(state){
            return state.userData
        },
	},
	mutations: {
		LogIn(state) {
			localStorage.setItem("isLogged", true);
			state.userLogged = true;
		},

		LogOut(state) {
			localStorage.setItem("isLogged", false);
			state.userLogged = false;
            localStorage.removeItem('userData')
            state.userData = ''
		},

        set_userData(state, data){
            state.userData = data
            localStorage.setItem('userData', JSON.stringify(data))
        },
	},
});
