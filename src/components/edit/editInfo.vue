<template>
  <div class="info">
    <div class="type">
      <span>类型</span>
      {{value.data.type ==="-" ? '支出':'收入'}}
    </div>
    <div class="amount">
      <span>金额</span>
      {{value.data.number}}
    </div>
    <div class="date">
      <span>日期</span>
      {{value.data.createdAt}}
    </div>
    <div class="notes">
      <span>备注</span>
      {{value.data.notes}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component,Prop} from 'vue-property-decorator'
@Component
export default class EditInfo extends Vue{
  @Prop(Object) readonly value!:RecordItem
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.info {
  padding: 10px 16px;
  flex-grow: 1;
  div {
    padding: 10px 0;
    box-shadow: 0 2px 2px -2px fade-out(#8e8e8e, 0.2);
    span {
      color: #8e8e8e;
      padding-right: 10px;
    }
  }
}
</style>