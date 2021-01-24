### code example
> 合併儲存格參數 - spanMethod, function預設傳入5個參數 -> (group_index, group_size, row_index, column_index, header, data)
>
> 組件允許對table row進行分組，group_index表示組別 (若無設定分組，默認和row_index相同)，group_size表示該組別row數 (若無設定分組, 默認為1)
>
> row_index表示實際row位置
```vue
<template>
  <t-table :data="tableData" :columns="headers" :spanMethod="spanMethod">
    <template slot="tags" slot-scope="scope">
      <div style="display:flex">
        <div
          v-for="(tag, t_index) in scope.data.tags" :key="t_index"
          :style="{'background-color': tagColor(tag),
                  'border-radius': '8px', 'color': '#fff', 'padding':'3px 5px',
                  'margin-left': '5px'}">{{tag}}</div>
      </div>
    </template>
    <template slot="operation">
      <div style="width:30px;height:30px;border-radius:50%;background-color:#3364FF;color:#fff;text-align:center;">
        <span class="fas fa-edit" style="position:relative;top:5px"></span>
      </div>
    </template>
  </t-table>
</template>

<script>
import tTable from '@/components/utils/table'

//markdown text
export default {
  components: {
    tTable,
  },
  data() {
    return {
      headers: [
        {prop: 'name', label: 'Name', style: {height: '40px'}},
        {prop: 'age', label: 'Age', style: {height: '40px'}},
        {prop: 'address', label: 'Address', style: {height: '40px'}},
        {prop: 'tags', label: 'Tags', style: {height: '40px'}},
        {prop: 'operation', label: 'Operation', style: {height: '40px'}},
      ],
      tableData: [
        {
          name: 'Tony Chen',
          age: '26',
          address: 'Taichung Taiwan',
          tags: ['developer', 'frontend']
        },
        {
          name: 'Darcy Chang',
          age: '24',
          address: 'Taipei Taiwan',
          tags: ['developer', 'data scientist']
        },
        {
          name: 'Li',
          age: '24',
          address: 'Taoyuan Taiwan',
          tags: ['developer', 'backend']
        },
        {
          name: 'James Qiu',
        }
      ],
      spanMethod: function(g_index, g_size, r_index, c_index) {
        if (r_index === 3 && c_index === 0) {
          return {
            rowspan: 1,
            colspan: 5,
          }
        }
        else if (r_index === 3) {
          return {
            rowspan: 0,
            colspan: 0,
          }
        }
        else {
          return {
            rowspan: 1,
            colspan: 1,
          }
        }
      },
      readme: readme
    }
  },
  methods: {
    tagColor(tag) {
      var color
      switch(tag) {
        case 'developer':
          color = '#4BC369'
          break
        case 'data scientist':
          color = '#3DB0CD'
          break
        case 'frontend':
          color = '#D05CE2'
          break
        default:
          color = '#DA5656'
          break
      }
      return color
    }
  }
}
</script>
```