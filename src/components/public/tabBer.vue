
<template>
  <div class="tabBar">
    <router-link to="/detail">
      <span>明细</span>
      <Icon iconName="label" />
    </router-link>
    <router-link to="/add" @click.native="changeAddToggle">
      <span>记账</span>
      <Icon iconName="add" />
    </router-link>
    <router-link to="/chart">
      <span>图表</span>
      <Icon iconName="statistics" />
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    changeAddToggle() {
      console.log("xxxx");
      this.$store.commit("changeAddToggle");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tabBar {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  font-size: 12px;
  padding: 5px 0;
  a {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    &.actived {
      svg {
        color: darken($color-yellow, 30%);
      }
    }
    svg {
      width: 30px;
      height: 30px;
    }
  }
}
</style>