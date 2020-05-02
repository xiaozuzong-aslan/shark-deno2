<template>
  <div class="chartNav">
    <slot />
    <div>
      <button :class="{selected:value==='-'}" @click="changeType('-')">支出</button>
      <button :class="{selected:value==='+'}" @click="changeType('+')">收入</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component,Prop} from 'vue-property-decorator'
@Component

export default class ChartNav extends Vue{
  get value(){
      return this.$store.state.auth.addDate.type;
  }
  changeType(type:'+'|'-') {
    this.$store.commit('changeType',type)
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.chartNav {
  background: $color-yellow;
  font-size: 16px;
  padding: 10px 16px;
  button {
    width: 50%;
    padding: 10px 0;
    border: 1px solid black;
    background: transparent;
    &.selected {
      background: #343233;
      color: $color-yellow;
    }
  }
}
</style>