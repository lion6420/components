<template>
  <div :class="$style.wrapper">
    <t-table :columns="headers" :data="tableData"></t-table>
  </div>
</template>

<script>
import tTable from '@/components/utils/table/table'
export default {
  components: {
    tTable,
  },
  data() {
    return {
      headers: [
        {label: '參數', prop: 'parameter'},
        {label: '說明', prop: 'description'},
        {label: '類型', prop: 'type'},
        {label: '預設', prop: 'default'},
        {label: '範例', prop: 'example'},
      ],
      tableData: [
        {
          parameter: 'columns',
          description: '欄位名稱(label)、欄位參數(prop)',
          type: 'array',
          default: '[ ]',
          example: '[{ label: example, prop: example_prop }]',
        },
        {
          parameter: 'data',
          description: '表格數據',
          type: 'array',
          default: '[ ]',
          example: '[{ prop1: data1, prop2: data2, prop3: data3 }]',
        },
        {
          parameter: 'bordered',
          description: '是否顯示欄位側框',
          type: 'boolean',
          default: 'True',
          example: 'True',
        },
        {
          parameter: 'borderAround',
          description: '是否顯示外框',
          type: 'boolean',
          default: 'True',
          example: 'True',
        },
        {
          parameter: 'striped',
          description: '是否為斑馬紋',
          type: 'boolean',
          default: 'False',
          example: 'True',
        },
      ]
    }
  },
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';
.wrapper {
  @include block();
}
</style>