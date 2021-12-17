<script lang="ts" setup>
import { reactive } from 'vue'
import { software, common } from '../../api/index'

const resData: any = reactive({
  resultData: [],
  totalCount: 0
})
software.GetFy(0, 'null', 1, 10, 'id', true).then((res) => {
  resData.resultData = res.data.data.items
  resData.totalCount = res.data.data.totalCount
})

const Skip = async (path: string) => {
  await common.FileDownload(path).then((res: any) => {
    // 地址转换
    let url = window.URL.createObjectURL(res.data)
    // 文件名
    let fileName: string = 'fileName.pdf'
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('download', fileName)
    document.body.append(a)
    a.click()
    document.body.removeChild(a)
  })
}
</script>
<template>
  <div class="app-container">
    <div class="app-header">
      <div class="app-header-left">
        <span class="app-icon"></span>
        <p class="app-name">查询</p>
        <div class="search-wrapper">
          <input class="search-input" type="text" placeholder="Search" />
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="feather feather-search"
            viewBox="0 0 24 24"
          >
            <defs></defs>
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
        </div>
      </div>
      <div class="app-header-right">
        <button class="mode-switch" title="Switch Theme"></button>
        <button class="add-btn" title="Add New Project"></button>
        <button class="notification-btn"></button>
        <button class="profile-btn">
          <span>程序文件</span>
        </button>
      </div>
    </div>

    <!-- --------------------------------------- -->

    <div class="app-content">
      <div class="projects-section">
        <div class="projects-section-line">
          <div class="projects-status">
            <div class="item-status">
              <!-- <span class="status-number">{{ resData.totalCount }}</span> -->
              <span class="status-type">程序文件</span>
            </div>
            <!-- <div class="item-status">
              <span class="status-number">24</span>
              <span class="status-type">测试工具</span>
            </div>
            <div class="item-status">
              <span class="status-number">62</span>
              <span class="status-type">文档</span>
            </div> -->
          </div>
        </div>
        <div class="project-boxes jsGridView">
          <div class="project-box-wrapper">
            <div class="project-box" style="background-color: #d7ebeb">
              <div class="project-box-header">
                <span>测试软件</span>
              </div>
              <div class="project-box-content-header">
                <p class="box-content-header">xxxxxxxxxxxx</p>
                <p class="box-content-subheader">介绍:xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              </div>

              <div class="project-box-footer">
                <div class="participants">
                  <!-- <img alt="participant" />
                  <img alt="participant" /> -->
                  <button class="add-participant" style="color: #4f3ff0"></button>
                </div>
                <div class="days-left" style="color: #4bc7ec">下载</div>
              </div>
            </div>
          </div>
          <div class="project-box-wrapper" v-for="(item, index) in resData.resultData" :key="index">
            <div class="project-box" style="background-color: #e9e7fd">
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
                  <button class="add-participant" style="color: #4f3ff0"></button>
                </div>
                <div class="days-left" style="color: #4f3ff0" @click="Skip(item.relativePath)">下载</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ---------------------------- -->
      <div class="messages-section">
        <div class="projects-section-header">
          <p>新发布</p>
        </div>
        <div class="messages">
          <div class="message-box">
            <div class="message-content">
              <div class="message-header">
                <div class="name">xxxx</div>
              </div>
              <p class="message-line">xxxxxxxxxxxxxxxxxx🥳 xxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxx.</p>
              <p class="message-line time">2022.1.1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-header {
  @apply bg-white rounded;
}

.app {
  &-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--app-container);
    transition: 0.2s;
    max-width: 1800px;

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: 'DM Sans', sans-serif;
    }
  }

  &-content {
    display: flex;
    height: 100%;
    overflow: hidden;
    padding: 16px 24px 24px 0;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 24px;
    position: relative;

    &-left,
    &-right {
      display: flex;
      align-items: center;
    }

    &-left {
      flex-grow: 1;
    }

    &-right button {
      margin-left: 10px;
    }
  }

  &-icon {
    width: 26px;
    height: 2px;
    border-radius: 4px;
    background-color: var(--main-color);
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 12px;
      height: 2px;
      border-radius: 4px;
      background-color: var(--main-color);
      left: 50%;
      transform: translatex(-50%);
    }

    &:before {
      top: -6px;
    }
    &:after {
      bottom: -6px;
    }
  }

  &-name {
    color: var(--main-color);
    margin: 0;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin: 0 32px;
  }
}

.mode-switch {
  background-color: transparent;
  border: none;
  padding: 0;
  color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-wrapper {
  border-radius: 20px;
  background-color: var(--search-area-bg);
  padding-right: 12px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 480px;
  color: var(--light-font);
  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1);
  overflow: hidden;

  .dark & {
    box-shadow: none;
  }
}

.search-input {
  border: none;
  flex: 1;
  outline: none;
  height: 100%;
  padding: 0 20px;
  font-size: 16px;
  background-color: var(--search-area-bg);
  color: var(--main-color);

  &:placeholder {
    color: var(--main-color);
    opacity: 0.6;
  }
}

.add-btn {
  color: #fff;
  background-color: var(--button-bg);
  padding: 0;
  border: 0;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification-btn {
  color: var(--main-color);
  padding: 0;
  border: 0;
  background-color: transparent;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-btn {
  padding: 0;
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding-left: 12px;
  border-left: 2px solid #ddd;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 4px;
  }

  span {
    color: var(--main-color);
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
  }
}

.projects-section {
  flex: 2;
  background-color: var(--projects-section);
  border-radius: 32px;
  padding: 32px 32px 0 32px;
  overflow: hidden;
  height: 100%;
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

    .time {
      font-size: 20px;
    }
  }
}

