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
import {EditNav,EditInfo,EditInput} from './importComponents'
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
      const result = window.confirm("删除后无法恢复哦");
      if (result) {
        const newDateList = this.$store.state.auth.DateList.filter(item => item.id !== this.dataList.id);
        
        this.$store.commit("changeDateList", newDateList);
        this.$router.back()
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

<style lang="scss" scoped src='./style.scss'>
</style>