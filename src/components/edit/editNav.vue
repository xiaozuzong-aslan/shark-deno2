<template>
  <div class="edit-nav">
    <div class="back" @click="goBack">
      <Icon iconName="left" />
    </div>
    <div class="title">
      <div>
        <Icon :iconName="value.data.currentKind.iconName" />
      </div>
      <span>{{value.data.currentKind.textName}}</span>
    </div>
    <div class="button">分享</div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.edit-nav {
  padding: 5px 0;
  padding-left: 16px;

  display: flex;
  background: $color-yellow;

  .back {
    svg {
      width: 28px;
      height: 28px;
    }
  }

  .title {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      border-radius: 50%;
      background: #fff;

      width: 46px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 28px;
        height: 28px;
      }
    }
    span {
      width: 40px;
      text-align: center;
      margin-top: 5px;
    }
  }
  .button {
    padding-right: 16px;
  }
}
</style>