<template>
  <div :class="$style.wrapper" :id="'dropdown-item_' + _uid.toString()">
    <div
      :class="$style.baseBtn"
      @click="operateItem"
      :style="[itemStyle, {width: width.toString() + 'px', height: height.toString() + 'px', color: active?'yellow':'#fff'}]">
      <span :class="[$style.baseBtn_icon, icon.class]">{{icon.label}}</span>
      <span :class="$style.baseBtn_label">{{label}}</span>
      <span v-if="if_expand" class="fas fa-caret-down" :class="$style.baseBtn_dropicon"></span>
      <span v-else class="fas fa-caret-right" :class="$style.baseBtn_dropicon"></span>
    </div>
    <div
      :class="$style.expandArea" :id="'expandArea_' + _uid.toString()"
      :style="[itemStyle, {width: width.toString() + 'px'}]">
      <slot>
        <div 
          :class="$style.expandBtn"
          v-for="(expandElement, exp_index) in expandList"
          :key="exp_index">{{expandElement}}
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
    activePath: {
      type: String,
      require: false,
      default() {
        return ''
      }
    },
    showSidebar: {
      type: Boolean,
      require: false,
      default() {
        false
      }
    }
  },
  data() {
    return {
      active: false,
      if_expand: false,
      num_of_items: 0,
      width: 160,
      height: 50,
    }
  },
  created() {
    this.num_of_items = this.expandList.length
    if (this.itemStyle.width && typeof(this.itemStyle.width) === 'number') this.width = this.itemStyle.width
    if (this.itemStyle.height && typeof(this.itemStyle.height) === 'number') this.height = this.itemStyle.height
  },
  mounted() {
    this.testActive()
  },
  methods: {
    operateItem() {
      if (this.if_expand) this.closeItem()
      else this.expandItem()
    },
    expandItem() {
      const DOM = document.getElementById('expandArea_' + this._uid.toString())
      this.if_expand = true
      DOM.style.maxHeight = (this.num_of_items*50).toString() + 'px'
    },
    closeItem() {
      const DOM = document.getElementById('expandArea_' + this._uid.toString())
      this.if_expand = false
      DOM.style.maxHeight = '0px'
    },
    testActive() {
      if (this.activePath === '') return
      const path = window.location.pathname
      const urlPattern = new RegExp(this.activePath)
      this.active = urlPattern.test(path)
    }
  },
  watch: {
    '$route'() {
      this.testActive()
      this.num_of_items = this.expandList.length
    },
    showSidebar() {
      let DOM = document.getElementById('dropdown-item_' + this._uid.toString())
      if (this.showSidebar) {
        DOM.style.maxWidth = '100%'
      }
      else {
        DOM.style.maxWidth = '0px'
      }
    }
  }
}
</script>

<style lang="scss" module>
@import '@/style/general.module.scss';
.wrapper {
  overflow: hidden;
  .baseBtn {
    @include block(170px, 50px);
    color: #fff;
    background-color: $sidebar-background-color;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    .baseBtn_icon {
      position:relative;
      left:-12px;
      top: 12px;
    }
    .baseBtn_label {
      position: relative;
      top:10px;
      left: 1px;
    }
    .baseBtn_dropicon {
      position:relative;
      left:10px;
      top: 8px;
      font-size:15px;
    }
  }
  .baseBtn:hover {
    background-color: $sidebar-background-color-light;
  }
  .expandArea {
    @include block(170px);
    overflow: hidden;
    max-height: 0px;
    transition: max-height 0.1s linear;
    .expandBtn {
      @include block(170px, 50px);
      @include border();
      font-size: 20px;
      text-align: center;
      cursor: pointer;
    }
    .expandBtn:hover {
      background-color: $sidebar-background-color-hover;
    }
  }
}

</style>