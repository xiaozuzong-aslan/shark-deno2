<template>
  <div class="ad">
    <div class="content">
      <Icon iconName="money" />
      <div class="text">鲨鱼记账</div>
    </div>
    
  </div>
</template>

<script lang="ts">

export default {
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.ad {
  height: 100vh;
  background: $color-yellow;
  .content {
    height: 100vh;
    font-size: 26px;
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    svg {
      width: 55px;
      height: 55px;
    }
  }
}
</style>
