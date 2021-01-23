<template>
  <div :class="$style.singleSelect" :style="{width:width}">
    <div :class="$style.inputArea" @mouseover="showRemoveIcon = true"
        @mouseleave="showRemoveIcon = false">
      <input
        readonly
        :class="$style.inputText"
        :placeholder="placeholder"
        :value="value"
        :style="{width: width}"
        @input="$emit('input', $event.target.value)"
        @mouseover="showRemoveIcon = true"
        :id="'inputArea_' + _uid.toString()" />
      <div
        :class="$style.removeIcon"
        :id="'removeIcon_' + _uid.toString()"
        v-if="showRemoveIcon"
        @mouseover="showRemoveIcon = true">
        <span class="fas fa-times-circle" @click="removeFunction" style="position:relative;top:4px;right:3px"></span>
      </div>
    </div>
    <div :class="$style.optionsArea" :id="'optionsArea_' + _uid.toString()" :style="{width:width}">
      <div :class="$style.option" v-for="(option,o_index) in options" :key="o_index" @click="selectFunction(option)">
        <span :class="$style.optionText" v-if="option && option.disabled" style="color: #828282;cursor:default">{{option.label ? option.label:option}}</span>
        <span :class="$style.optionText" v-else>{{option.label ? option.label:option}}</span>
      </div>
      <div :class="$style.noOptions" v-if="options.length === 0">
        <slot name="empty">
          <div :class="$style.noDataIcon">
            <span class="fas fa-folder-open"></span>
          </div>
          <span :class="$style.noDataText">No Data</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      require: true,
      default() {
        return []
      }
    },
    value: {
      type: String,
      require: true,
      default() {
        return ''
      }
    },
    width: {
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
        return ''
      }
    }
  },
  data() {
    return {
      showRemoveIcon: false
    }
  },
  mounted() {
    var self = this
    // var DOM = document.getElementById('inputArea_' + this._uid.toString())
    this.clickEvent = function(evt) {
      const clickTarget = evt.target
      if (clickTarget.id === 'inputArea_' + self._uid.toString()) {
        self.openOptionsArea()
      }
      else self.closeOptionsArea()
    }
    document.addEventListener('click', this.clickEvent)
  },
  methods: {
    openOptionsArea() {
      var DOM = document.getElementById('optionsArea_' + this._uid.toString())
      DOM.style.display = 'block'
      DOM.style.maxHeight = '200px'
    },
    closeOptionsArea() {
      var DOM = document.getElementById('optionsArea_' + this._uid.toString())
      DOM.style.display = 'none'
      DOM.style.maxHeight = '0px'
    },
    selectFunction(option) {
      if (option && option.disabled) return
      this.$emit('input', option)
    },
    removeFunction() {
      this.$emit('input', '')
    }
  },
  destroyed() {
    document.removeEventListener('click', this.clickEvent)
  }
}
</script>

<style lang="scss" module>
@import '@/style/general.module.scss';
.singleSelect {
  .inputArea {
    display: flex;
    cursor: pointer;
    .inputText {
      @include block(100%, 30px, $radius: 3px);
      outline: none;
      border: 1px solid #a7a7a7;
      text-align: center;
      font-size: 17px;
      cursor: pointer;
    }
    .inputText:focus-within {
      border: 1px solid #6294f1;
      box-shadow: 0px 0px 5px #739ce9;
    }
    .removeIcon {
      @include block(8%, 30px);
      margin-left:-8%;
      cursor: pointer;
    }
  }
  .optionsArea {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: max-height 0.2s linear;
    box-shadow: 0px 0px 5px rgb(194, 194, 194);
    overflow-y: auto;
    display: none;
    font-family: Microsoft JhengHei;
    position: absolute;
    background-color: #fff;
    z-index: 1;
    .option {
      @include block(100%, 30px);
      display: flex;
      cursor: pointer;
      .optionText {
        @include block(90%);
        padding-left:10px;
        font-size:16px;
      }
    }
    .option:hover {
      background-color: #eaf4ff;
    }
    .noOptions {
      @include block(100%);
      overflow: hidden;
      padding: 5px 0px;
      .noDataIcon {
        font-size:30px;
        color: rgb(148, 148, 148);
      }
      .noDataText {
        padding-left:10px;
        font-size:16px;
        color: rgb(148, 148, 148);
      }
    }
  }
}

</style>