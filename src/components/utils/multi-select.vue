<template>
  <div
    :id="_uid + 'selectComponent'"
    :class="$style.wrapper"
    :style="{width:selectWidth}"
    :selectedOptions="selectedOptions">
    <div :class="$style.inputArea">
      <div
        :class="$style.selectedArea"
        @mouseover="showRemoveIcon('textArea')"
        @mouseleave="hideRemoveIcon('textArea')">
        <div
          :id="_uid + 'selectedContainer'"
          :class="$style.selected"
          v-for="(selectedKey,selected_index) in Object.keys(selectedOptions).slice(0, 1)"
          :key="selected_index"
          @mouseover="selectedHover">
          <span :class="$style.selected_text">
            {{
              selectedOptions[selectedKey].label ? 
              selectedOptions[selectedKey].label : selectedOptions[selectedKey]
            }}
          </span>
          <span
            :id="_uid + 'selectedTextHover'"
            :class="$style.selected_text_hover">
            {{
              selectedOptions[selectedKey].label ? 
              selectedOptions[selectedKey].label : selectedOptions[selectedKey]
            }}
          </span>
          <span
            :class="$style.selected_remove"
            class="fas fa-times"
            @click="removeOne(selectedOptions[selectedKey])">
          </span>
        </div>
        <div
          :class="$style.selected"
          v-if="Object.keys(selectedOptions).length>1">
          <span :class="$style.selected_text">{{'+' + (Object.keys(selectedOptions).length-1).toString() + '...'}}</span>
          <span
            :class="$style.selected_remove"
            class="fas fa-times"
            @click="removeLast()">
          </span>
        </div>
      </div>
      <input
        :id="_uid + '_textArea'"
        :class="$style.textArea"
        :placeholder="Object.keys(selectedOptions).length>0?'':placeholder"
        @click="openDropdown"
        @mouseover="showRemoveIcon('textArea')"
        @mouseleave="hideRemoveIcon('textArea')"
        v-model="inputText"/>
      <span
        :class="$style.removeIcon"
        :id="_uid + '_removeIcon'"
        class="fas fa-times-circle"
        style="display:none"
        @click="removeAll"
        @mouseover="showRemoveIcon('removeIcon')"
        @mouseleave="hideRemoveIcon('removeIcon')">
      </span>
    </div>
    <div :class="$style.dropdown"
      :id="_uid + '_dropdown'"
      :style="{
        width:selectWidth
      }">
      <div
        :id="_uid + '_option_' + o_index.toString()"
        v-for="(option,o_index) in options_show"
        :key="o_index"
        :class="$style.option"
        @click="selectFunction(option)">
        <div
          :id="_uid + '_optionText_' + o_index.toString()"
          :class="$style.optionText">
          <span style="position:relative;top:3px">{{option.label ? option.label:option}}</span>
        </div>
        <div :class="$style.optionCheck">
          <span
            :id="_uid + '_checkIcon_' + o_index.toString()"
            class="material-icons"
            style="position:relative;top:3px;color: #3A72FF"
            v-if="showCheckIcon(option) === true">done
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedOptions: {
      type: Object,
      require: true,
      default() {
        return {}
      }
    },
    options: {
      type: Array,
      require: true,
      default() {
        return []
      }
    },
    selectWidth: {
      type: String,
      require: false,
      default() {
        return '200px'
      }
    },
    placeholder: {
      type: String,
      require: false,
      default() {
        return '請選擇'
      }
    }
  },
  model: {
    prop: 'selectedOptions',
    event: 'selectedChange',
  },
  data() {
    return {
      inputText: '',
      options_show: [],
      if_dropdown: false,
      clickEvent: null,
    }
  },
  mounted() {
    var self = this
    this.filterOptions()
    var DOM = document.getElementById(this._uid + '_textArea')
    DOM.addEventListener('keydown', function(evt) {
      if (self.selectedOptions.numOfSelected === 0) return
      if (evt.key === 'Backspace') {
        if (self.inputText !== '') return
        self.removeLast()
      }
    })
    this.clickEvent = function(evt) {
      const clickTarget = evt.target
      const selectDOM = document.getElementById(self._uid + 'selectComponent')
      if (selectDOM.contains(clickTarget) || clickTarget.id.split('_')[1] === 'checkIcon') {
        self.openDropdown()      
      }
      else self.closeDropdown()
    }
    document.addEventListener('click', this.clickEvent)
  },

  methods: {
    //-----------Visual control------------
    openDropdown() {
      var DOM = document.getElementById(this._uid + '_dropdown')
      this.if_dropdown = true
      DOM.style.display = 'block'
      DOM.style.maxHeight = '200px'
    },
    closeDropdown() {
      var DOM = document.getElementById(this._uid + '_dropdown')
      this.if_dropdown = false
      DOM.style.display = 'none'
      DOM.style.maxHeight = '0px'
    },

    showRemoveIcon(id) {
      document.getElementById(this._uid + '_removeIcon').style.display = 'block'
      if (id === 'removeIcon') document.getElementById(this._uid + '_removeIcon').style.color = '#9B9B9B'
      else document.getElementById(this._uid + '_removeIcon').style.color = '#C6C6C6'
    },
    hideRemoveIcon() {
      document.getElementById(this._uid + '_removeIcon').style.display = 'none'
    },

    showCheckIcon(option) {
      if (this.selectedOptions[option.prop ? option.prop:option]) return true
      return false
    },

    selectedHover() {
      const position = document.getElementById(this._uid + 'selectedContainer').getBoundingClientRect()
      document.getElementById(this._uid + 'selectedTextHover').style.top = (position.y-25).toString() + 'px'
    },
    //----------------------------------
    
    //-----------data control-----------
    selectFunction(option) {
      const key = option.prop ? option.prop:option
      if (this.selectedOptions[key] !== undefined) { //if already selected
        this.removeOne(option)
      }
      else {
        this.selectedOptions[key] = option

        const selectedOptions_parent = JSON.parse(JSON.stringify(this.selectedOptions))
        this.$emit('selectedChange', selectedOptions_parent)
      }
    },
    removeOne(option) {
      const key = option.prop ? option.prop:option

      delete this.selectedOptions[key]
      
      const selectedOptions_parent = JSON.parse(JSON.stringify(this.selectedOptions))
      this.$emit('selectedChange', selectedOptions_parent)
    },
    removeLast() {
      const key =  Object.keys(this.selectedOptions)[Object.keys(this.selectedOptions).length-1]
      delete this.selectedOptions[key]

      const selectedOptions_parent = JSON.parse(JSON.stringify(this.selectedOptions))
      this.$emit('selectedChange', selectedOptions_parent)
    },
    removeAll() {
      this.$emit('selectedChange', {})
    },
    filterOptions() {
      if (this.inputText === '') this.options_show = this.options
      const optionRegExp = new RegExp(`${this.inputText}`)
      var filteredArray = []
      for (let i=0; i<this.options.length; i++) {
        if (optionRegExp.test(this.options[i])) filteredArray.push(this.options[i])
      }
      this.options_show = filteredArray
    }
  },
  watch: {
    inputText() {
      this.filterOptions()
    },
  },
  beforeDestroy() {
    document.removeEventListener('click', this.clickEvent)
  }
}
</script>

