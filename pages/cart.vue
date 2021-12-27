<template>
  <div class="container">
      <h1 class="list-title">Cart Page</h1>
      <CartList ></CartList>
      <div class="extra-panel">
      </div>
  </div>
</template>

<script>
import CartList from "../components/CartList.vue";

export default {
    components: { CartList },
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        await store.dispatch('FETCH_CART_ITEMS')
    },
    methods: {
    },
}
</script>


<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}

.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>