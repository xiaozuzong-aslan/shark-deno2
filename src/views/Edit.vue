<template>
  <div class="edit">
    <EditNav :navParams="dataList"/>
    <div class="info">
      <div class="type">
        <span>类型</span>
        {{dataList.data.type ==="-" ? '支出':'收入'}}
      </div>
      <div class="amount">
        <span>金额</span>
        {{dataList.data.number}}
      </div>
      <div class="date">
        <span>日期</span>
        {{dataList.data.createdAt}}
      </div>
      <div class="notes">
        <span>备注</span>
        {{dataList.data.notes}}
      </div>
    </div>

    <div class="wrap">
      <button class="left">编辑</button>
      <button>删除</button>
    </div>
  </div>
</template>

<script>
import EditNav from "@/components/edit/editNav.vue";
export default {
  components: {
    EditNav
  },
  data() {
    return {
      dataList: null
    };
  },
  created() {
    this.$store.commit("fetchData");
    const id = this.$route.params.id;
    this.dataList = this.$store.state.auth.DateList.filter(
      item => item.id === id
    )[0];
    console.log(this.dataList);
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.edit {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.wrap {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  display: flex;
  padding: 18.5px 0;
  button {
    flex-grow: 1;
    border: none;
    background: #fff;
    font-size: 16px;

    &.left {
      border-right: 1px solid fade-out(#8e8e8e, 0.7);
    }
  }
}

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