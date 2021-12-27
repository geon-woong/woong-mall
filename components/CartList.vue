<template>
  <div class="list-wrapper">
        <ul >
            <li v-for="cartItem in $store.state.cartItems" :key="cartItem.id" class="list-item">
                    <img class="thumbnail" :src="cartItem.image" alt="cartItem.title">
                    <div class="description">
                        <p>{{cartItem.title}}</p>
                        <p>{{cartItem.price}}</p>
                        <!-- <button class="btn" @click="deleteItem">delete</button> -->
                    </div>
            </li>
        </ul>
      </div>
</template>

<script>
export default {
  methods: {
    deleteItem(){
      this.$store.commit('')
    }
  },
}
</script>

<style>
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
</style>