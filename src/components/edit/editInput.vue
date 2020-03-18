<template>
  <div class="editInput">
    <div class="type">
      <span>类型</span>
      {{value.data.type ==="-" ? '支出':'收入'}}
    </div>
    <div class="amount">
      <span>金额</span>
      <input type="text" v-model="info.data.number" />
    </div>
    <div class="date">
      <span>日期</span>
      <input type="text" v-model="info.data.createdAt" @click="xxx" />
    </div>
    <div class="notes">
      <span>备注</span>
      <input type="text" v-model="info.data.notes" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: JSON.parse(JSON.stringify(this.value))
    };
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    xxx() {
      console.log(this.info);
    }
  },
  watch: {
    info: {
      handler() {
        this.$emit('update:value',this.info)
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.editInput {
  padding: 10px 16px;
  flex-grow: 1;
  div {
    margin-top: 10px;
    display: flex;
    align-items: center;

    span {
      color: #8e8e8e;
      padding-right: 10px;
    }
    input {
      padding: 10px 10px;
      flex-grow: 1;
      font-size: 16px;
    }
  }
}
</style>