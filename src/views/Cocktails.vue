<template>
	<div class="row m-3">
		<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 text-center">
			<div class="card card-name">
				<div class="card-body">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h1
							class="animate__animated animate__pulse animate__delay-1s animate__infinite"
						>
							Cocktails
						</h1>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
			<Alert />
			<!-- </div> -->
		</div>
		<div class="row mt-3">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<BodyCocktails />
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
</style>
