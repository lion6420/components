<template>
  <div :class="$style.wrapper" :id="'level-item_' + _uid.toString()"
    :style="{
      width: width.toString() + 'px',
      'border-top': level_first ? '1px #d3d3d3 solid':'',
      'border-bottom': level_last ? '1px #d3d3d3 solid':'',
    }">
    <div :class="$style.baseBtn" :style="itemStyle" :id="'baseBtn_' + _uid.toString()"
      @mouseover="expandNextLevel" @mouseleave="closeNextLevel">
      <div :class="$style.activebar"></div>
      <div :class="$style.baseBtn_icon" v-if="Object.keys(icon).length"></div>
      <div :class="$style.baseBtn_label" :style="{'padding-left': Object.keys(icon).length > 0 ? '5px':'20px'}">{{label}}</div>
      <div :class="$style.baseBtn_expandIcon" class="fas fa-angle-right"></div>
    </div>
    <div :class="$style.expandArea"
      :id="'expandArea_' + _uid.toString()"
      :style="{'margin-left': (width+1).toString() + 'px', width: width.toString() + 'px'}"
       @mouseover="expandNextLevel" @mouseleave="closeNextLevel">
        <div 
          :class="$style.expandBtn"
          v-for="(expandElement, exp_index) in expandList"
          :key="exp_index">
          <sidebar-item :root="expandElement" :level_last="exp_index === expandList.length-1" :level_first="exp_index === 0"></sidebar-item>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'levelItem',
  components: {
    sidebarItem: () => import('./sidebar-item')
  },
  props: {
    activePath: {
      type: String,
      require: false,
      default() {
        return ''
      }
    },
    icon: {
      type: Object,
      require: false,
      default() {
        return {}
      }
    },
    label: {
      type: String,
      require: false,
    },
    expandList: {
      type: Array,
      require: false,
      default() {
        return []
      }
    },
    itemStyle: {
      type: Object,
      require: false,
      default() {
        return {}
      }
    },
    expandWidth: {
      type: Number,
      require: false,
      default() {
        return 220
      }
    },
    width: {
      type: Number,
      require: false,
      default() {
        return 220
      }
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
      active: false,
      height: 50,
      maxDepth: 1,
      maxHeight: 0,
    }
  },
  created() {
    this.calMaxDepth(this.expandList, 1)
    this.maxHeight = this.calMaxHeight(this.expandList, 1)
  },
  mounted() {
    this.activeCheck()
    this.check_childOfDrop()
  },
  methods: {
    expandNextLevel() {
      const DOM = document.getElementById('expandArea_' + this._uid.toString())
      DOM.style.maxHeight = (this.maxHeight*this.height+2).toString() + 'px'
      DOM.style.height = (this.maxHeight*this.height+2).toString() + 'px'
      DOM.style.maxWidth = (this.expandWidth*this.maxDepth+2*this.maxDepth).toString() + 'px'
      DOM.style.width = (this.expandWidth*this.maxDepth+2*this.maxDepth).toString() + 'px'
    },
    closeNextLevel() {
      const DOM = document.getElementById('expandArea_' + this._uid.toString())
      DOM.style.maxHeight = '0px'
      DOM.style.maxWidth = '0px'
    },

    activeCheck() {
      const path = window.location.pathname
      let htmlElement = document.getElementById('baseBtn_' + this._uid.toString())

      //handle multi-slash
      var real_path = ''
      const temp_path = this.$router.history.base + this.activePath
      for (let i=0; i<temp_path.length; i++) {
        if (i>0 && temp_path[i] == '/' && temp_path[i-1] == '/') continue
        else {
          real_path+=temp_path[i]
        }
      }
      const regex_path = new RegExp(path)
      if (regex_path.test(real_path)) {
        this.active = true
        htmlElement.setAttribute('sidebar-active', 'active')
      }
      else {
        this.active = false
        htmlElement.setAttribute('sidebar-active', 'inactive')
      }
    },
    calMaxDepth(expandList, current_depth) {
      if (current_depth > this.maxDepth) this.maxDepth = current_depth
      for (let i=0; i<expandList.length; i++) {
        if (expandList[i].type === 'level') this.calMaxDepth(expandList[i].children, current_depth+1)
      }
    },
    calMaxHeight(expandList, current_height) {
      let next_height = 0
      for (let i=0; i<expandList.length; i++) {
        if (expandList[i].type === 'dropdown') {
          current_height = current_height + this.calMaxHeight_dropdown(expandList[i].children) + 1
        }
        else if (expandList[i].type === 'level') {
          let temp = this.calMaxHeight(expandList[i].children, i)
          next_height = next_height > temp ? next_height:temp
        }
        else current_height++
      }
      return current_height > next_height? current_height:next_height
    },
    calMaxHeight_dropdown(expandList) {
      let current_height = 1
      for (let i=0; i<expandList.length; i++) {
        if (expandList[i].type === 'dropdown') {
          current_height += this.calMaxHeight_dropdown(expandList[i].children)
        }
        else current_height++
      }
      return current_height
    },

    //style
    check_childOfDrop() {
      let DOM = document.getElementById('baseBtn_' + this._uid.toString())
      if (this.childOfDrop) DOM.setAttribute('child-of-drop', 'true')
    }
  },
  watch: {
    '$route'() {
      this.checkActive()
    },
  }
}
</script>

<style lang="scss" module>
@import '../common/general.scss';
@import './sidebar-style.scss';
.wrapper {
  @include block(220px);
  display: flex;
  color: var(--sidebar-text-color);
  border-right: 1px #d3d3d3 solid;
  border-left: 1px #d3d3d3 solid;
  .activebar {
    @include block(4px, $sidebar-item-height);
    background-color: var(--sidebar-active-bar);
  }
  .activebar[child-of-drop="true"] {
    @include block(4px, $sidebar-item-height);
    background-color: var(--sidebar-bg-color);
  }
  .baseBtn {
    @include block(100%, $sidebar-item-height);
    background-color: var(--sidebar-bg-color);
    font-size: 18px;
    display: flex;
    cursor: pointer;
    overflow: hidden;
    .baseBtn_icon {
      @include block(20%);
    }
    .baseBtn_label {
      @include block(70%);
      padding-top:12px;
    }
    .baseBtn_expandIcon {
      @include block(10%);
      font-size: 18px;
      padding-top:13px;
    }
  }
  .baseBtn:hover {
    background-color: var(--sidebar-bg-color-hover);
    color: var(--sidebar-text-color-hover)
  }
  .expandArea {
    display: inline-block;
    position: absolute;
    text-align: center;
    font-size: 20px;
    overflow: hidden;
    max-height: 0px;
    max-width: 0px;
    transition: max-height 0.2s linear, max-width 0.1s linear;
    background-color: transparent;
  }
}

</style>