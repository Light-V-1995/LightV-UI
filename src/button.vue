<template>
  <button class="l-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <l-icon class="icon" v-if="icon && !loading" :name="icon"></l-icon>
    <l-icon class="loading icon" v-if="loading" name="loading"></l-icon>
    <div class="l-button-content">
      <slot></slot>
    </div>

  </button>

</template>

<script>
import Icon from "./icon";

export default {
  name: 'L-Button',
  // props: ['icon', 'iconPosition']
  components: {
    'l-icon': Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    },
  }
}

</script>

<style lang="scss" scoped>

@import "var";

@keyframes spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.l-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:after {
    content: '';
    color: red;
    display: none;
  }

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    border-color: $border-color;
  }

  &:focus {
    outline: none;
  }

  > .l-button-content {
    line-height: 1em;
    order: 2;
  }

  > .icon {
    margin-right: .1em;
    order: 1;
  }

  .loading {
    animation: spin 1s infinite linear;
  }


  &.icon-right {
    > .icon {
      margin-right: 0;
      margin-left: .1em;
      order: 2;
    }

    > .l-button-content {
      line-height: 1em;
      order: 1;
    }
  }
}

</style>