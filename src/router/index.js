import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Cocktails from "../views/Cocktails.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/Cocktails",
		name: "Cocktails",
		component: () => import("../views/Cocktails.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
