<template>
  <input
    :class="$style.inputStyle"
    :placeholder="placeholder"
    :value="value"
    :style="{width: width}"
    @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      require: true,
    },
    width: {
      type: String,
      require: false,
      default() {
        return '200px'
      }
    },
    placeholder: {
      type: String,
      require: false,
      default() {
        return ''
      }
    }
  },
}
</script>

<style lang="scss" module>
@import '@/style/general.module.scss';
.inputStyle {
  @include block(100%, 30px, $radius: 5px);
  outline: none;
  border: 1px solid #a7a7a7;
  text-align: center;
}
.inputStyle:focus-within {
  border: 1px solid #6294f1;
  box-shadow: 0px 0px 5px #739ce9;
}

</style>