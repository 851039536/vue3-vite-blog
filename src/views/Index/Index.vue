<!--
 * @Author: your name
 * @Date: 2021-09-07 11:42:13
 * @LastEditTime: 2021-09-07 17:07:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\views\Index\Index.vue
-->

<template>
  <div class="index">
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="index_main">
      <div class="index_content">
        <div class="index_content_name">
          <div>
            <a>sw网站开发</a>
          </div>
        </div>
        <div class="index_content_type">
          <div>TE</div>
          <div>2021-09-07</div>
          <div>文档</div>
          <div>测试</div>
        </div>
      </div>

      <div class="index_content">
        <div class="index_content_name">
          <div>
            <a>sw网站开发</a>
          </div>
        </div>
        <div class="index_content_type">
          <div>TE</div>
          <div>2021-09-07</div>
          <div>文档</div>
          <div>测试</div>
        </div>
      </div>

      <div class="index_content">
        <div class="index_content_name">
          <div>
            <a>sw网站开发</a>
          </div>
        </div>
        <div class="index_content_type">
          <div>TE</div>
          <div>2021-09-07</div>
          <div>文档</div>
          <div>测试</div>
        </div>
      </div>

      <div class="index_content">
        <div class="index_content_name">
          <div>
            <a>sw网站开发</a>
          </div>
        </div>
        <div class="index_content_type">
          <div>TE</div>
          <div>2021-09-07</div>
          <div>文档</div>
          <div>测试</div>
        </div>
      </div>

      <div class="index_content">
        <div class="index_content_name">
          <div>
            <a>sw网站开发</a>
          </div>
        </div>
        <div class="index_content_type">
          <div>TE</div>
          <div>2021-09-07</div>
          <div>文档</div>
          <div>测试</div>
        </div>
      </div>

      <div class="index_content">
        <div class="index_content_name">
          <div>
            <a>sw网站开发</a>
          </div>
        </div>
        <div class="index_content_type">
          <div>TE</div>
          <div>2021-09-07</div>
          <div>文档</div>
          <div>测试</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from "../../components/Header.vue";
import Sidebar from "../../components/Sidebar.vue";
</script>

<style lang="scss" scoped>
@import "../../assets/sass/com";
@import "../../assets/sass/uitl";
.index {
  @apply fixed bg-gray-100 overflow-auto;
  @include w-h(78%, 100%);
  top: 7.5%;
  left: 1%;
  .index_main {
    @apply container mx-auto;
    .index_content {
      @include w-h(95%, 130px);
      @apply shadow m-auto mt-2 cursor-pointer bg-white rounded;

      .index_content_name {
        @apply text-2xl;
        height: 40%;

        div {
          line-height: 45px;
          @apply m-1 p-1;
        }
      }
      .index_content_type {
        @apply flex;
        height: 60%;
        div {
          line-height: 90px;
          @apply m-1 p-1;
        }
      }
    }
  }
}
</style>
