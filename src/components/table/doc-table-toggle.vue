<template>
  <div :class="$style.wrapper">
    <t-table :data="tableData" :columns="headers" :rowToggled="true">
      <template slot="rowToggle" slot-scope="scope">
        <div style="padding:20px 30px">
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
        {prop: 'name', label: 'Name', style: {height: '40px', width: '200px'}},
        {prop: 'gender', label: 'Gender', style: {height: '40px', width: '120px'}},
        {prop: 'age', label: 'Age', style: {height: '40px', width: '120px'}},
        {prop: 'address', label: 'Address', style: {height: '40px'}},
      ],
      tableData: [
        {
          name: 'Tony Chen',
          gender: 'male',
          age: '26',
          address: 'Taichung, Taiwan',
        },
        {
          name: 'Darcy Chang',
          gender: 'male',
          age: '24',
          address: 'Taipei, Taiwan',
        },
        {
          name: 'Li',
          gender: 'male',
          age: '24',
          address: 'Taoyuan, Taiwan',
        }
      ],
    }
  },
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';


</style>