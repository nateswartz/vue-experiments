<template>
  <div>
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
  </div>
</template>

<script>
  import simpleCounter from './Components/simpleCounter.vue'

  export default {
    components: {
      simpleCounter
    }
  }
</script>

<style>
	.message {
	  color: blue;
	}
</style>