<template>
  <div>
    <Ad v-if="adToggle" />
    <Layout v-else>
      <div class="detail">
        <detail-nav @monthClick="showDatePad" />
        <Content :value="DateList" />
        <div class="changeMoth" v-if="changeMoth" @click="showDatePad">
          <ul>
            <li v-for="i in 12" :key="i" :name="i" @click="changeMonth(i)">{{i+'月'}}</li>
          </ul>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
import detailNav from "@/components/detail/detailNav.vue";
import Content from "@/components/detail/content.vue";
import Ad from "@/components/public/Ad.vue";
import clone from "@/lib/clone";
import dayjs from "dayjs";
export default {
  data() {
    return {
      changeMoth: false
    };
  },
  components: {
    detailNav,
    Content,
    Ad
  },
  created() {
    this.$store.commit("fetchData");
  },
  mounted() {
    this.$store.commit("changeAdToggle");
  },
  computed: {
    DateList() {
      return this.$store.getters.DateList;
    },
    adToggle() {
      return this.$store.state.auth.adToggle;
    }
  },
  methods: {
    showDatePad() {
      this.changeMoth = !this.changeMoth;
    },
    changeMonth(month) {
      const newTime = dayjs()
        .month(month - 1)
        .format("YYYY-MM-DD");
      this.$store.commit("currentTime", newTime);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.changeMoth {
  position: fixed;
  height: 100vh;
  width: 100vw;
  bottom: 0;

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