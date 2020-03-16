<template>
  <Layout>
    <div class="detail">
      <detail-nav @monthClick="showDatePad" />
      <div class="content">
        <div class="items" v-for="(items,index) in DateList" :key="index">
          <div class="title">
            <span class="date">{{beautify(index)}}</span>
            <div class="Subtotal">
              <span class="spend" v-if="dateDay(items).spendDay">支出:{{dateDay(items).spendDay}}</span>
              <span class="expense" v-if="dateDay(items).incomeDay">收入:{{dateDay(items).incomeDay}}</span>
            </div>
          </div>
          <ul>
            <li v-for="item in items" :key="item.id">
              <!--  -->
              <Icon :iconName="item.data.currentKind.iconName" />
              <div class="text">
                <span>{{item.data.currentKind.textName}}</span>
                <span>{{item.data.number}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="changeMoth" v-if="changeMoth">
        <!-- <ul>
          <li v-for="i in 12" :key="i" :name="i">{{i}}</li>
        </ul>-->
        <label for="bday">
          <input type="date" id="bday" name="bday" v-model="now" @change="changeMonth" />
        </label>
      </div>
    </div>
  </Layout>
</template>

<script>
import detailNav from "@/components/detail/detailNav.vue";
import clone from "@/lib/clone";
import dayjs from "dayjs";
export default {
  data() {
    return {
      changeMoth: false,
      now: dayjs().format("YYYY-MM-DD")
    };
  },
  components: {
    detailNav
  },
  created() {
    this.$store.commit("fetchData");
  },
  computed: {
    DateList() {
      return this.$store.getters.DateList;
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
    showDatePad() {
      this.changeMoth = !this.changeMoth;
    },
    changeMonth() {
      console.log(this.now);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.content {
  height: 70vh;
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
          margin-right: 3px;
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
.changeMoth {
  position: fixed;
  bottom: 0;
  height: 20vh;
  width: 100vw;
  overflow: auto;
  border: 1px solid red;
}
</style>