### code example
```vue
<template>
  <div :class="$style.wrapper">
    <t-table :columns="headers" :loading="loading">
      <template slot="loading">
        <t-spin tip="loading"></t-spin>
      </template>
    </t-table>
  </div>
</template>

<script>
import tTable from '@/components/utils/table/table'
import tSpin from '@/components/utils/spin'
export default {
  components: {
    tTable,
    tSpin
  },
  data() {
    return {
      loading: true,
      headers: [
        {prop: 'name', label: 'Name', style: {height: '40px'}},
        {prop: 'age', label: 'Age', style: {height: '40px'}},
        {prop: 'address', label: 'Address', style: {height: '40px'}},
        {prop: 'tags', label: 'Tags', style: {height: '40px'}},
        {prop: 'operation', label: 'Operation', style: {height: '40px'}},
      ],
    }
  },
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';
.wrapper {
  @include block(100%);
}
</style>
```