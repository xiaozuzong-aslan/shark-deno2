
<template>
  <div class="chart">
    <Layout>
      <ChartNav :value="type" />
      <div class="chart-warp" v-if="dataList.length>0">
        <div id="pie"></div>
        <BarChart :dataSource="dataList">
          <p>{{type==="-"?'支出':'收入'}}排行榜</p>
        </BarChart>
      </div>
      <p v-else>
        目前没有任何
        <span>{{type==="-"?'支出':'收入'}}</span>数据
      </p>
      <!-- <pieChart :value="{dataList,type}"/> -->
    </Layout>
  </div>
</template>

<script>
import dayjs from "dayjs";
import echarts from "@/echarts.js";

import BarChart from "@/components/public/BarChart.vue";
import ChartNav from "@/components/chartNav.vue";
export default {
  components: {
    BarChart,
    ChartNav
  },
  name: "Chart",
  data() {
    return {
      dataList: []
    };
  },
  created() {
    this.$store.commit("fetchData");
    this.dataList = this.$store.getters.getListByType;
  },
  computed: {
    type() {
      return this.$store.state.auth.addDate.type;
    }
  },
  watch: {
    type() {
      this.dataList = this.$store.getters.getListByType;
      if (this.dataList.length > 0) {
        this.$nextTick(function() {
          this.initPie();
        });
      }
    }
  },
  methods: {
    initPie() {
      const myChart = echarts.init(document.getElementById("pie"));
      const option = {
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
p {
  padding: 5px 16px;
  span {
    color: red;
  }
}
</style>