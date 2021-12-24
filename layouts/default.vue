<template>
  <div>
      <header>
          <h3 class="logo" @click="goHome">Woong-mall</h3>
      </header>
          <Nuxt></Nuxt>
      <footer>
        <div class="logo"></div>
      </footer>
  </div>
</template>

<script>
export default {
  methods:{
    goHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pushster&family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

*{
  padding: 0%;margin: 0%;box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;;
}
a{
  color: #333; text-decoration: none;
}
ul,li{
  list-style: none;
}

header{
}

:root {
  --main-bg: #F0E9D2;
  --second-bg: #E6DDC4;
  --third-bg: #181D31;
}

.logo{
  display: block;
  font-family: 'Pushster', cursive;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: var(--third-bg);
  color: var(--main-bg);
  cursor: pointer;
}

.wrap{
  max-width: 1700px;
  padding: 50px;
  padding-top: 0;
}

.btn {
  margin-right: 10px;
  border: none;background:var(--main-bg);color: var(--third-bg);
  border-radius: 2px;
  padding: 3px 7px;

}
</style>