<template>
  <Layout>
    <div class="detail">
      <detail-nav @monthClick="showDatePad" />
      <div class="content" v-if="JSON.stringify(DateList)!=='{}'">
        <div class="items" v-for="(items,index) in DateList" :key="index">
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
      <div class="changeMoth" v-if="changeMoth" @click="showDatePad">
        <ul>
          <li v-for="i in 12" :key="i" :name="i" @click="changeMonth(i)">{{i+'月'}}</li>
        </ul>
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
      changeMoth: false
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
      console.log(this.$store.getters.DateList)
      
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
    changeMonth(month) {
      const newTime = dayjs()
        .month(month - 1)
        .format("YYYY-MM-DD");
      this.$store.commit("currentTime", newTime);
    },
    goEdit(id){
      this.$router.push(`/edit/${id}`)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
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
  height: 100vh;
  width: 100vw;
  bottom: 0;

  // overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(102, 102, 102, 0.3);
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: rgba(102, 102, 102, 0.8);
    li {
      width: 33.33vw;
      padding: 10px 3px;
      border: 1px solid rgba(#d2d3d7, 0.5);
      text-align: center;
      color: #fff;
    }
  }
}
</style>