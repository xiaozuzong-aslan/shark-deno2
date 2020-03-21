<template>
  <div id="bar">
    <slot />
    <div class="item" v-for="(item,index) in chartSize" :key="index">
      <div class="title">
        <Icon :iconName="item.data.currentKind.iconName" />
      </div>
      <div class="chart">
        <p>{{item.data.currentKind.textName}} {{item.data.percent}}%</p>
        <div class="column" :style="{width:item.data.percent+'%'}"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    dataSource: {
      type: Array,
      required: true
    }
  },
  computed: {
    chartSize() {
      const dataList = JSON.parse(JSON.stringify(this.dataSource));
      const total = dataList.map(item =>
        (
          (parseFloat(item.data.number) /
            this.dataSource
              .map(item => item.data.number)
              .reduce((sum, item) => parseFloat(item) + sum, 0)) *
          100
        ).toFixed(2)
      );
      let x = 0;
      dataList.forEach(item => {
        item.data.percent = total[x];
        x += 1;
      });
      dataList.sort(
        (a, b) => parseFloat(b.data.percent) - parseFloat(a.data.percent)
      );
      return dataList;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
#bar {
  padding: 0 16px;
  width: 100;
  height: 200px;
  height: 45vh;
  overflow: auto;
  .item {
    display: flex;
    align-items: center;
    margin-top: 10px;
    box-shadow: 0 1px 1px -1px fade-out(#8e8e8e, 0.6);
    .title {
      background: #f5f5f5;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      svg {
        width: 30px;
        height: 30px;
      }
    }
    .chart {
      padding-left: 10px;
      width: 100%;
      .column {
        width: 10%;
        height: 10px;
        background: $color-yellow;
        border-radius: 10px;
      }
    }
  }
}
</style>