<template>
<div>
    {{key}}
    <div class="indexs" >haha</div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  data(){
      return{
          key:'hahaha'
      }
  }
}
</script>

<style scoped >
*{padding: 0;margin: 0;background: yellowgreen;width:100%;height:100%;}
.indexs{
    height:100%;
    width:100%;
}

</style>



