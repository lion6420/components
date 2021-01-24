### code example
```vue
<template>
  <t-input placeholder="Basic use" fontColor="#B8B8B8">
    <template slot="addonBefore">
      <span class="fas fa-dollar-sign" style="color: #606060"></span>
    </template>
    <template slot="addonAfter">
      <span style="color: #606060">USD</span>
    </template>
  </t-input>
</template>

<script>
import tInput from '@/components/utils/input'

export default {
  components: {
    tInput,
  },
}
</script>

```