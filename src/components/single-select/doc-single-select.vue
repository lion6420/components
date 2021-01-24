<template>
  <div :class="$style.singleSelect_markdown">
    <h1>Single select 單選框</h1>
    <h2>基本功能</h2>
    <div :class="$style.demo">
      <div :class="$style.demo_section">
        <single-select-basic></single-select-basic>
      </div>
      <div :class="$style.code_section">
         <markdown-it-vue :content="readme_basic_use" />
      </div>
    </div>

    <h2>空選項圖標</h2>
    <div :class="$style.demo">
      <div :class="$style.demo_section">
        <single-select-empty></single-select-empty>
      </div>
      <div :class="$style.code_section">
         <markdown-it-vue :content="readme_empty" />
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

//demo components
import singleSelectBasic from './doc-single-select-basic'
import singleSelectEmpty from './doc-single-select-empty'

//markdown text
import readme_basic_use from '../markdown/single-select/basic_use.md'
import readme_empty from '../markdown/single-select/empty.md'

export default {
  components: {
    MarkdownItVue,
    singleSelectBasic,
    singleSelectEmpty
  },
  data() {
    return {
      readme_basic_use: readme_basic_use,
      readme_empty: readme_empty,
    }
  },
  
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';
.singleSelect_markdown {
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