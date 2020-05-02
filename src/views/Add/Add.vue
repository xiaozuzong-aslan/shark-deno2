
<template><!--该页面负责添加记账-->
  <div class="add">
    <div class="record-wrapper" :class="{visible:toggle}"><!--toggle控制该页面的弹出-->
      <record-nav />
      <Kind />
    </div>
    <NumberPad v-if="showPad" />
    <Layout />
    
  </div>
</template>

<script lang="ts">
import recordNav from "@/components/add/recordNav.vue";
import Kind from "@/components/add/kind.vue";
import NumberPad from "@/components/add/numberPda.vue";
import Vue from 'vue'
import {Component} from 'vue-property-decorator'

@Component({components:{recordNav,Kind,NumberPad}})
export default class Add extends Vue{
  get toggle(){
    return  this.$store.state.auth.addToggle;
  }
  get showPad() {
      return this.$store.state.auth.addDate.currentKind.iconName;
    }
}

</script>


<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.record-wrapper {
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