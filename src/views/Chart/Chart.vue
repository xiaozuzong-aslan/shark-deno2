
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
import {BarChart,ChartNav,Vue} from './importComponents'
import initPie from '@/lib/initPie';//封装的数据图方法
import dayjs from "dayjs";//时间插件
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

<style lang="scss" scoped src='./style.scss'>
</style>