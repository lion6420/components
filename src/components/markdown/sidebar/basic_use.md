### code example
```vue
<template>
  <div :class="$style.wrapper">
    <sidebar :class="$style.sidebar_dark" :menu="menu" theme="dark"></sidebar>
    <sidebar style="margin-left: 50px" :class="$style.sidebar_light" :menu="menu"></sidebar>
  </div>
</template>

<script>
import sidebar from '@/components/utils/sidebar/sidebar'
export default {
  components: {
    sidebar,
  },
  data() {
    return {
      menu: [
        {
          label: 'OptionA',
        },
        {
          label: 'OptionB',
        },
        {
          label: 'OptionC',
        },
        {
          label: 'Sidebar 側邊欄',
          link: '/doc/sidebar',
        },
        {
          label: 'OptionD',
        },
      ]
    }
  }
}
</script>
```