### code example
```vue
<template>
  <div :class="$style.wrapper">
    <multi-select :options="options" v-model="selected" placeholder="預設圖標"></multi-select>
    <multi-select :options="options" v-model="selected" placeholder="自訂義圖標" style="margin-left: 30px">
      <template slot="empty">
        <div style="padding: 10px 0px"><span class="fas fa-trash-alt" style="font-size: 30px"></span></div>
      </template>
    </multi-select>
  </div>
</template>

<script>
import multiSelect from '@/components/utils/multi-select'
export default {
  components: {
    multiSelect,
  },
  data() {
    return {
      options: [],
      selected: {},
    }
  }
}
</script>
```