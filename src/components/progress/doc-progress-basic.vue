<template>
  <div :class="$style.wrapper">
    <t-progress :percentage="90" color="#29DF23" height="10px"></t-progress>
    <t-progress :percentage="80" color="#288DFB" style="margin-top:20px" height="10px"></t-progress>
    <t-progress :percentage="20" color="#FF6432" style="margin-top:20px" height="10px"></t-progress>
  </div>
</template>

<script>
import tProgress from '@/components/utils/progress'
export default {
  components: {
    tProgress,
  },
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';
.wrapper {
  @include block(100%);
}
</style>