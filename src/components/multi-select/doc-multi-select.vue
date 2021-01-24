<template>
  <div :class="$style.multiSelect_markdown">
    <h1>Multi select 單選框</h1>
    <h2>基本功能</h2>
    <div :class="$style.demo">
      <div :class="$style.demo_section">
        <multi-select-basic></multi-select-basic>
      </div>
      <div :class="$style.code_section">
         <markdown-it-vue :content="readme_basic_use" />
      </div>
    </div>

    <h2>自訂選取圖標</h2>
    <div :class="$style.demo">
      <div :class="$style.demo_section">
        <multi-select-custom-check-icon></multi-select-custom-check-icon>
      </div>
      <div :class="$style.code_section">
         <markdown-it-vue :content="readme_custom_check_icon" />
      </div>
    </div>

    <h2>空選項圖標</h2>
    <div :class="$style.demo">
      <div :class="$style.demo_section">
        <multi-select-empty></multi-select-empty>
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
import multiSelectBasic from './doc-multi-select-basic'
import multiSelectCustomCheckIcon from './doc-multi-select-custom-check-icon'
import multiSelectEmpty from './doc-multi-select-empty'

//markdown text
import readme_basic_use from '../markdown/multi-select/basic_use.md'
import readme_custom_check_icon from '../markdown/multi-select/custom-check-icon.md'
import readme_empty from '../markdown/multi-select/empty.md'

export default {
  components: {
    MarkdownItVue,
    multiSelectBasic,
    multiSelectCustomCheckIcon,
    multiSelectEmpty,
  },
  data() {
    return {
      readme_basic_use: readme_basic_use,
      readme_custom_check_icon: readme_custom_check_icon,
      readme_empty: readme_empty,
    }
  },
  
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';
.multiSelect_markdown {
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