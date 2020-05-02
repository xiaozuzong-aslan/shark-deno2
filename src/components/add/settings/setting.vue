
<template>
  <div class="settings">
    <ChartNav :value="type">
      <div class="header">
        <Icon iconName="left" @click.native="goBack" />
        <span>类别设置</span>
        <Icon />
      </div>
    </ChartNav>
    <ul>
      <li v-for="(item,index) in kindList" :key="index">
        <Icon iconName="setting-delete" class="delet" @click.native="remove(item.name)"/>
        <div>
          <Icon :iconName="item.name" />
        </div>
        <span>{{item.zhName}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChartNav from "@/components/chartNav.vue";
import {Component} from 'vue-property-decorator'
@Component({components:{ChartNav}})

export default class Setting extends Vue{
  created() {
    this.$store.commit("fetchKindList");
  }
  get type() {
    return this.$store.state.auth.addDate.type;
  }
  get kindList() {
    return (this.$store.getters.currentKinds as Tag[]).filter(item=>item.name!=='setting');
  }
  remove(value:'+'|'-'){
    const newList = (this.$store.getters.currentKinds as Tag[]).filter(item=>item.name!==value)
    this.$store.commit('saveKindList',newList)
    this.$store.commit("fetchKindList");
  }
  goBack(){
    this.$router.back()
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
ul {
  li {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    padding: 5px 16px;
    display: flex;
    align-items: center;
    .delet {
      width: 28px;
      height: 28px;
      margin-right: 10px;
      color:rgba(red, 0.3);
    }
    div {
      width: 36px;
      height: 36px;
      
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f5f5f5;
      margin-right: 8px;
      svg {
        width: 28px;
        height: 28px;
      }
    }
  }
}
</style>