<template>
  <div>
    <h1>页面跑去火星了. {{ infro }}</h1>
  </div>
</template>

<script>
export default {
        computed:{
          infro(){
            return this.$store.state.infro
          }
        }
}
</script>

<style scoped>

</style>