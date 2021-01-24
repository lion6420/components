<template>
  <div :class="$style.input_markdown">
    <h1>Input 輸入框</h1>
    <h2>基本功能</h2>
    <div :class="$style.demo">
      <div :class="$style.demo_section">
        <t-input placeholder="Basic use" fontColor="#B8B8B8">
          <template slot="addonBefore">
            <span class="fas fa-dollar-sign" style="color: #606060"></span>
          </template>
          <template slot="addonAfter">
            <span style="color: #606060">USD</span>
          </template>
        </t-input>
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
import tInput from '@/components/utils/input'

//markdown text
import readme_basic_use from '../markdown/input/basic_use.md'

export default {
  components: {
    MarkdownItVue,
    tInput,
  },
  data() {
    return {
      readme_basic_use: readme_basic_use
    }
  },
  
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';
.input_markdown {
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