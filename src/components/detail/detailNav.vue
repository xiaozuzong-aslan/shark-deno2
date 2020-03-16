<template>
  <div class="detail-nav">
    <div class="time">
      <div class="year">{{time.year}}</div>
      <div class="month" @click="monthClick">
        {{time.month}}月 
        <Icon iconName="extends" />
       
      </div>
    </div>
    <div class="type">
      <div class="expense">
        <div class="text">支出</div>
        <div class="amount">{{monthSpend.spendList}}</div>
      </div>
      <div class="income">
        <div class="text">支出</div>
        <div class="amount">{{monthSpend.incomeList}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'



export default {
  computed:{
    time(){
      const time = dayjs(this.$store.state.auth.currentTime)
      return {year:time.$y,month:time.$M+1}
    },
     monthSpend(){
      return this.$store.getters.monthSpend
    },
  },
 methods:{
   monthClick(){
     this.$emit('monthClick')
   }
 }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.detail-nav {
  display: flex;
  padding: 5px 16px;
  font-size: 12px;
  background: $color-yellow;
  color: #8E8E8E;
  .type {
    display: flex;
    flex-grow: 1;
    margin-left: 20px;
    .expense,
    .income {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .amount {
        font-size: 16px;
        font-weight: 700;
        color: $color-black;
      }
    }
  }
  .time {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // margin-right:15px;
    .month {
      display: flex;
      font-size: 16px;
      font-weight: 700;
      color: $color-black;
      padding-right: 10px;
      padding-top: 8px;
      border-right: 1px solid $color-black;
    }
    svg {
      margin-left: 5px;
      width: 10px;
      height: 10px;
    }
  }
}
</style>