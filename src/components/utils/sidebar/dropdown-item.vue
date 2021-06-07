<template>
  <div :class="$style.wrapper" :id="'dropdown-item_' + _uid.toString()"
    :style="{
      width: width.toString() + 'px',
      'border-top': level_first ? '1px #d3d3d3 solid':'',
      'border-bottom': level_last ? '1px #d3d3d3 solid':'',
    }">
    <div
      :class="$style.baseBtn"
      @click="operateItem"
      :style="[itemStyle, {height: height.toString() + 'px', 'font-weight':active?'bold':''}]">
      <span :class="[$style.baseBtn_icon, icon.class]" v-if="Object.keys(icon).length">{{icon.label}}</span>
      <div :class="$style.baseBtn_label"><span style="position:relative;top:12px">{{label}}</span></div>
      <!--expand icon-->
      <div v-if="if_expand" :class="$style.baseBtn_dropicon"><span class="fas fa-caret-down" style="position:relative; top:10px"></span></div>
      <div v-else :class="$style.baseBtn_dropicon"><span class="fas fa-caret-right" style="position:relative; top:10px"></span></div>
    </div>
    <div
      :class="$style.expandArea" :id="'expandArea_' + _uid.toString()"
      :style="[{width: width}, itemStyle]">
      <div 
        :class="$style.expandBtn"
        v-for="(expandElement, exp_index) in expandList"
        :key="exp_index">
        <sidebar-item :root="expandElement" :childOfDrop="true"></sidebar-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown-item',
  components: {
    sidebarItem: ()=>import('./sidebar-item')
  },
  props: {
    activePath: {
      type: String,
      require: false,
      default() {
        return ''
      }
    },
    expandList: {
      type: Array,
      require: false,
      default() {
        return []
      }
    },
    label: {
      type: String,
      require: true,
    },
    theme: {
      type: String,
      require: false,
      default() {
        return 'light'
      }
    },
    icon: {
      type: Object,
      require: false,
      default() {
        return {}
      }
    },
    itemStyle: {
      type: Object,
      require: false,
      default() {
        return {}
      }
    },
    width: {
      type: Number,
      require: false,
      default() {
        return 220
      }
    },
    level_last: {
      type: Boolean,
      require: false,
      default() {
        return false
      }
    },
    level_first: {
      type: Boolean,
      require: false,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      active: false,
      if_expand: false,
      num_of_items: 0,
      height: 50,
      maxHeight: 1,
    }
  },
  created() {
    this.num_of_items = this.expandList.length
    if (this.itemStyle.width && typeof(this.itemStyle.width) === 'number') this.width = this.itemStyle.width
    if (this.itemStyle.height && typeof(this.itemStyle.height) === 'number') this.height = this.itemStyle.height
    this.maxHeight = this.calMaxHeight(this.expandList)
  },
  mounted() {
    this.activeCheck()
  },
  methods: {
    operateItem() {
      if (this.if_expand) this.closeItem()
      else this.expandItem()
    },
    expandItem() {
      const DOM = document.getElementById('expandArea_' + this._uid.toString())
      this.if_expand = true
      DOM.style.maxHeight = (this.maxHeight*this.height).toString() + 'px'
    },
    closeItem() {
      const DOM = document.getElementById('expandArea_' + this._uid.toString())
      this.if_expand = false
      DOM.style.maxHeight = '0px'
    },
    activeCheck() {
      if (this.activePath === '') return
      const path = window.location.pathname
      const urlPattern = new RegExp(this.activePath)
      this.active = urlPattern.test(path)
    },
    calMaxHeight(expandList) {
      let current_height = 1
      for (let i=0; i<expandList.length; i++) {
        if (expandList[i].type === 'dropdown') {
          current_height += this.calMaxHeight(expandList[i].children)
        }
        else current_height++
      }
      return current_height
    }
  },
  watch: {
    '$route'() {
      this.activeCheck()
    },
    expandList() {
      this.num_of_items = this.expandList.length
    }
  }
}
</script>

<style lang="scss" module>
@import '../common/general.scss';
@import './sidebar-style.scss';
.wrapper {
  @include block(100%);
  cursor: pointer;
  border-right: 1px #d3d3d3 solid;
  border-left: 1px #d3d3d3 solid;
  // expand item
  .baseBtn {
    @include block(100%, $sidebar-item-height);
    display: flex;
    font-size: 16px;
    color: var(--sidebar-text-color);
    font-weight: var(--sidebar-text-weight);
    background-color: var(--sidebar-bg-color);
    .baseBtn_icon {
      @include block(20%);
      text-align: center;
      padding-top:15px;
      margin-left:4px;
    }
    .baseBtn_label {
      @include block(70%);
      padding-left:5px;
    }
    .baseBtn_dropicon {
      @include block(10%);
      text-align: center;
      font-size:18px;
    }
  }
  .baseBtn:hover {
    background-color: var(--sidebar-bg-color-hover);
    color: var(--sidebar-text-color-hover);
  }
  // single item
  .expandArea {
    @include block(100%);
    overflow: hidden;
    max-height: 0px;
    transition: max-height 0.1s linear;
    background-color: var(--sidebar-dropdown-bg-color);
    .expandBtn {
      display: flex;
    }
  }
}
</style>