<template>
  <div class="content" v-if="JSON.stringify(value)!=='{}'">
    <div class="items" v-for="(items,index) in value" :key="index">
      <div class="title">
        <span class="date">{{beautify(index)}}</span>
        <div class="Subtotal">
          <span class="spend" v-if="dateDay(items).spendDay">支出:{{dateDay(items).spendDay}}</span>
          <span class="expense" v-if="dateDay(items).incomeDay">收入:{{dateDay(items).incomeDay}}</span>
        </div>
      </div>
      <ul>
        <li v-for="item in items" :key="item.id" @click="goEdit(item.id)">
          <Icon :iconName="item.data.currentKind.iconName" />
          <div class="text">
            <span>{{item.data.currentKind.textName}}</span>
            <span>{{item.data.number}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="content-none" v-else>未查询到该月份的数据呀</div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    beautify(time) {
      if (dayjs(time).isSame(dayjs(), "day")) {
        return "今天";
      } else if (dayjs(time).isSame(dayjs().subtract(1, "day"), "day")) {
        return "昨天";
      } else if (dayjs(time).isSame(dayjs().subtract(2, "day"), "day")) {
        return "前天";
      } else if (dayjs(time).isSame(dayjs(), "year")) {
        return dayjs(time).format("MM月DD");
      }
    },
    dateDay(data) {
      const spendDay = data
        .filter(item => item.data.type === "-")
        .reduce((sum, item) => sum + parseFloat(item.data.number), 0);
      const incomeDay = data
        .filter(item => item.data.type === "+")
        .reduce((sum, item) => sum + parseFloat(item.data.number), 0);
      return { spendDay, incomeDay };
    },
    goEdit(id) {
      this.$router.push(`/edit/${id}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.content-none {
  text-align: center;
  padding: 20px 0;
}

.content {
  max-height: 80vh;
  overflow: auto;
  .items {
    .title {
      box-shadow: 0 2px 2px -2px fade-out(#8e8e8e, 0.2);
      padding: 5px 16px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #8e8e8e;

      .Subtotal {
        .spend {
          margin-right: 5px;
        }
      }
    }
    ul {
      li {
        display: flex;
        padding: 8px 16px;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 1px 1px -1px fade-out(#8e8e8e, 0.6);

        svg {
          width: 20px;
          height: 20px;
        }
        div {
          display: flex;
          flex-grow: 1;
          justify-content: space-between;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>