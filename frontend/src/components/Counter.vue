<template>
  <div class="mt-5 text-center">
    <b-button
      size="lg"
      variant="success"
      @click="handleClick"
    >Increase</b-button>
    <br>
    <h1>{{counter}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleClick() {
      this.counter++;
    },
  },
};
</script>

<style>
</style>