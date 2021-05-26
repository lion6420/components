### code example
```vue
<template>
  <div :class="$style.wrapper">
    <sidebar :class="$style.sidebar_dark" :menu="menu" theme="dark" :width="220"></sidebar>
    <sidebar style="margin-left: 250px" :class="$style.sidebar_light" :menu="menu" :width="220"></sidebar>
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
              label: 'Sidebar 側邊欄',
              icon: {
                class: 'fas fa-edit'
              },
              link: '/doc/sidebar'
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
          type: 'level',
          label: 'Sidebar 側邊欄',
          link: '/doc/sidebar',
          children: [
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
          ]
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