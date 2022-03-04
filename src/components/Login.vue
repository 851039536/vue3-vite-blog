<script setup lang="ts">
import { message } from 'ant-design-vue/es/components'
import { routers } from '@/hooks/routers'
import { user } from '@/api/index'
import { storage } from '@/utils/storage/storage'

const loginForm = reactive({
  username: '',
  password: ''
})

async function login() {
  if (loginForm.username === '' || loginForm.password === '') {
    message.error('用户或密码错误不能为空')
    return
  }
  user
    .Login(loginForm)
    .then((res) => {
      if (res.data.succeeded) {
        storage.remove('token')
        storage.remove('id')
        storage.remove('name')
        storage.set('token', `Bearer ${res.data.data.token}`)
        storage.set('id', res.data.data.id)
        storage.set('name', res.data.data.nickname)
        message.loading('loading..', 1.5).then(
          () => {
            routers('/Admin-index/ArticleTable')
          },
          () => {}
        )
      } else {
        message.loading('loading..', 1.5).then(
          () => {
            message.error('用户或密码错误')
          },
          () => {}
        )
      }
    })
    .catch((err) => {
      message.error(err)
    })
}
onMounted(async () => {
  if (storage.get('token') !== 'token') {
    await routers('/Admin-index/ArticleTable')
  }
})
</script>
<template>
  <div class="login-box">
    <form class="login">
      <p>SW网后台</p>
      <input type="text" v-model="loginForm.username" placeholder="用户名" />
      <input type="password" v-model="loginForm.password" placeholder="密码" autocomplete="off" />
      <div class="btn"><span @click="login">登 录</span></div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login {
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -200px;
  /* absolute居中的一种方法 */
  background-color: #fff;
  width: 400px;
  height: 400px;
  border-radius: 25px;
  text-align: center;
  padding: 5px 40px;
  box-sizing: border-box;
}
p {
  font-size: 42px;
  font-weight: 600;
}

input {
  @apply bg-white h-45px mt-4 w-full;

  // border-bottom: 2px solid rgb(95, 90, 90);
  /* 下面的会覆盖上面的步伐 */

  font-size: 22px;
}

.btn {
  @apply m-auto  mt-3 text-2xl w-[38%];
  @apply cursor-pointer hover:text-blue-400;
}

.login-box {
  @apply top-0 left-0 fixed;
  width: 100%;
  height: 100%;
  background: url(../../../assets/img/login/wallpaper.jpg) no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
