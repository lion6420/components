<template>
  <div :class="$style.sidebar" :style="{width: width}" :id="'sidebar_' + _uid.toString()">
    <div v-for="(item, i_index) in menu" :key="i_index" :style="{'margin-top' : i_index === 0 ? '60px': '0px'}">
      <sidebar-item :root="item" :showSidebar="showSidebar"></sidebar-item>
    </div>
  </div>
</template>

<script>
import sidebarItem from './sidebar-item'
export default {
  props: {
    width: {
      type: String,
      require: false,
      default() {
        return '160px'
      }
    },
    menu: {
      type: Array,
      require: true,
      default() {
        return []
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
  components: {
    sidebarItem,
  },
  data() {
    return {
    }
  },
  watch: {
    showSidebar() {
      let DOM = document.getElementById('sidebar_' + this._uid.toString())
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
.sidebar {
  @include block(100%, $background-color: $sidebar-background-color);
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 3;
  transition: max-width 0.3s linear;
}
@media screen and (max-width: 700px) {
  .sidebar {
    @include block(100%, $background-color: $sidebar-background-color);
    max-width: 0px;
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 3;
  }
}
</style>