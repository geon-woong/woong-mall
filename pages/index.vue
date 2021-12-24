<template>
  <div class="app">
    <main>
      <div class="wrap">
      <!-- <SearchInput :search-keyword="searchKeyword" @input="updateSearchKeyword"></SearchInput> -->
      <SearchInput v-model="searchKeyword" @search="searchProducts" @reset="resetSearchInput"></SearchInput>
      <ul class="items">
        <li v-for="product in products" :key="product.id" @click="moveToDetil(product.id)">
          <img :src="product.image" :alt="product.name" class="product-image">
          <div :style="`background-image:url('${product.image}')`"></div>
          <p >{{ product.title}}</p>
          <span>{{ product.price}}&#36;</span>
        </li>
      </ul>
      </div>
    </main>
    <div class="cart-wrapper">
          <button class="btn" >
                 <span style="padding-right:5px">
                 Cart
                 </span>
                <svg style="inline-block" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>
            </button>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchInput from '../components/SearchInput.vue';
import { fetchProductByKeyword, resetProductList } from '../api';

export default {
    components: { SearchInput },
    async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
        const response = await axios.get("https://fakestoreapi.com/products");
        const products = response.data;
        return { products };
    },
    data() {
      return {
        searchKeyword:'',
      }
    },
    methods: {
      moveToDetil(id){
        this.$router.push(`detail/${id}`);
      },
      async searchProducts(){
        const response = await fetchProductByKeyword(this.searchKeyword)
        // console.log(response)
        this.products = response.data
      },
      async resetSearchInput(){
        const response = await resetProductList()
        this.products = response.data
        this.searchKeyword = ''
      }
    },

}
</script>

<style scoped>

.items{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.items > li {
  width: 300px;
  height: 350px;
  cursor: pointer;
  margin-right: 20px;
}

.product-image{
  border: 1px solid var(--second-bg);
  width: 300px;
  height: 250px;
  padding: 30px;
  border-radius: 10px;
}
.items > li > p {
  text-align: left;
  margin-top: 5px;
  padding-left: 10px;
}
.items > li > span {
  text-align: right;
  display: block;
  color: var(--third-bg);
}

.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid var(--second-bg);border-radius: 5px;
  background-color: var(--second-bg);color: var(--third-bg);
  cursor: pointer;
}

@media screen and (max-width : 740px) {
  .items > li {
  margin-right: 0px;
}
}
</style>