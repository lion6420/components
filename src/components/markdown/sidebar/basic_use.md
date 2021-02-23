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
          type: 'dropdown',
          label: 'OptionA',
          icon: {
            class: 'fas fa-user'
          },
          children: [
            {
              label: 'OptionA-1',
              icon: {
                class: 'fas fa-edit'
              },
            },
            {
              label: 'OptionA-2',
              icon: {
                class: 'fas fa-keyboard'
              },
            },
            {
              label: 'OptionA-3',
              icon: {
                class: 'fas fa-tasks'
              },
            },
          ]
        },
        {
          label: 'OptionB',
          icon: {
            class: 'fas fa-wrench'
          }
        },
        {
          label: 'OptionC',
          icon: {
            class: 'fas fa-paper-plane'
          }
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