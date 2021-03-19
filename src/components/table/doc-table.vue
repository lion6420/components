<template>
  <div :class="$style.table_markdown">
    <h1>Table 表格</h1>
    <h2>基本功能</h2>
    <div :class="$style.demo">
      <div :class="$style.demo_section">
        <table-basic></table-basic>
      </div>
      <div :class="$style.code_section">
         <markdown-it-vue :content="readme_basic_use" />
      </div>
    </div>

    <h2>多級表頭</h2>
    <div :class="$style.demo">
      <div :class="$style.demo_section">
        <table-multi-header></table-multi-header>
      </div>
      <div :class="$style.code_section">
        <markdown-it-vue :content="readme_mutiheader" />
      </div>
    </div>

    <h2>合併儲存格</h2>
    <div :class="$style.demo">
      <div :class="$style.demo_section">
        <table-cellspan></table-cellspan>
      </div>
      <div :class="$style.code_section">
         <markdown-it-vue :content="readme_cellspan" />
      </div>
    </div>

    <h2>合併表頭</h2>
    <div :class="$style.demo">
      <div :class="$style.demo_section">
        <table-headerspan></table-headerspan>
      </div>
      <div :class="$style.code_section">
         <markdown-it-vue :content="readme_headerspan" />
      </div>
    </div>

    <h2>點擊展開</h2>
    <div :class="$style.demo">
      <div :class="$style.demo_section">
        <table-toggle></table-toggle>
      </div>
      <div :class="$style.code_section">
         <markdown-it-vue :content="readme_toggle" />
      </div>
    </div>

    <h2>載入效果</h2>
    <div :class="$style.demo">
      <div :class="$style.demo_section">
        <table-loading></table-loading>
      </div>
      <div :class="$style.code_section">
         <markdown-it-vue :content="readme_loading" />
      </div>
    </div>

    <h2>API - Table</h2>
    <div :class="$style.demo" style="border:none">
      <api-table></api-table>
    </div>
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

//demo components
import tableBasic from './doc-table-basic'
import tableMultiHeader from './doc-table-mutiheader'
import tableCellspan from './doc-table-cellspan'
import tableHeaderspan from './doc-table-headerspan'
import tableToggle from './doc-table-toggle'
import tableLoading from './doc-table-loading'

//markdown text
import readme_basic_use from '../markdown/table/basic-use.md'
import readme_mutiheader from '../markdown/table/muti-header.md'
import readme_cellspan from '../markdown/table/cellspan.md'
import readme_headerspan from '../markdown/table/headerspan.md'
import readme_toggle from '../markdown/table/toggle.md'
import readme_loading from '../markdown/table/loading.md'

//api
import apiTable from './api-table'

export default {
  components: {
    MarkdownItVue,
    tableBasic,
    tableMultiHeader,
    tableCellspan,
    tableHeaderspan,
    tableToggle,
    tableLoading,
    apiTable,
  },
  data() {
    return {
      readme_basic_use: readme_basic_use,
      readme_cellspan: readme_cellspan,
      readme_mutiheader: readme_mutiheader,
      readme_headerspan: readme_headerspan,
      readme_toggle: readme_toggle,
      readme_loading: readme_loading,
    }
  },
  
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';
.table_markdown {
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