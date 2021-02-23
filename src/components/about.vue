<template>
  <div :class="$style.about">
    <markdown-it-vue :content="about" />
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import about from './markdown/about.md'
export default {
  components: {
    MarkdownItVue,
  },
  data() {
    return {
      about: about
    }
  }
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';
.about {
  @include block(90%);
  margin: auto;
  margin-top:40px;
  margin-bottom: 40px;
}

</style>