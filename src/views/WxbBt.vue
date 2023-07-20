<template>
  <div>
    <div class="bt" :style="{backgroundColor:bgcolor}">wxb的按钮</div>
  </div>
</template>

<script>
export default {
                props:["type"],
                computed:{
                  bgcolor(){
                    if(this.type=="a"){
                      return "red"
                    }else if(this.type=="b"){
                      return "blue"
                    }else{
                      return "yellow"
                    }
                  }
                }
}
</script>

<style scoped>
  .bt{background-color: red;padding: 10px 5px;border-radius: 5px;display: inline-block;color: black;}
</style>