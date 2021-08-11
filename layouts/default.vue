<template>
  <v-app dark>
   <Header/>
      <v-container>
        <Nuxt />
      </v-container>

    <v-footer
      :absolute="!fixed"
      app class="footer"
    > Thank for for the chance ! Walkwel Team :       >>> BY : <a href="http://aashu.online">ASHUTOSH ANAND TIWARI</a>
    
    </v-footer>
  </v-app>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components:{
    Header
  },
  created() {
  this.$store.dispatch('loadUsersAction')
},
  data () {
    return {

      fixed: false,
      
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>
.footer{
  color: black;
  font-weight: bolder;
}
</style>