.projects-status {
  display: flex;
}

.item-status {
  display: flex;
  flex-direction: column;
  margin-right: 16px;

  &:not(:last-child) .status-type:after {
    content: '';
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translatey(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid var(--secondary-color);
  }
}

.status-number {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: var(--main-color);
}

.status-type {
  position: relative;
  padding-right: 24px;
  color: var(--secondary-color);
}

.messages-section {
  flex-shrink: 0;
  padding-bottom: 32px;
  background-color: var(--projects-section);
  margin-left: 24px;
  flex: 1;
  width: 100%;
  border-radius: 30px;
  position: relative;
  overflow: auto;
  transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);

  .messages-close {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 3;
    border: none;
    background-color: transparent;
    color: var(--main-color);
    display: none;
  }

  .projects-section-header {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 32px 24px 0 24px;
    background-color: var(--projects-section);
  }
}

.message-box {
  border-top: 1px solid var(--message-box-border);
  padding: 16px;
  display: flex;
  align-items: flex-start;
  width: 100%;

  &:hover {
    background-color: var(--message-box-hover);
    border-top-color: var(--link-color-hover);

    + .message-box {
      border-top-color: var(--link-color-hover);
    }
  }

  img {
    border-radius: 50%;
    object-fit: cover;
    width: 40px;
    height: 40px;
  }
}

.message-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .name {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: var(--main-color);
    margin: 0;
  }
}

.message-content {
  padding-left: 16px;
  width: 100%;
}

.message-line {
  font-size: 14px;
  line-height: 20px;
  margin: 8px 0;
  color: var(--secondary-color);
  opacity: 0.7;

  &.time {
    text-align: right;
    margin-bottom: 0;
  }
}

.project-boxes {
  @apply cursor-pointer;
  margin: 0 -8px;
  overflow-y: auto;

  &.jsGridView {
    display: flex;
    flex-wrap: wrap;

    .project-box-wrapper {
      width: 33.3%;
    }
  }

  &.jsListView {
    .project-box {
      display: flex;
      border-radius: 10px;
      position: relative;
      > * {
        margin-right: 24px;
      }
    }

    .more-wrapper {
      position: absolute;
      right: 16px;
      top: 16px;
    }

    .project-box-content-header {
      order: 1;
      max-width: 120px;
    }

    .project-box-header {
      order: 2;
    }

    .project-box-footer {
      order: 3;
      padding-top: 0;
      flex-direction: column;
      justify-content: flex-start;
    }

    .project-box-footer:after {
      display: none;
    }

    .participants {
      margin-bottom: 8px;
    }

    .project-box-content-header p {
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .project-box-header > span {
      position: absolute;
      bottom: 16px;
      left: 16px;
      font-size: 12px;
    }

    .box-progress-wrapper {
      order: 3;
      flex: 1;
    }
  }
}

.project-box {
  --main-color-card: #dbf6fd;
  border-radius: 30px;
  padding: 16px;
  background-color: var(--main-color-card);

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    color: var(--main-color);

    span {
      color: #4a4a4a;
      opacity: 0.7;
      font-size: 14px;
      line-height: 16px;
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
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  opacity: 0.7;
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

  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;

    &:not(:first-child) {
      margin-left: -8px;
    }
  }
}

.add-participant {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.6);
  margin-left: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.days-left {
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  border-radius: 20px;
  flex-shrink: 0;
  padding: 6px 16px;
  font-weight: 700;
}

.mode-switch.active .moon {
  fill: var(--main-color);
}

@media screen and (max-width: 980px) {
  .project-boxes.jsGridView .project-box-wrapper {
    width: 50%;
  }

  .status-number,
  .status-type {
    font-size: 14px;
  }

  .status-type:after {
    width: 4px;
    height: 4px;
  }

  .item-status {
    margin-right: 0;
  }
}

@media screen and (max-width: 880px) {
  .messages-section {
    transform: translateX(100%);
    position: absolute;
    opacity: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    width: 100%;

    .messages-close {
      display: block;
    }
  }
}

@media screen and (max-width: 720px) {
  .app-name,
  .profile-btn span {
    display: none;
  }

  .add-btn,
  .notification-btn,
  .mode-switch {
    width: 20px;
    height: 20px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  .app-header-right button {
    margin-left: 4px;
  }
}

@media screen and (max-width: 520px) {
  .projects-section {
    overflow: auto;
  }
  .project-boxes {
    overflow-y: visible;
  }

  .app-sidebar,
  .app-icon {
    display: none;
  }

  .app-content {
    @apply bg-white;
    padding: 16px 12px 24px 12px;
  }

  .status-number,
  .status-type {
    font-size: 10px;
  }

  .app-header {
    padding: 16px 10px;
  }

  .search-input {
    max-width: 120px;
  }

  .project-boxes.jsGridView .project-box-wrapper {
    width: 100%;
  }

  .projects-section {
    padding: 24px 16px 0 16px;
  }

  .profile-btn img {
    width: 24px;
    height: 24px;
  }

  .app-header {
    padding: 10px;
  }

  .projects-section-header p,
  .projects-section-header .time {
    font-size: 18px;
  }

  .status-type {
    padding-right: 4px;

    &:after {
      display: none;
    }
  }

  .search-input {
    font-size: 14px;
  }

  .box-content-header {
    font-size: 12px;
    line-height: 16px;
  }

  .box-content-subheader {
    font-size: 12px;
    line-height: 16px;
  }

  .project-boxes.jsListView .project-box-header > span {
    font-size: 10px;
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
