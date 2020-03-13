<template>
  <Layout>
    <div class="detail">
      <detail-nav />
      <div class="content">
        <div class="item" v-for="item in DateList" :key="item.id">
          <div class="title">
            <span class="date">{{item.data.createdAt}}</span>
            <span class="total">支出:{{item.data.number}}</span>
          </div>
          <ul>
            <li>
              <Icon :iconName="item.data.currentKind"/>
              <div class="text">
                <span>蔬菜</span>
                <span>{{item.data.number}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import detailNav from "@/components/detail/detailNav.vue";
export default {
  components: {
    detailNav
  },
  created(){
    
    this.$store.commit('fetchDate')
  },
  computed:{
    DateList(){
      return this.$store.getters.DateList
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.content {
  .item {
    .title {
      box-shadow: 0 2px 2px -2px fade-out(gray, 0.2);
      padding: 5px 16px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: gray;
    }
    ul {
      li {
        display: flex;
        padding: 8px 16px;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 1px 1px -1px fade-out(gray, 0.6);
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