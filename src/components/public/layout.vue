
<template>
  <div class="container">
      <div class="main"><slot/></div>
      <TabBer class="footer"/>
  </div>
</template>

<script>
import TabBer from '@/components/public/tabBer.vue'
export default {
    components:{
        TabBer
    }
};
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    border: 1px solid red;
    flex-direction: column;
    height: 100vh;
    .main{
        flex-grow: 1;
    }
}
</style>