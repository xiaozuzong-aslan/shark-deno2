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

<script lang='ts'>
import dayjs from "dayjs";
import {detailNav,Content,Ad,Vue} from './importComponents'
import clone from "@/lib/clone";//深克隆
import {Component} from 'vue-property-decorator'

@Component({components:{detailNav,Content,Ad}})
export default class Detail extends Vue{
  changeMoth:Boolean = false
  created() {
    this.$store.commit("fetchData");
  }
  mounted() {
    this.$store.commit("changeAdToggle");
  }
  get DateList() {
    return this.$store.getters.DateList;
  }
  get adToggle() {
    return this.$store.state.auth.adToggle;
  }
  showDatePad() {
      this.changeMoth = !this.changeMoth;
  }
  changeMonth(month:number) {
    const newTime = dayjs()
      .month(month - 1)
      .format("YYYY-MM-DD");
    this.$store.commit("currentTime", newTime);
  }
};
</script>

<style lang="scss" scoped src='./style.scss'></style>