
<template>
  <div class="chart">
    <Layout>
      <div class="chartNav">
        <div>
          <button :class="{selected:type==='-'}" @click="changeType('-')">支出</button>
          <button :class="{selected:type==='+'}" @click="changeType('+')">收入</button>
        </div>
      </div>
      <div id="pie"></div>
      
      <MayChart :dataSource="dataList" ><p>{{type==="-"?'支出':'收入'}}排行榜</p></MayChart>
    </Layout>
  </div>
</template>

<script>
import dayjs from "dayjs";
import echarts from "echarts";
import MayChart from "@/components/public/mayChart.vue";
export default {
  components: {
    MayChart
  },
  name: "Chart",
  data() {
    return {
      dataList: [],
      type: "-"
    };
  },
  created() {
    this.$store.commit("fetchData");
    this.dataList = this.$store.state.auth.DateList.filter(
      item => item.data.type === this.type
    );
  },
  watch: {
    type() {
      this.dataList = this.$store.state.auth.DateList.filter(
        item => item.data.type === this.type
      );
      this.initPie();
    }
  },
  methods: {
    changeType(type) {
      this.type = type;
    },
    initPie() {
      var myChart = echarts.init(document.getElementById("pie"));
      var option = {
        title: {
          text: `支出`
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
              ...this.dataList.map(item => {
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