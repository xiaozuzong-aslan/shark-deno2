
<template>
  <div class="add">
    <div class="record" :class="{visible:toggle}">
      <record-nav />
      <Kind />
    </div>
    <NumberPad v-if="showPad" />
    <Layout></Layout>
    
  </div>
</template>

<script>
import recordNav from "@/components/add/recordNav.vue";
import Kind from "@/components/add/kind.vue";
import NumberPad from "@/components/add/numberPda.vue";

export default {
  name: "Add",
  components: {
    recordNav,
    Kind,
    NumberPad
  },
  data() {
    return {
     
    };
  },
  computed: {
    toggle() {
      return this.$store.state.auth.addToggle;
    },
    showPad() {
      return this.$store.state.auth.addDate.currentKind.iconName;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.record {
  position: fixed;
  transform: translate(0, 100%);
  transition: all 0.4s linear;
  background: #fff;
  height: 100vh;
  &.visible {
    transform: translate(0, 0);
  }
}
.numberPad {
  position: fixed;
  bottom: 0;
}
</style>