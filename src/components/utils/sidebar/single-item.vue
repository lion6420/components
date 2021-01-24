<template>
  <div :class="$style.wrapper" :id="'single-item_' + _uid.toString()" :style="activeStyle">
    <router-link :to="link" :class="$style.btn"
      :style="[itemStyle, {width: width.toString() + 'px', height: height.toString() + 'px', color: activeTextColor}]">
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
      activeStyle: {},
      activeTextColor: 'rgb(114, 114, 114)'
    }
  },
  created() {
    if (this.itemStyle.width && typeof(this.itemStyle.width) === 'number') this.width = this.itemStyle.width
    if (this.itemStyle.height && typeof(this.itemStyle.height) === 'number') this.height = this.itemStyle.height
    this.activeCheck()
  },
  methods: {
    activeCheck() {
      const path = window.location.pathname
      if (path === this.link) {
        this.activeStyle = {
          'border-right': '3px #1462D1 solid',
          'background-color': '#DFECFF'
        }
        this.activeTextColor = '#1462D1'
      }
      else {
        this.activeStyle = {}
        this.activeTextColor = 'rgb(114, 114, 114)'
      }
    },
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
    },
    "$route.path": function() {
      this.activeCheck()
    }
  }
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';
.wrapper {
  overflow: hidden;
  .btn {
    display: inline-block;
    font-size: 18px;
    color: rgb(114, 114, 114);
    text-decoration: none;
    cursor: pointer;
    margin-left:20px;
    .baseBtn_icon {
      position:relative;
      left:-12px;
      top: 12px;
    }
    .btn_label {
      width:100%;
      position: relative;
      top: 12px;
    }
  }
  .btn:hover {
    color: #9DC6FE;
  }
}
</style>