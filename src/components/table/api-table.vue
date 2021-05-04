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
          parameter: 'borderColor',
          description: '外框顏色',
          type: 'string',
          default: '#d3d3d3',
          example: '#000',
        },
        {
          parameter: 'striped',
          description: '是否為斑馬紋',
          type: 'boolean',
          default: 'False',
          example: 'True',
        },
        {
          parameter: 'rowHover',
          description: '是否mouse over hover特效',
          type: 'boolean',
          default: 'True',
          example: 'True',
        },
        {
          parameter: 'hoverStyle',
          description: 'mouse over hover style',
          type: 'string',
          default: 'light',
          example: 'hoverStyle="dark", hoverStyle="light"',
        },
        {
          parameter: 'headerFontSize',
          description: '表頭字體大小',
          type: 'string',
          default: '',
          example: '14px',
        },
        {
          parameter: 'headerColor',
          description: '表頭字體顏色',
          type: 'string',
          default: '#3F3F3F',
          example: '#000',
        },
        {
          parameter: 'headerTextAlign',
          description: '表頭字體對齊位置',
          type: 'string',
          default: 'default',
          example: 'center',
        },
        {
          parameter: 'headerPadding',
          description: '表頭字體padding',
          type: 'string',
          default: '8px',
          example: '1px',
        },
        {
          parameter: 'headerBackgroundColor',
          description: '表頭背景顏色',
          type: 'string',
          default: '#ECECEC',
          example: '#fff',
        },
        {
          parameter: 'backgroundColor',
          description: '背景顏色',
          type: 'string',
          default: '',
          example: '#fff',
        },
        {
          parameter: 'spanMethod',
          description: '合併儲存格',
          type: 'function',
          default: 'function(){return {rowspan: 1, colspan: 1} }',
          example: '詳見上方範例',
        },
        {
          parameter: 'spanMethod_header',
          description: '合併表頭儲存格',
          type: 'function',
          default: 'null',
          example: '詳見上方範例',
        },
        {
          parameter: 'tbodyGroup',
          description: 'table body分組',
          type: 'object',
          default: 'null',
          example: '{groupNumber: 2, groupSize: [10, 5]}, groupNumber->組數、groupSize->每一組資料筆數',
        },
        {
          parameter: 'rowToggled',
          description: '是否點擊展開功能',
          type: 'boolean',
          default: 'False',
          example: 'True',
        },
        {
          parameter: 'height',
          description: '設定表格固定高度, 設定後表格overflow-y:srcoll',
          type: 'string',
          default: '',
          example: '500px',
        },
        {
          parameter: 'maxHeight',
          description: '設定表格最大高度, 設定後表格overflow-y:srcoll',
          type: 'string',
          default: '',
          example: '500px',
        },
        {
          parameter: 'clickEvent',
          description: 'row點擊觸發事件, 預設傳入參數row_index，表示點擊第幾個row',
          type: 'function',
          default: 'null',
          example: 'function evt(row) { console.log(data[row]) }',
        },
        {
          parameter: 'loading',
          description: '是否loading效果，loading圖示可透過slot更改，詳見上方範例',
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