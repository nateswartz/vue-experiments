<template>
  <div>
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
  </div>
</template>

<script>
  import simpleCounter from './Components/simpleCounter'

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