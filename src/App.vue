<script>
import Home from "./views/Home.vue";
import Cocktails from "./views/Cocktails.vue";
import Echo from "laravel-echo";		// TODO: Communication with laravel-websockets
window.Pusher = require('pusher-js'); // TODO: Communication with laravel-websockets

const routes = {
	"/": Home,
	"/Cocktails": Cocktails,
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
		}),
		// TODO: configuration with laravel-sockets
		window.Echo = new Echo({
			broadcaster: 'pusher',
			key: "ASDASD2121",
			wsHost: '127.0.0.1',
			wsPort: 6001,
			disableStats: true,
			forceTLS: false,
		})
		window.Echo.channel('notifications').listen('NotificationsEvents', (e) => {
			console.log(e);
		});
	},
};
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-light">
		<div class="container-fluid">
			<img src="./assets/logo.png" alt="logo" width="30" height="24" />

			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link" href="#/">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#/Cocktails">Cocktails</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<component :is="currentView" />
</template>

<style>
body {
	background: #114b5f;
}

.navbar {
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	background: #011936;
}
.navbar .nav-item .nav-link {
	color: #c2eabd;
}

.navbar .nav-item .nav-link:hover {
	color: #fff;
}
</style>