<style lang="scss" module>
@import '@/style/general.module.scss';
.wrapper {
  @include block(100%);
  .inputArea {
    @include block(100%, $height: 32px);
    @include border();
    border-radius: 3px;
    display: flex;
    min-width: 200px;
    .selectedArea {
      display: flex;
      max-width: 75%;
      .selected {
        @include block($height: 26px);
        @include border();
        border-radius: 3px;
        margin:auto 1px;
        background-color: #f7f7f7;
        display: flex;
        .selected_text {
          width: 50px;
          position:relative;
          overflow : hidden;
          text-overflow: ellipsis;
          left:3px;
          top:1px;
          padding-right:5px;
        }
        .selected_remove {
          @include block(20px);
          position:relative;
          right:-2px;
          top:5px;
          color: rgb(173, 173, 173);
          cursor: pointer;
        }
        .selected_remove:hover {
          color: rgb(143, 143, 143);
        }
      }
      .selected:hover .selected_text_hover {
        opacity: 1;
      }
      .selected_text_hover {
        opacity: 0;
        transition: opacity 0.1s linear;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 1px 5px;
        border-radius: 6px;
      
        /* Position the tooltip text - see examples below! */
        position: fixed;
        z-index: 2;
      }
    }
    .textArea {
      @include block(100%);
      border: none;
      padding: 0px 5px;
      font-size: 16px;
      font-family: Microsoft JhengHei;
      outline: none;
      overflow: hidden;
      display: flex;
    }
    .removeIcon {
      position: relative;
      top: 7px;
      right:20px;
      width: 0px;
      cursor: pointer;
      z-index: 1;
    }
  }
  .inputArea:focus-within {
    border: 1px solid #6294f1;
    box-shadow: 0px 0px 5px #739ce9;
  }
  .dropdown {
    transition: max-height 0.2s linear;
    box-shadow: 0px 0px 5px rgb(194, 194, 194);
    overflow-y: scroll;
    display: none;
    font-family: Microsoft JhengHei;
    position: absolute;
    background-color: #fff;
    z-index: 3;
    .option {
      @include block(100%, 30px);
      display: flex;
      cursor: pointer;
      .optionText {
        @include block(90%);
        padding-left:10px;
        font-size:16px;
      }
      .optionCheck {
        font-size:10px;
      }
      .optionCheck:hover {
        color: rgb(59, 59, 59);
      }
    }
    .option:hover {
      background-color: #eaf4ff;
    }
  }
}

</style>