<template>
  <hello-world-card></hello-world-card>
</template>

<script>

import './../web-components/hello-world-card';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
