<template>
  <div :class="$style.tab_markdown">
    <h1>Tab 標籤頁</h1>
    <h2>基本功能</h2>
    <div :class="$style.demo">
      <div :class="$style.demo_section">
        <tab-basic></tab-basic>
      </div>
      <div :class="$style.code_section">
         <markdown-it-vue :content="readme_basic_use" />
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

//demo components
import tabBasic from './doc-tab-basic'

//markdown text
import readme_basic_use from '../markdown/tab/basic-use.md'
export default {
  components: {
    MarkdownItVue,
    tabBasic,
  },
  data() {
    return {
      readme_basic_use: readme_basic_use
    }
  }
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';
.tab_markdown {
  @include block(90%);
  margin: auto;
  font-family: Microsoft JhengHei;
  margin-bottom: 20px;
  .demo {
    @include block(100%);
    @include border();
    .demo_section {
      @include block(95%);
      margin: 20px auto;
    }
    .code_section {
      @include block(95%);
      margin: auto;
      margin-bottom: 20px;
    }
  }
}

</style>