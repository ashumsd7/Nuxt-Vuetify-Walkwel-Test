<template>
    <div class="header">
            <nuxt-link to="/"> <v-avatar>
      <img
        src="https://thumbs.gfycat.com/EvergreenLeafyAgama-small.gif"
        alt="John"
      >
    </v-avatar></nuxt-link>Walkwel Test
            <nuxt-link to="/">Home</nuxt-link>
             <nuxt-link to="/view">Members</nuxt-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.header{
    width: 100vw;
    background: rgb(161, 160, 160);
    height: 60px;
}
a{
    text-decoration: none;
    margin-left: 10px;
    color: black;
    font-weight: bolder;
}
img{
   margin-right: 10px; 
}
</style>