<template>
  <div>
    <button v-on:click="counter += 1">{{ counter }}</button>
    <button v-on:click="counter = 0">Reset</button>
  </div>
</template>

<script>
	export default {
	  data () {
		  return {
		    counter: 0
		  } 
	  }
	}
</script>

<style>
</style>