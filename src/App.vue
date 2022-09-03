<template>
  <component :is="currentView" v-bind:leads='leads'/>
</template>

<script>
import TableLeads from './components/TableLeads.vue'
import NotFound from './components/NotFound.vue'
import axios from 'axios'

const routes = {
  '/api/leads': TableLeads
}

export default {
  name: 'App',
  components: {
    TableLeads
  },
  data() {
    return {
      currentPath: window.location.pathname,
      leads: [],
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.pathname
    })

    let urlParams = new URLSearchParams(window.location.search)
    let myParam = urlParams.get('query')
    let url = ''
    if (myParam !== null) { url = 'http://94.228.125.128:5000/leads' + '?query=' + myParam }
    else { url = 'http://94.228.125.128:5000/leads' }
    axios
      .get(url)
      .then((response) => {
        this.leads = response.data
      })
      .catch((error) => console.log(error))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
