<template>
  <div class="edit">
    <EditNav :value="dataList" />
    <EditInput :value.sync="dataList" v-if="editToggle" />
    <EditInfo :value="dataList" v-else />
    <div class="editButton" v-if="editToggle">
      <button class="left" @click="cancel">取消</button>
      <button @click="save">保存</button>
    </div>
    <div class="wrap" v-else>
      <button class="left" @click="edit">编辑</button>
      <button @click="remove">删除</button>
    </div>
  </div>
</template>

<script>
import EditNav from "@/components/edit/editNav.vue";
import EditInfo from "@/components/edit/editInfo.vue";
import EditInput from "@/components/edit/editInput.vue";
export default {
  components: {
    EditNav,
    EditInfo,
    EditInput
  },
  data() {
    return {
      dataList: null,
      editToggle: false
    };
  },
  created() {
    this.$store.commit("fetchData");
    const id = this.$route.params.id;
    this.dataList = this.$store.state.auth.DateList.filter(
      item => item.id === id
    )[0];
  },
  methods: {
    edit() {
      this.editToggle = !this.editToggle;
      alert("编辑完记得保存哦");
    },
    cancel() {
      this.editToggle = !this.editToggle;
      const id = this.$route.params.id;
      this.dataList = this.$store.state.auth.DateList.filter(
        item => item.id === id
      )[0];
    },
    remove() {
      const result = confirm("删除后无法恢复哦");
      if (result) {
        const newDateList = this.$store.state.auth.DateList.filter(item => item.id !== this.dataList.id);
        
        this.$store.commit("changeDateList", newDateList);
        this.$router.push('/detail')
      }
    },
    save() {
      const newDateList = [
        ...this.$store.state.auth.DateList.filter(
          item => item.id !== this.dataList.id
        ),
        this.dataList
      ];
      this.$store.commit("changeDateList", newDateList);
      this.editToggle = !this.editToggle;
      alert("已保存");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.edit {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.wrap {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  display: flex;
  padding: 18.5px 0;
  button {
    flex-grow: 1;
    border: none;
    background: #fff;
    font-size: 16px;

    &.left {
      border-right: 1px solid fade-out(#8e8e8e, 0.7);
    }
  }
}
.editButton {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  display: flex;
  padding: 18.5px 0;
  button {
    flex-grow: 1;
    border: none;
    background: #fff;
    font-size: 16px;

    &.left {
      border-right: 1px solid fade-out(#8e8e8e, 0.7);
    }
  }
}
</style>