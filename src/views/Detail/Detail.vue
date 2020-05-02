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
import {detailNav,Content,Ad,Vue} from './importComponents'

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

<style lang="scss" scoped src='./style.scss'>

</style>