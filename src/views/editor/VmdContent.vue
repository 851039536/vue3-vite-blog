<script lang="ts" setup>
import { article } from '@/api/index'
import { getCurrentInstance } from 'vue'
// 获取原型
const { proxy }: any = getCurrentInstance()
const route = useRoute()

const state: any = reactive({
  content: '',
  title: '',
  id: route.query.id,
  titles: []
})

const preview: any = ref()
function handleAnchorClick(anchor: any) {
  const { lineIndex } = anchor
  const heading = preview.value.$el.querySelector(`[data-v-md-line="${lineIndex}"]`)
  if (heading) {
    preview.value.scrollToTarget({
      target: heading,
      scrollContainer: window,
      top: 60
    })
  }
}

onMounted(async () => {
  article.GetByIdAsync(state.id).then((res: any) => {
    state.content = res.data.data.content
    state.title = res.data.data.title
  })

  const anchors = proxy.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')
  console.log('%c [ anchors ]-35', 'font-size:13px; background:pink; color:#bf2c9f;', anchors)
  const titles = Array.from(anchors).filter((title: any) => !!title.innerText.trim())
  if (!titles.length) {
    state.titles = []
    return
  }
  const hTags = Array.from(new Set(titles.map((title: any) => title.tagName))).sort()
  state.titles = titles.map((el: any) => ({
    title: el.innerText,
    lineIndex: el.getAttribute('data-v-md-line'),
    indent: hTags.indexOf(el.tagName)
  }))
})
</script>
<template>
  <a-back-top :visibilityHeight="200" />
  <div class="fade-in-fwd">
    <div class="main">
      <a-page-header :title="state.title" />
      <v-md-preview :text="state.content" ref="preview"></v-md-preview>
    </div>

    <div class="anchor">
      <div class="anchor_tag" v-for="anchor in state.titles" :key="anchor" @click="handleAnchorClick(anchor)">
        {{ anchor.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  @apply m-auto w-[70%];
  @apply bg-white shadow;

  .ant-page-header-ghost {
    @apply bg-gray-50 shadow;
  }
}

.anchor {
  @apply rounded bg-amber-800 top-[7%] right-[3%] w-[16%] z-10 fixed;
  .anchor_tag {
    @apply bg-white cursor-pointer  m-1 text-base p-2;
    &:hover {
      @apply rounded bg-blue-100;
    }
  }
}
</style>
