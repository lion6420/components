### code example
```vue
<template>
  <div :class="$style.wrapper">
    <tabs v-model="currentPage">
      <tab-pane tabKey="TabA" label="Tab A">
        <div style="padding: 20px">This is the first tab page</div>
      </tab-pane>
      <tab-pane tabKey="TabB" label="Tab B">
        <div style="padding: 20px">This is the second tab page</div>
      </tab-pane>
    </tabs>
  </div>
</template>

<script>
import tabs from '@/components/utils/tab/tabs'
import tabPane from '@/components/utils/tab/tab-pane'
export default {
  components: {
    tabs,
    tabPane,
  },
  data() {
    return {
      currentPage: 'TabA'
    }
  }
}
</script>
```