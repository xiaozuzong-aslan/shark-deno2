<template>
  <svg>
    <use :xlink:href="`#${iconName}`" />
  </svg>
</template>

<script lang="ts">

const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../../assets/icon", true, /\.svg$/));
} catch (error) {
  console.log(error);
}
export default {
  props: {
    iconName: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
svg {
  display: flex;
  justify-content: center;
  align-items: center;
  use {
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;    
  }
}

</style>