<template>
  <div>
    <b-card
      :title="product.title"
      :sub-title="product.description"
      :img-src="product.image"
      img-top
      tag="product"
      style="max-width: 30rem;"
      class="mb-5"
    >
      <b-card-text>
        €{{product.price}} EUR
      </b-card-text>
    </b-card>
  </div>

</template>

<script>
export default {
  props: ["product"],
};
</script>

<style>
</style>