import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

import MainPage from "@/router/pages/MainPage";
import LogInPage from "@/router/pages/LogInPage";
import RegistrationPage from "@/router/pages/RegistrationPage";
import UserProfile from "@/router/pages/UserData/UserProfilePage";

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			component: MainPage,
			path: "/",
		},
		{
			component: LogInPage,
			path: "/login",
			beforeEnter: (to, from, next) => {
				if (!store.getters.userLogged) {
					next();
				} else {
					next({ path: "/" });
				}
			},
		},
		{
			component: RegistrationPage,
			path: "/registration",
			beforeEnter: (to, from, next) => {
				if (!store.getters.userLogged) {
					next();
				} else {
					next({ path: "/" });
				}
			},
		},
		{
			component: UserProfile,
			path: "/profile",
			beforeEnter: (to, from, next) => {
				if (store.getters.userLogged) {
					next();
				} else {
					next({ path: "/login" });
				}
			},
		},
	],
});
