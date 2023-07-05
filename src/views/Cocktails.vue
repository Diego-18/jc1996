<template>
	<div>
		<div class="cstm pt-5 text-center">
			<div class="overlay"></div>
			<div class="text-overlay">
				<h1
					class="animate__animated animate__bounce animate__delay-2s animate__repeat-3"
				>
					Welcome to JC 1996
				</h1>
				<p class="p-2 text-center">
					If you want to enjoy in Medellin, you only have to enjoy the
					best place with your friends and family.
				</p>
			</div>
		</div>
		<div class="row m-3">
			<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
				<Alert />
			</div>
			<div class="row mt-3">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<BodyCocktails />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BodyCocktails from "../components/BodyCocktails.vue";
import Alert from "../components/Alert.vue";
export default {
	name: "Cocktails",
	components: { BodyCocktails, Alert },
};
</script>

<style>
.card-section {
	margin-bottom: 2rem;
}

.card-name {
	border: solid 3px #157347;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	color: #fff;
	background: rgba(255, 255, 255, 0.42);
	border-radius: 16px;
	backdrop-filter: blur(14.2px);
	-webkit-backdrop-filter: blur(14.2px);
}

.cstm {
	width: 100% !important;
	color: #fff;
	background: url("../assets/1.jpg") center;
	text-shadow: #000 0px 0px 10px;
	border-radius: 16px 0px 16px 0px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	font-weight: 700;
	position: relative;
}

.overlay {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0.5;
	background-color: #070d59;
	position: absolute;
}

.text-overlay {
	position: relative;
	z-index: 1;
}
</style>
