
<template>
  <div class="chart">
    <Layout>{{xxx}}
      <div class="chartNav">
        <div>
          <button class="spend">支出</button>
          <button>收入</button>
        </div>
      </div>
      <div id="main"></div>
    </Layout>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import echarts from "echarts";
export default {
  name: "Chart",
  data(){
    return {
      dataList:[],
      xxx:[]
    }
  },
  created(){
    this.$store.commit('fetchData')
    this.dataList = this.$store.state.auth.DateList
    // this.xxx = 
  },
  
  
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    var option = {
      title: {
        text: `支出`
      },
      tooltip: {},
      legend: {
        data: ["单日"]
      },
      xAxis: {
        data: [...this.dataList.map(item=>dayjs(item.data.createdAt).format('DD'))]
      },
      yAxis: {},
      series: [
        {
          name: "单日",
          type: "line",
          data: [15, 25, 60, 100, 101, 201]
        }
      ]
    };
    myChart.setOption(option);
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

#main {
  padding: 5px 16px;
  width: 100vw;
  height: 40vh;
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
    &.spend {
      background: #343233;
      color: $color-yellow;
    }
  }
}
</style>