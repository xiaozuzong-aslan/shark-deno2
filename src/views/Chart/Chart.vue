
<template>
  <Layout>
    <div class="chart">
      <ChartNav :value="type" />
      <div class="chart-warp" v-if="dataList.length>0">
        <div id="pie"></div>
        <BarChart :dataSource="dataList">
          <p>{{type==="-"?'支出':'收入'}}排行榜</p>
        </BarChart>
      </div>
      <div class="notes-none" v-else>
        <Icon iconName="none" />
        <p>目前没有任何<span>{{type==="-"?'支出':'收入'}}</span>的数据</p>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">

import dayjs from "dayjs";
import BarChart from "@/components/public/BarChart.vue";
import ChartNav from "@/components/chartNav.vue";
import initPie from '@/lib/initPie';//封装的数据图方法
import Vue from 'vue'
import {Component,Watch} from 'vue-property-decorator'

@Component({components:{BarChart,ChartNav}})
export default class Chart extends Vue{
  dataList = [] as RecordItem[]
  created() {
    this.$store.commit("fetchData");
    this.dataList = this.$store.getters.getListByType;
  }
   mounted() {
    if (this.dataList.length > 0) {
      initPie(this.dataList,this.type);
    }
  }
  get type() {
      return this.$store.state.auth.addDate.type;
  }
  @Watch('type')
  onTypeChanged() {
    this.dataList = this.$store.getters.getListByType;
    if (this.dataList.length > 0) {
        this.$nextTick(function() {
          initPie(this.dataList,this.type);
        });
      }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.chart {
  display: flex;
  flex-direction: column;
  height: 100%;
  .notes-none {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: center;
    padding: 5px 16px;
    color: gray;
    font-size: 14px;
    svg {
      width: 100px;
      height: 100px;
      color: gray;
    }
    span {
      color: red;
    }
  }
}
#pie {
  padding: 5px 16px;
  width: 100vw;
  height: 35vh;
  font-family: $font-hei;
}
</style>