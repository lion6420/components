<template>
  <div :class="$style.wrapper">
    <t-spin size="small"></t-spin>
    <t-spin tip="loading"></t-spin>
    <t-spin size="large"></t-spin>
  </div>
</template>

<script>
import tSpin from '@/components/utils/spin'
export default {
  components: {
    tSpin,
  },
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';
.wrapper {
  @include block(100%);
  display: flex;
}
</style>