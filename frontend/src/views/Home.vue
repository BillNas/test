<template>
  <div>
    <b-jumbotron>
      <h1 class="display-1">Products ({{products.length}})</h1>
    </b-jumbotron>
    <hr>
    <div class="text-center mt-5">
      <b-spinner
        v-if="loading"
        variant="primary"
        type="grow"
      ></b-spinner>
    </div>
    <b-container class="bv-example-row mb-3">
      <b-row cols="4">
        <b-col
          v-for="product in products"
          :key="product.id"
        >
          <Product :product=product />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import Product from "../components/Product.vue";
const url = "https://fakestoreapi.com/products/?limit=10";

export default {
  name: "Home",
  components: { Product },
  data() {
    return { products: [], loading: false };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await axios.get(url);
        this.products = response.data;
        this.loading = false;
      } catch (e) {
        console.log(e);
        this.loading = true;
      }
    },
  },
};
</script>

<style>
</style>