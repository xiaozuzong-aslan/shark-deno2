
<template>
  <div class="add">
    <div class="record" :class="{visible:toggle}">
      <record-nav />
      <Kind />
    </div>
    <div class="numberPad">
      <div class="notes">beizhu</div>
      <div class="buttons"></div>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>今天</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button>x</button>
      <button>完成</button>
    </div>
    <Layout></Layout>
  </div>
</template>

<script>
import recordNav from "@/components/add/recordNav.vue";
import Kind from "@/components/add/kind.vue";
export default {
  name: "Add",
  components: {
    recordNav,
    Kind
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    toggle() {
      return this.$store.state.addToggle;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
@keyframes xxx {
  0% {
    transform: none;
  }
  100% {
  }
}
.record {
  position: fixed;
  transform: translate(0, 100%);
  transition: transform 0.4s linear;
  background: #fff;
  height: 100vh;
  &.visible {
    transform: translate(0, 0);
  }
}
.numberPad {
  position: fixed;
  z-index: 2;
  border: 1px solid red;
  ul {
    display: flex;
  }
}
</style>