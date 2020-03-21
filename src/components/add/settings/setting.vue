
<template>
  <div class="settings">
    <ChartNav :value="type">
      <div class="header">
        <Icon iconName="left" />
        <span>类别设置</span>
        <Icon />
      </div>
    </ChartNav>
    <!-- <ul>
      <li>
        <Icon :iconName="" />
        <span>{{}}</span>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ChartNav from "@/components/chartNav.vue";
export default {
  created() {
    this.$store.commit("fetchKindList");
  },
  components: {
    ChartNav
  },
  computed: {
    type() {
      return this.$store.state.auth.addDate.type;
    },
    kindList() {
      return this.$store.getters.currentKinds;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.header {
  display: flex;
  padding-bottom: 8px;
  span {
    flex-grow: 1;
    text-align: center;
  }
  svg {
    width: 28px;
    height: 28px;
  }
}
</style>