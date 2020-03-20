
<template>
  <div class="chart-warp" v-show="value">
    <div id="pie"></div>
    <BarChart :dataSource="value">
      <p>{{type==="-"?'支出':'收入'}}排行榜</p>
    </BarChart>
  </div>
</template>

<script>
import dayjs from "dayjs";
import echarts from "echarts";
import BarChart from "@/components/public/BarChart.vue";
export default {
    props:{
        value:{
            type:Array
        }
    },
  methods: {
    initPie() {
      var myChart = echarts.init(document.getElementById("pie"));
      var option = {
        title: {
          text: `${this.type === "-" ? "支出" : "收入"}`
        },
        tooltip: {
          // 提示
          trigger: "item", // 触发方式
          formatter: "{a} <br/>{b}: {c} ({d}%)" // 提示的格式
        },
        series: [
          {
            name: "单日",
            type: "pie",
            radius: "60%",
            data: [
              ...this.value.map(item => {
                return {
                  value: item.data.number,
                  name: item.data.currentKind.textName
                };
              })
            ]
          }
        ]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.initPie();
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

#pie {
  padding: 5px 16px;
  width: 100vw;
  height: 35vh;
  font-family: $font-hei;
}
.chartNav {
  background: $color-yellow;
  font-size: 16px;
  padding: 16px 10px;
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