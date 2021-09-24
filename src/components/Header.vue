<!--
 * @Author: your name
 * @Date: 2021-09-07 14:54:28
 * @LastEditTime: 2021-09-24 10:29:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vite-blog\src\components\Header.vue
-->
<template>
  <div class="header">
    <div class="header_name">
      <div>工程</div>
      <div>首页</div>
      <div>归类</div>
      <div>技术</div>
      <div>接口</div>
      <div>关于</div>
    </div>

    <div class="header_input">
      <div>SW内网</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../design/com.scss';
@import '../design/uitl.scss';
.header {
  @apply flex fixed top-0 left-0 z-10 shadow;
  @include w-h(100%, 7%);
  .header_name {
    @apply flex items-center m-1 cursor-pointer;
    width: 65%;
    div {
      @apply m-1 p-1 ml-3;
    }
  }

  .header_input {
    @apply flex flex-row-reverse items-center m-1 cursor-pointer;
    width: 35%;
    div {
      @apply m-1 p-1 ml-3;
    }
  }
}
</style>
