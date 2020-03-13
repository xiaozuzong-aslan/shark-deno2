<template>
  <div class="container">
    <div class="kind" v-if="changeType==='-'">
      <div
        class="item-wrap"
        v-for="item in kindList"
        :key="item.name"
        @click="chooseKind(item.name)"
      >
        <div class="item" :class="{selected:item.name === currentKind}">
          <Icon :iconName="item.name" />
          <span>{{item.zhName}}</span>
        </div>
      </div>
    </div>
    <div class="kind" v-else>
      <div
        class="item-wrap"
        v-for="item in kindList"
        :key="item.name"
        @click="chooseKind(item.name)"
      >
        <div class="item" :class="{selected:item.name === currentKind}">
          <Icon :iconName="item.name" />
          <span>{{item.zhName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addDataSource from "@/lib/addDataSource.js";

export default {
  data() {
    return {
    };
  },
  methods: {
    chooseKind(kind) {
      if(kind=='setting'){
        this.$router.push('/edit')
        return
      }
      this.$store.commit("changeCurrentKind", kind);
    }
  },
  computed: {
    kindList(){
      const type = this.$store.state.auth.addDate.type;
      if(type==='-'){
        return addDataSource.expense
      }else{
        return addDataSource.income
      }
    },
    currentKind() {
      return this.$store.state.auth.addDate.currentKind;
    },
    changeType() {
      
      return this.$store.state.auth.addDate.type;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.kind {
  display: flex;
  flex-wrap: wrap;
  height: 95vh;
  padding-bottom: 10px;
  overflow: auto;
  align-content: flex-start;
  .item-wrap {
    width: 25vw;
    height: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 50%;
      background: #f5f5f5;
      width: 80%;
      height: 80%;
      justify-content: center;
      &.selected {
        background: $color-yellow;
      }
      svg {
        width: 36px;
        height: 36px;
        
      }
    }
  }
}
</style>