<template>
  <div :class="$style.single_wrapper" :id="'single-item_' + _uid.toString()"
    :style="{
      width: width.toString() + 'px',
      'border-top': level_first ? '1px #d3d3d3 solid':'',
      'border-bottom': level_last ? '1px #d3d3d3 solid':'',
    }">
    <div :class="$style.activebar"></div>
    <router-link :to="link" :class="$style.btn" :id="'item-btn_' + _uid.toString()"
      :style="[itemStyle]">
      <div :class="[$style.baseBtn_icon, icon.class]" v-if="Object.keys(icon).length">{{icon.label}}</div>
      <div :class="$style.btn_label" :style="{'padding-left': Object.keys(icon).length > 0 ? '5px':'20px'}"><span style="position:relative; top:12px">{{label}}</span></div>
      <div style="width: 10%"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'single-item',
  props: {
    width: {
      type: Number,
      require: false,
      default() {
        return 220
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
    link: {
      type: String,
      require: false,
      default() {
        return ''
      }
    },
    theme: {
      type: String,
      require: false,
    },
    childOfDrop: {
      type: Boolean,
      require: false,
      default() {
        return false
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
    }
  },
  created() {
  },
  mounted() {
    this.activeCheck()
    this.check_childOfDrop()
  },
  methods: {
    activeCheck() {
      const path = window.location.pathname
      let htmlElement = document.getElementById('single-item_' + this._uid.toString())

      //handle multi-slash
      var real_path = ''
      const temp_path = this.$router.history.base + this.link
      for (let i=0; i<temp_path.length; i++) {
        if (i>0 && temp_path[i] == '/' && temp_path[i-1] == '/') continue
        else {
          real_path+=temp_path[i]
        }
      }
      const regex_path = new RegExp(path)
      if (regex_path.test(real_path)) {
        htmlElement.setAttribute('sidebar-active', 'active')
      }
      else {
        htmlElement.setAttribute('sidebar-active', 'inactive')
      }
    },

    //style
    check_childOfDrop() {
      let DOM = document.getElementById('single-item_' + this._uid.toString())
      if (this.childOfDrop) DOM.setAttribute('child-of-drop', 'true')
    }
  },
  watch: {
    "$route.path": function() {
      this.activeCheck()
    }
  }
}
</script>

<style lang="scss" module>
@import '../common/general.scss';
@import './sidebar-style.scss';
.single_wrapper {
  @include block(220px, $sidebar-item-height);
  display: flex;
  background-color: var(--sidebar-bg-color);
  cursor: pointer;
  border-right: 1px #d3d3d3 solid;
  border-left: 1px #d3d3d3 solid;
  .activebar {
    @include block(4px, $sidebar-item-height);
    background-color: var(--sidebar-active-bar);
  }
  .btn {
    @include block(100%);
    display: flex;
    font-size: 18px;
    text-decoration: none;
    color: var(--sidebar-text-color);
    font-weight: var(--sidebar-text-weight);
    .baseBtn_icon {
      @include block(20%);
      position:relative;
      text-align: center;
      padding-top:15px;
    }
    .btn_label {
      @include block(70%);
      padding-left:5px;
    }
  }
}
.single_wrapper:hover {
  background-color: var(--sidebar-bg-color-hover);
  .btn {
    color: var(--sidebar-text-color-hover);
  }
}
</style>