<template>
  <div class="container">
    <Counter />
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Home,
    Counter,
  },
};
</script>

<style lang="scss">
</style>
