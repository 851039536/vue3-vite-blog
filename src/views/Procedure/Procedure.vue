<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { software, common } from '@/api/index'

const resData: any = reactive({
  resultData: [],
  page: 1,
  pagesize: 9,
  count: 0,
  current: 1,
  ipuName: ''
})
software.GetFy(0, 'null', 1, 9, 'id', true).then((res) => {
  resData.resultData = res.data.data.items
  resData.count = res.data.data.totalCount
  resData.page = res.data.data.pageIndex
  resData.pagesize = res.data.data.pageSize
})

const currentchange = async (val: number) => {
  resData.page = val
  await software.GetFy(0, 'null', resData.page, resData.pagesize, 'id', true).then((res: any) => {
    resData.resultData = res.data.data.items
  })
}
const confirm = async (names: string, path: string) => {
  let fileName = names + path.slice(-4)
  await common.FileDownload(path).then((res: any) => {
    // 地址转换
    let url = window.URL.createObjectURL(res.data)
    // 文件名
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('download', fileName)
    document.body.append(a)
    a.click()
    document.body.removeChild(a)
  })
  message.success('Click on Yes')
}

const search = async () => {
  if (resData.ipuName === '') {
    software.GetFy(0, 'null', 1, 9, 'id', true).then((res) => {
      resData.resultData = res.data.data.items
      resData.count = res.data.data.totalCount
      resData.page = res.data.data.pageIndex
      resData.pagesize = res.data.data.pageSize
    })
    return
  }
  software.Contains(0, 'null', resData.ipuName).then((res) => {
    resData.resultData = res.data.data
  })
}

const cancel = (e: MouseEvent) => {
  console.log(e)
  message.error('Click on No')
}
</script>
<template>
  <section class="fade-in">
    <div class="bg-white rounded shadow p-2 px-[20%]">
      <a-input-search prefix="查询:" size="large" v-model:value="resData.ipuName" @change="search()" />
    </div>

    <div class="app-content">
      <div class="projects-section">
        <div class="project-boxes jsGridView">
          <div class="project-box-wrapper" v-for="(item, index) in resData.resultData" :key="index">
            <div class="project-box">
              <div class="project-box-header">
                <span>{{ item.classifyName }}</span>
                <div class="more-wrapper"></div>
              </div>
              <div class="project-box-content-header">
                <p class="box-content-header">{{ item.name }}</p>
                <p class="box-content-subheader">{{ item.description }}</p>
              </div>

              <div class="project-box-footer">
                <div class="participants">
                  <span>{{ item.version }}</span>
                </div>
                <div class="days-left" style="color: #4f3ff0">
                  <a-popconfirm
                    title="是否下载?"
                    ok-text="Yes"
                    cancel-text="No"
                    @confirm="confirm(item.name, item.relativePath)"
                    @cancel="cancel"
                  >
                    <svg t="1640155226218" viewBox="0 0 1024 1024" version="1.1" p-id="12946" width="20" height="20">
                      <path
                        d="M736 960h-448c-117.376 0-179.2-60.992-179.2-179.2v-134.848h89.6V780.8c0 68.416 21.632 89.6 89.6 89.6h448c67.968 0 89.6-21.184 89.6-89.6v-134.848h89.6V780.8c0 118.208-61.824 179.2-179.2 179.2z m-197.312-196.416a34.112 34.112 0 0 1-53.44 0L259.776 473.216a30.912 30.912 0 0 1 24.768-50.816H377.6c17.152 0 44.8-26.88 44.8-44.8V108.8a44.8 44.8 0 0 1 44.8-44.8h89.6a44.8 44.8 0 0 1 44.8 44.8v268.8c0 17.92 26.304 44.8 44.8 44.8h93.056c27.584 0 41.344 29.44 24.768 50.816l-225.536 290.368z"
                        p-id="12947"
                        fill="#515151"
                      ></path>
                    </svg>
                  </a-popconfirm>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <a-pagination
            size="small"
            @change="currentchange"
            :total="resData.count"
            :pageSize="resData.pagesize"
            show-quick-jumper
          />
          <!-- end 分页-->
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects-section {
  flex: 2;
  overflow: hidden;
  height: 100%;
  @apply p-1;
  display: flex;
  flex-direction: column;

  &-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 32px;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    color: var(--main-color);

    p {
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
      opacity: 0.9;
      margin: 0;
      color: var(--main-color);
    }
  }
}

.project-boxes {
  @apply cursor-pointer overflow-y-auto;
  margin: 0 -8px;

  &.jsGridView {
    display: flex;
    flex-wrap: wrap;
    .project-box-wrapper {
      width: 20%;
    }
  }
}

.project-box {
  @apply bg-white rounded-xl shadow p-4;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    color: var(--main-color);

    span {
      color: #4a4a4a;
      @apply text-base;
    }
  }

  &-content-header {
    text-align: center;
    margin-bottom: 16px;

    p {
      margin: 0;
    }
  }

  &-wrapper {
    padding: 8px;
    transition: 0.2s;
  }
}

.more-wrapper {
  position: relative;
}

.box-content-header {
  @apply text-lg;
  font-weight: 700;
}

.box-content-subheader {
  font-size: 14px;
  line-height: 24px;
  opacity: 0.7;
}

.project-box-footer {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    background-color: rgba(255, 255, 255, 0.6);
    width: calc(100% + 32px);
    top: 0;
    left: -16px;
    height: 1px;
  }
}

.participants {
  display: flex;
  align-items: center;
}

.days-left {
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  border-radius: 20px;
  flex-shrink: 0;
  padding: 6px 16px;
  font-weight: 700;
}

@media screen and (max-width: 980px) {
  .project-boxes.jsGridView .project-box-wrapper {
    width: 50%;
  }
}

@media screen and (max-width: 520px) {
  .projects-section {
    overflow: auto;
  }
  .project-boxes {
    overflow-y: visible;
  }

  .app-content {
    @apply bg-white;
    padding: 16px 12px 24px 12px;
  }

  .project-boxes.jsGridView .project-box-wrapper {
    width: 100%;
  }

  .projects-section {
    padding: 24px 16px 0 16px;
  }

  .box-content-header {
    font-size: 12px;
    line-height: 16px;
  }

  .box-content-subheader {
    font-size: 12px;
    line-height: 16px;
  }

  .days-left {
    font-size: 8px;
    padding: 6px 6px;
    text-align: center;
  }

  .project-boxes.jsListView .project-box > * {
    margin-right: 10px;
  }

  .project-boxes.jsListView .more-wrapper {
    right: 2px;
    top: 10px;
  }
}
</style>
