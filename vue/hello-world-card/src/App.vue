<template>
  <HelloWorldCard></HelloWorldCard>
</template>

<script>
import HelloWorldCard from './components/HelloWorldCard.vue'

export default {
  name: 'App',
  components: {
    HelloWorldCard
  }
}
</script>

<style>
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
