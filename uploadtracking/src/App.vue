<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <router-view> </router-view>
    <button @click="openLoader()">BasBana</button>

    <LoadingSpinner v-if="showLoader"> </LoadingSpinner>

<div v-if="isLoggedIn === false">
    <button @click="forwardLogin"> Zazazaz</button>
</div>
    <Dashboard/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Dashboard from './components/Dashboard.vue'
// import Login from './components/Login.vue'
import LoadingSpinner from './components/utils/LoadingSpinner.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    LoadingSpinner,
    Dashboard
  },
  //  data () {
  //   return {
  //   }
  // },
  methods: {
    forwardLogin() {
      this.$router.push('login')
    },
    openLoader() {
      debugger;
      this.$store.commit('global/setLoader', true)
    setTimeout(() => {
            this.$store.commit('global/setLoader', false)
        }, 2000);
    }
  },
  computed: {
    isLoggedIn () {
      debugger;

      return this.$store.getters['global/loggedIn']
    },
    showLoader () {
      return this.$store.getters['global/showLoader']
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
