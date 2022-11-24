// 引入 vue
// import Vue from 'vue'
// 引入 vssue
import Vssue from '@liamrad/vssue-vue3'
// // 引入对应平台的 api 包
import GithubV4 from '@vssue/api-github-v4'
// // 引入 vssue 的样式文件
import '@liamrad/vssue-vue3/style.css'

import type { App } from 'vue'

export default (app: App) => {
  // console.log(Vssue)
  app.use(Vssue as any, {
    // 设置要使用的平台 api
    api: GithubV4,

    // 在这里设置你使用的平台的 OAuth App 配置
    owner: 'liamrad',
    repo: 'my-website',
    clientId: 'acf74ce1f94214b1593c',
    clientSecret: 'e417996acb4ec72ddde2d415b76cc141d8905fbe', // 只有在使用某些平台时需要
  })
}
