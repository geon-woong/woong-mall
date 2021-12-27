<template>
  <div class="wrap ">
      <h1>Details</h1>
      <div class="container">
        <img :src="product.image" alt="product.title" class="product-image">
        <div class="side-panel">
            <p>{{product.title}}</p>
            <span>{{product.price}} &#36;</span>
            <button class="btn" @click="addToCart" >ADD TO CART</button>
        </div>
      </div>
  </div>
</template>

<script>
import { createCartItem, fetchproductById } from "../../api"
export default {
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
       const response = await fetchproductById(params.id)
        const product = response.data
       return { product }
    },
    methods: {
      async addToCart(){
        const response = await createCartItem(this.product);
        console.log(response)
        this.$store.commit('addCartItem', this.product);
        this.$router.push('/cart')
      }
    }

}
</script>

<style scoped>
h1{
  font-family: 'Source Sans Pro', sans-serif;;
  font-weight: normal;
  padding-top: 20px;
}
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 400px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  text-align: center;
  padding: 0 1rem;
}
.side-panel > p {
}
.side-panel > span {
    margin-top: 10px;

}
.side-panel > button {
    margin-top: 10px;

}
</style>