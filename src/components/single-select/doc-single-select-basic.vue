<template>
  <div :class="$style.wrapper">
    <single-select :options="options" v-model="selected" placeholder="Basic use">
      <template slot="addonBefore">
        <span class="fas fa-user"></span>
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
      options: [
        'Tony',
        'Darcy',
        'James',
        {label: 'Li', disabled:true},
      ],
      selected: '',
    }
  }
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';

</style>