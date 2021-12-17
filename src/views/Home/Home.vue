<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const skip = async () => {
  router.push('/index/indexColumn')
}

onMounted(async () => {})
</script>

<template>
  <div id="blogHome" class="animate__animated animate__fadeIn">
    <div class="home_main">
      <div class="centeredPrompt">
        <div class="centeredPrompt__item centeredPromptIcon">
          <div class="icon fa fa-smile-o"></div>
        </div>
        <div class="centeredPrompt__item centeredPromptLabel">SW内网</div>
        <div class="centeredPrompt__item centeredPromptDetails">技术文档、接口文档 、开发流程汇总。</div>
        <div class="centeredPrompt__item button">
          <a class="btn btn-link" @click="skip">Go</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#blogHome {
  @apply fixed;

  @include w-h;

  @apply bg-white;

  .home_main {
    @apply absolute m-auto top-0 left-0 bottom-0 right-0;

    @include w-h(95%, 90%);

    @apply shadow-2xl rounded;

    .centeredPrompt {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 500px;
      padding: 10px;
    }

    .centeredPrompt__item + .centeredPrompt__item {
      margin-top: 5px;
    }

    .centeredPromptIcon {
      font-size: 60px;
      line-height: 0;
    }

    .centeredPromptLabel {
      color: #86969c;
      font-weight: 700;
      font-size: 30px;
      text-align: center;
    }
    .centeredPromptDetails {
      margin-bottom: 10px;
      color: #86969c;
      font-size: 16px;
      text-align: center;
    }

    .icon {
      color: #bcd2da;
    }
  }
}
</style>
