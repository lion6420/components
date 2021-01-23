<template>
  <div :class="$style.wrapper" :id="'single-item_' + _uid.toString()">
    <router-link :to="link" :class="$style.btn"
      :style="[itemStyle, {width: width.toString() + 'px', height: height.toString() + 'px'}]"
       active-class="sidebar-active">
      <span :class="[$style.baseBtn_icon, icon.class]">{{icon.label}}</span>
      <span :class="$style.btn_label">{{label}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
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
    link: {
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
        return false
      }
    }
  },
  data() {
    return {
      width: 160,
      height: 50,
    }
  },
  created() {
    if (this.itemStyle.width && typeof(this.itemStyle.width) === 'number') this.width = this.itemStyle.width
    if (this.itemStyle.height && typeof(this.itemStyle.height) === 'number') this.height = this.itemStyle.height
  },
  watch: {
    showSidebar() {
      let DOM = document.getElementById('single-item_' + this._uid.toString())
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
  .btn {
    display: inline-block;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: $sidebar-background-color;
    cursor: pointer;
    .baseBtn_icon {
      position:relative;
      left:-12px;
      top: 12px;
    }
    .btn_label {
      width:100%;
      color: #fff;
      position: relative;
      top: 10px;
    }
  }
  .btn:hover {
    background-color: $sidebar-background-color-hover;
  }
}
</style>