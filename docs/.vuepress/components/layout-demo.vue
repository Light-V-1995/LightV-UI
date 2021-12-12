<template>
  <div class="wrapper">
    <l-layout>
      <l-header> header</l-header>
      <l-layout>
        <l-sider> sider</l-sider>
        <l-content> content</l-content>
      </l-layout>
      <l-footer> footer</l-footer>
    </l-layout>
    <br>
    <l-layout>
      <l-header> header</l-header>
      <l-content> content</l-content>
      <l-footer> footer</l-footer>
    </l-layout>
    <br>
    <l-layout>
      <l-header> header</l-header>
      <l-layout>
        <l-sider> sider</l-sider>
        <l-layout>
          <l-content> content</l-content>
          <l-footer> footer</l-footer>
        </l-layout>
      </l-layout>
    </l-layout>
  </div>
</template>

<script>
import Layout from '../../../src/Layout'
import Header from '../../../src/header'
import Sider from '../../../src/Sider'
import Content from '../../../src/Content'
import Footer from '../../../src/Footer'

export default {
  components: {
    'l-layout': Layout,
    'l-header': Header,
    'l-sider': Sider,
    'l-content': Content,
    'l-footer': Footer
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/helper";

.wrapper {
  > .layout {
    height: 30vh;

    > .header {
      height: 3em;
      background: $background;
    }

    > .content {
      background: lighten($background, 40%);
    }

    > .layout {
      height: 6em;

      > .sider {
        width: 3em;
        background: lighten($background, 15%);
      }

      > .content {
        background: lighten($background, 40%);
      }

      > .layout {
        > .content {
          background: lighten($background, 40%);
        }

        > .footer {
          background: $background;
        }
      }
    }

    > .footer {
      background: $background;
    }
  }
}
</style>