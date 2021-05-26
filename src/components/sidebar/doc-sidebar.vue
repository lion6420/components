<template>
  <div :class="$style.singleSelect_markdown">
    <h1>Sidebar 側邊欄</h1>
    <h2>基本功能</h2>
    <div :class="$style.demo">
      <div :class="$style.demo_section">
        <sidebar-basic></sidebar-basic>
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
import sidebarBasic from './doc-sidebar-basic.vue'

//markdown text
import readme_basic_use from '../markdown/sidebar/basic_use.md'

export default {
  components: {
    MarkdownItVue,
    sidebarBasic,
  },
  data() {
    return {
      readme_basic_use: readme_basic_use,
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