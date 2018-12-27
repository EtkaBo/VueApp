<template>
    <div>
            {{orders}}
    <button v-on:click="greet()">xa </button>

    </div>
</template>
<script>
  export default {
  name: 'Dashboard',
  data () {
    return {
      orders: null
    }
  },
  greet () {
    alert('Hello ' + this.name + '!')
  },
  mounted () {
    this.$axios
      .get('http://localhost:56754/api/shopify/orders')
      .then(response => (this.orders = response))
  }
}
</script>