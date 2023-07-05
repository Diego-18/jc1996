<template>
	<div class="card">
		<div class="card-body">
			<div class="row">
				<div class="col-12">
					<div class="input-group mb-3 cstm-search">
						<span class="input-group-text search" id="search">
							<i class="fa fa-search" aria-hidden="true"></i>
						</span>
						<input
							type="text"
							class="form-control cstm-input"
							v-model.lazy="search"
							placeholder="Search..."
							v-debounce="delay"
						/>
					</div>
				</div>
			</div>
			<div class="row" v-if="isLoading">
				<div class="col-12 text-center">
					<div class="spinner-border text-light" role="status">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			</div>
			<div class="row" v-else-if="itemsCocktails.length > 0">
				<div
					class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
					v-for="(item, index) in itemsCocktails"
					:key="index"
				>
					<div class="card card-cocktails mt-3">
						<div class="row g-0">
							<div class="col-md-12 col-lg-4">
								<img
									:src="item.strDrinkThumb"
									class="card-img"
									alt="bebida"
								/>
							</div>
							<div class="col-md-12 col-lg-8">
								<div
									class="card-header bg-transparent border-success"
								>
									<div class="row">
										<div
											class="col-xs-7 col-sm-10 col-md-10 col-lg-10"
										>
											<b>{{ item.strDrink }}</b
											>-
											<small class="text-glass"
												>({{ item.strGlass }})</small
											>
										</div>
									</div>
								</div>
								<div class="card-body">
									<div class="card-text card-description">
										<p><b>Ingredients:</b></p>
										<div class="row">
											<div
												class="col-xs-2 col-sm-4 col-md-4 col-lg-4"
											>
												<p>{{ item.strIngredient1 }}</p>
												<p>{{ item.strIngredient2 }}</p>
												<p>{{ item.strIngredient3 }}</p>
												<p>{{ item.strIngredient4 }}</p>
											</div>
											<div
												class="col-xs-2 col-sm-4 col-md-4 col-lg-4"
											>
												<p>{{ item.strIngredient5 }}</p>
												<p>{{ item.strIngredient6 }}</p>
												<p>{{ item.strIngredient7 }}</p>
												<p>{{ item.strIngredient8 }}</p>
											</div>
											<div
												class="col-xs-2 col-sm-4 col-md-4 col-lg-4"
											>
												<p>{{ item.strIngredient9 }}</p>
												<p>
													{{ item.strIngredient10 }}
												</p>
												<p>
													{{ item.strIngredient11 }}
												</p>
												<p>
													{{ item.strIngredient12 }}
												</p>
											</div>
											<div
												class="col-xs-2 col-sm-4 col-md-4 col-lg-4"
											>
												<p>
													{{ item.strIngredient13 }}
												</p>
												<p>
													{{ item.strIngredient14 }}
												</p>
												<p>
													{{ item.strIngredient15 }}
												</p>
											</div>
											<p><b>Preparation:</b></p>
											<p>{{ item.strInstructions }}</p>
										</div>
									</div>
								</div>
								<div
									class="card-footer bg-transparent border-success"
								>
									<div class="row">
										<div
											class="col-xs-10 col-sm-8 col-md-8 col-lg-8"
										>
											<small class="">{{
												item.strCategory
											}}</small>
										</div>
										<div
											class="col-xs-2 col-sm-4 col-md-4 col-lg-4 text-center"
										>
											<small class="">{{
												item.strAlcoholic
											}}</small>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-else class="text-center">
				<p class="text-white">There are no records.</p>
			</div>
		</div>
	</div>
</template>

<script>
import Cocktails from "../services/Cocktails.js";
import Alert from "./Alert.vue";
import { directive } from "v-debounce";

export default {
	name: "BodyCocktails",
	components: { Alert },
	data() {
		return {
			search: "",
			num: 0,
			delay: 1000,
			itemsCocktails: [],
			isLoading: false,
		};
	},
	methods: {
		getCocktails() {
			this.isLoading = true;
			this.itemsCocktails = [];
			Cocktails.getCocktails(this.search).then((response) => {
				for (let i = 0; i < response.data.drinks.length; i++) {
					this.itemsCocktails.push(response.data.drinks[i]);
				}
				this.isLoading = false;
			});
		},
		AddOrder() {
			const swalWithBootstrapButtons = Swal.mixin({
				showClass: {
					popup: "animate__animated animate__fadeInDown",
				},
				hideClass: {
					popup: "animate__animated animate__fadeOutUp",
				},
				customClass: {
					confirmButton: "btn btn-success",
					cancelButton: "btn btn-danger",
				},
				buttonsStyling: false,
			});

			swalWithBootstrapButtons
				.fire({
					text: "Are you sure you want to order it?",
					icon: "warning",
					showCancelButton: true,
					confirmButtonText: "Yes!",
					cancelButtonText: "No, cancel!",
					reverseButtons: true,
				})
				.then((result) => {
					if (result.isConfirmed) {
						swalWithBootstrapButtons.fire(
							"Excellent!",
							"Successfully added to order",
							"success"
						);
					} else if (result.dismiss === Swal.DismissReason.cancel) {
						swalWithBootstrapButtons.fire(
							"Cancelled",
							"Your order has been cancelled",
							"error"
						);
					}
				});
		},
	},
	watch: {
		search() {
			this.getCocktails();
		},
	},
	directives: {
		debounce: directive,
	},
};
</script>

<style scoped>
.card-description {
	font-size: 0.8rem;
	margin-bottom: 2rem;
}

.card {
	background: transparent;
	border: transparent;
}

.cstm-input {
	border-radius: 8px;
	border: none;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.card-cocktails {
	border: solid 3px #157347;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	color: #fff;
	background: rgba(255, 255, 255, 0.42);
	border-radius: 16px;
	backdrop-filter: blur(14.2px);
	-webkit-backdrop-filter: blur(14.2px);
}

.search {
	background: #157347;
	color: #fff;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
}

p,
.text-glass {
	text-transform: capitalize;
}

.swal2-modal {
	border: 3px solid #157347;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.swal2-cancel {
	margin-right: 1rem;
}

.cstm-search {
	width: 80%;
	margin: 0 auto;
}

.card-img {
	width: 100%;
	height: 100%;
	border-radius: 14px 0px 0px 14px;
}

@media screen and (max-width: 992px) {
	p,
	.text-glass {
		text-align: center;
	}

	.cstm-search {
		width: 100%;
		margin: 0 auto;
	}

	.card-img {
		border-radius: 14px;
	}
}
</style>
