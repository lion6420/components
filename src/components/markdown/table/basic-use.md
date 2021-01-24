### code example
```vue
<template>
  <t-table :data="tableData" :columns="headers">
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
        }
      ],
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