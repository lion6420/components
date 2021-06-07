### code example
```vue
<template>
  <div :class="$style.wrapper">
    <t-table :data="tableData" :columns="headers" :tbodyGroup="tableGroup" :spanMethod="spanMethod" :rowToggled="true">
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
      <template slot="rowToggle" slot-scope="scope">
        <div style="padding:20px 30px;">
          My name is {{tableData[scope.index]['name']}},
          I am {{tableData[scope.index]['age']}} years old,
          living in {{tableData[scope.index]['address']}}
        </div>
      </template>
    </t-table>
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
        {prop: 'name', label: 'Name', style: {height: '40px'}},
        {prop: 'age', label: 'Age', style: {height: '40px'}},
        {
          label: 'Address',
          style: {height: '40px'},
          children: [
            {prop: 'city', label: 'City'},
            {prop: 'country', label: 'Country'}
          ]
        },
        {prop: 'tags', label: 'Tags', style: {height: '40px'}},
        {prop: 'operation', label: 'Operation', style: {height: '40px'}},
      ],
      tableData: [
        {
          name: 'Tony Chen',
          age: '26',
          city: 'Taichung',
          country: 'Taiwan',
          tags: ['developer', 'frontend']
        },
        {
          name: 'Tony Chen',
          age: '26',
          city: 'Taichung',
          country: 'Taiwan',
          tags: ['developer', 'frontend']
        },
        {
          name: 'Tony Chen',
          age: '26',
          city: 'Taichung',
          country: 'Taiwan',
          tags: ['developer', 'frontend']
        },
        {
          name: 'Darcy Chang',
          age: '24',
          city: 'Taipei',
          country: 'Taiwan',
          tags: ['developer', 'data scientist']
        },
        {
          name: 'Darcy Chang',
          age: '24',
          city: 'Taipei',
          country: 'Taiwan',
          tags: ['developer', 'data scientist']
        },
        {
          name: 'Li',
          age: '24',
          city: 'Taoyuan',
          country: 'Taiwan',
          tags: ['developer', 'backend']
        }
      ],
      tableGroup: {
        groupNumber: 3,
        groupSize: [3, 2, 1],
      },
      spanMethod: function(g_index, g_size, r_index, c_index) {
        if (r_index === 0 && c_index === 0) {
          return {rowspan: g_size, colspan: 1}
        }
        else if (c_index === 0) {
          return {rowspan: 0, colspan: 0}
        }
        else return {rowspan: 1, colspan: 1}
      }
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