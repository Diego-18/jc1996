<template>
  <div class="card">
    <div class="card-body">
      <div class="row p-2">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div class="input-group mb-3">
            <span class="input-group-text search" id="search">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              class="form-control"
              v-model.lazy="search"
              placeholder="Search..."
              v-debounce="delay"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
          v-for="(item, index) in cocktails"
          :key="index"
        >
          <div class="card card-cocktails mt-3">
            <div class="row g-0">
              <div class="col-md-12 col-lg-4">
                <img :src="item.strDrinkThumb" class="card-img" alt="bebida" />
              </div>
              <div class="col-md-12 col-lg-8">
                <div class="card-header bg-transparent border-success">
                  <div class="row">
                    <div class="col-xs-7 col-sm-10 col-md-10 col-lg-10">
                      <b>{{ item.strDrink }}</b
                      >-
                      <small class="text-glass">({{ item.strGlass }})</small>
                    </div>
                    <div class="col-xs-5 col-sm-2 col-md-2 col-lg-2">
                      <buttom
                        class="btn btn-success"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add to Order"
                        @click="AddOrder"
                      >
                        <i class="fa fa-list" aria-hidden="true"></i>
                      </buttom>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="card-text card-description">
                    <p><b>Ingredients:</b></p>
                    <div class="row text-center">
                      <div class="col-xs-2 col-sm-4 col-md-4 col-lg-4">
                        <p>{{ item.strIngredient1 }}</p>
                        <p>{{ item.strIngredient2 }}</p>
                        <p>{{ item.strIngredient3 }}</p>
                        <p>{{ item.strIngredient4 }}</p>
                      </div>
                      <div class="col-xs-2 col-sm-4 col-md-4 col-lg-4">
                        <p>{{ item.strIngredient5 }}</p>
                        <p>{{ item.strIngredient6 }}</p>
                        <p>{{ item.strIngredient7 }}</p>
                        <p>{{ item.strIngredient8 }}</p>
                      </div>
                      <div class="col-xs-2 col-sm-4 col-md-4 col-lg-4">
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
                      <div class="col-xs-2 col-sm-4 col-md-4 col-lg-4">
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
                    </div>
                  </div>
                </div>
                <div class="card-footer bg-transparent border-success">
                  <div class="row">
                    <div class="col-xs-10 col-sm-8 col-md-8 col-lg-8">
                      <small class="">{{ item.strCategory }}</small>
                    </div>
                    <div class="col-xs-2 col-sm-4 col-md-4 col-lg-4">
                      <small class="">{{ item.strAlcoholic }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    };
  },
  methods: {
    getCocktails() {
      Cocktails.getCocktails(this.search).then((response) => {
        this.cocktails = response.data.drinks;
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
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
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

<style>
.card-description {
  font-size: 0.8rem;
  margin-bottom: 2rem;
}

.card-img {
  width: 100%;
  height: 100%;
}

.card {
  padding: 0.5rem;
  background: transparent;
  border: transparent;
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

@media screem and (min-width: 990px) {
  p,
  .text-glass {
    text-align: center;
  }
}
</style>
