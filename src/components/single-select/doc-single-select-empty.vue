<template>
  <div :class="$style.wrapper">
    <single-select :options="options" v-model="selected" placeholder="預設圖標"></single-select>
    <single-select :options="options" v-model="selected" placeholder="自訂義圖標" style="margin-left: 30px">
      <template slot="empty">
        <div style="padding: 10px 0px"><span class="fas fa-trash-alt" style="font-size: 30px"></span></div>
      </template>
    </single-select>
  </div>
</template>

<script>
import singleSelect from '@/components/utils/single-select'
export default {
  components: {
    singleSelect,
  },
  data() {
    return {
      options: [],
      selected: '',
    }
  }
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';
.wrapper {
  display:flex;
}
</style>