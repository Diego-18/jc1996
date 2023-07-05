<template>
	<nav class="navbar navbar-expand-lg navbar-light">
		<div class="container-fluid">
			<img src="./assets/logo.png" alt="logo" width="30" height="30" />
		</div>
	</nav>
	<component :is="currentView" />
</template>
<script>
import Cocktails from "./views/Cocktails.vue";

const routes = {
	"/": Cocktails,
};

export default {
	data() {
		return {
			currentPath: window.location.hash,
		};
	},
	computed: {
		currentView() {
			return routes[this.currentPath.slice(1) || "/"] || Home;
		},
	},
	mounted() {
		window.addEventListener("hashchange", () => {
			this.currentPath = window.location.hash;
		});
	},
};
</script>
<style>
body {
	background: #114b5f;
}

.navbar {
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	background: #fff;
}
.navbar .nav-item .nav-link {
	color: #10485b;
	font-weight: 700;
}

.navbar .nav-item .nav-link:hover {
	color: #e80900 !important;
}
</style>
