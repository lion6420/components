### code example
```vue
<template>
  <div :class="$style.wrapper">
    <multi-select :options="options" v-model="selected" placeholder="Basic use">
      <template slot="checkIcon">
        <span class="fas fa-grin-alt"></span>
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
      options: [
        'Tony',
        'Darcy',
        'James',
      ],
      selected: {},
    }
  }
}
</script>
```