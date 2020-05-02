
<template><!--该页面负责添加记账-->
  <div class="add">
    <div class="record-wrapper" :class="{visible:toggle}"><!--toggle控制该页面的弹出-->
      <record-nav />
      <Kind />
    </div>
    <NumberPad v-if="showPad" />
    <Layout />
    
  </div>
</template>

<script lang="ts">
import {recordNav,Kind,NumberPad,Vue}  from './importComponents'
import {Component} from 'vue-property-decorator'

@Component({components:{recordNav,Kind,NumberPad}})
export default class Add extends Vue{
  get toggle(){
    return  this.$store.state.auth.addToggle;
  }
  get showPad() {
      return this.$store.state.auth.addDate.currentKind.iconName;
    }
}

</script>


<style lang="scss" scoped src="./style.scss">
</style>