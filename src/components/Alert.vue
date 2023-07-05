<template>
	<div
		v-show="showAlert"
		class="alert alert-warning alert-dismissible fade show text-center"
		role="alert"
	>
		<strong class="mx-auto"
			>"ENJOY THE BEST OF DRINKING, WITHOUT THE BAD OF
			OVERINDULGING."</strong
		>
		<p>
			<small>
				Excess alcohol is harmful to health. Law 30 of 1986. Prohibit
				the sale of intoxicating beverages to minors and pregnant women.
				Law 124 of 1994.
			</small>
		</p>
		<p><b>Medellin - Colombia</b></p>

		<button
			type="button"
			class="btn-close"
			@click="closeAlert"
			aria-label="Close"
		></button>
	</div>
</template>

<script>
export default {
	name: "Alert",
	components: {},
	data() {
		return {
			showAlert: true, // Variable para controlar el estado del alerta
		};
	},
	methods: {
		closeAlert() {
			this.showAlert = false; // Método para cerrar el alerta
		},
	},
};
</script>

<style>
.alert {
	position: fixed;
	bottom: 0;
	right: 0;
	margin: 1rem !important;
	z-index: 100;
	border: 2px solid #fff;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
