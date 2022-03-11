(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{626:function(t,v,e){"use strict";e.r(v);var s=e(15),_=Object(s.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("在 4 月 22 日的直播中，我就 “Vue.js 3.0 到底带来了哪些变化？” 这个话题，分享了一些自己的看法。在这里我做了一篇内容梳理，希望对你有所帮助。如果你想要了解直播当天的详细内容，可以观看本课时的视频或者音频内容。")]),t._v(" "),e("p",[t._v("今天的内容会分为以下五个部分：")]),t._v(" "),e("ul",[e("li",[t._v("Composition APIs；")]),t._v(" "),e("li",[t._v("设计动机 / 核⼼优势；")]),t._v(" "),e("li",[t._v("基于 Webpack 构建；")]),t._v(" "),e("li",[t._v("Vue CLI experimental；")]),t._v(" "),e("li",[t._v("Official Libraries。")])]),t._v(" "),e("p",[t._v("首先，我们先回顾一下 Vue 的发展历程：")]),t._v(" "),e("ul",[e("li",[t._v("2018-09-30：Vue.js 2.0 两周年，公开宣布 Vue.js 3.0 开发计划；")]),t._v(" "),e("li",[t._v("2019-10-05：Vue.js 3.0 公开源代码；")]),t._v(" "),e("li",[t._v("2019-12-20：Vue.js 发布 3.0-alpha.0 版本；")]),t._v(" "),e("li",[t._v("2020-04-17：Vue.js 发布 3.0-beta.1 版本；")]),t._v(" "),e("li",[t._v("2020-01-05：vue-cli-plugin-vue-next v0.0.2；")]),t._v(" "),e("li",[t._v("2020-02-18：vue-router-next v4.0.0-alpha.0；")]),t._v(" "),e("li",[t._v("2020-03-14：eslint-plugin-vue v7.0.0-alpha.0；")]),t._v(" "),e("li",[t._v("2020-03-15：vuex v4.0.0-alpha.1；")]),t._v(" "),e("li",[t._v("2020-04-12：vue-test-utils-next v2.0.0-alpha.1。")])]),t._v(" "),e("p",[t._v("这里我希望你要了解：")]),t._v(" "),e("ul",[e("li",[t._v("新版本发布固然有它的优势，但是并不一定所有的企业都会立即采用；")]),t._v(" "),e("li",[t._v("新版本的发布不代表老版本已经一无是处，版本的迭代更新是一个必然发展状态，但它会带动起来一些周边的生态发展。")])]),t._v(" "),e("h3",[t._v("快速体验 Composition APIs")]),t._v(" "),e("h4",[t._v("vs. Options APIs")]),t._v(" "),e("p",[t._v("如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/01/FD/CgqCHl6v6kKAEB86AANiAJDnjVQ357.png",alt:"image.png"}})]),t._v(" "),e("p",[t._v("Vue.js 3.0 核⼼优势：")]),t._v(" "),e("ul",[e("li",[t._v("没有 this，没烦恼；")]),t._v(" "),e("li",[t._v("更好的类型推导能⼒（TypeScript）；")]),t._v(" "),e("li",[t._v("更友好的 Tree-shaking ⽀持（渐进式体验）；")]),t._v(" "),e("li",[t._v("更⼤的代码压缩空间；")]),t._v(" "),e("li",[t._v("更灵活的逻辑复⽤能⼒。")])]),t._v(" "),e("h4",[t._v("逻辑复用案例")]),t._v(" "),e("p",[t._v("对于逻辑复用这块我们可以通过几个小案例来体会一下。")]),t._v(" "),e("p",[e("strong",[t._v("案例一、常用功能性状态复用：")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/01/FD/CgqCHl6v6kyASlkDAAENklOYlj0705.png",alt:"image (1).png"}})]),t._v(" "),e("p",[e("strong",[t._v("案例二、获取数据逻辑复用：")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/01/FD/CgqCHl6v6mOAcMILAAD_9U0vYHo031.png",alt:"image (2).png"}})]),t._v(" "),e("p",[e("strong",[t._v("案例三、BOM API 封装：")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/01/FD/Ciqc1F6v6myAQliaAAHwBa16R38975.png",alt:"image (3).png"}})]),t._v(" "),e("h3",[t._v("基于 Webpack 构建")]),t._v(" "),e("p",[t._v("由于 Vue CLI 自身还没有很好的支持 Vue.js 3.0 版本，所以对于 3.0 项目的构建，我们还是需要直接使用 Webpack 构建。这里我们分享一个基于 Webpack 构建 Vue.js 3.0 的基本操作。")]),t._v(" "),e("p",[t._v("以下是具体命令行操作：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/01/FD/Ciqc1F6v6nWAX5aTAANGepPtsvc770.png",alt:"image (4).png"}})]),t._v(" "),e("p",[t._v("项目结构设计如下：")]),t._v(" "),e("pre",[e("code",{staticClass:"lang-js",attrs:{"data-language":"js"}},[t._v("└─ vue-next-sample ····························· project root \n   ├─ public ··································· "),e("span",{staticClass:"hljs-keyword"},[t._v("static")]),t._v(" dir \n   │  └─ index.html ···························· index template \n   ├─ src ······································ source dir \n   │  ├─ App.vue ······························· root component (sfc) \n   │  └─ main.js ······························· app entry \n   ├─ package.json ····························· package file \n   └─ webpack.config.js ························ webpack config\n")])]),t._v(" "),e("p",[t._v("其中 Webpack 的核心配置如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/01/FD/CgqCHl6v6oGAeKLEAANJ8E2ZEDA820.png",alt:"image (5).png"}})]),t._v(" "),e("h3",[t._v("基于 Vue CLI experimental")]),t._v(" "),e("p",[t._v("Vue CLI 对 Vue.js 3.0 的支持目前是以一个"),e("a",{attrs:{href:"https://github.com/vuejs/vue-cli-plugin-vue-next"}},[t._v("插件（vue-cli-plugin-vue-next）")]),t._v("的形式实现的，目前属于实验阶段（experimental）。")]),t._v(" "),e("p",[t._v("具体使用方法如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/01/FD/CgqCHl6v6omAOOrAAAIRJLu2wak852.png",alt:"image (6).png"}})]),t._v(" "),e("p",[t._v("这里你需要注意，千万不要在成熟项⽬中使⽤这个插件直接升级项目，这会导致很多问题，后面 Vue 官方会给出 2.x 项目升级到 3.0 的迁移工具，到时候再视情况决定是否使用。")]),t._v(" "),e("h3",[t._v("结合 Official Libraries")]),t._v(" "),e("p",[t._v("最后这一块内容是关于官方的几个库的最新版本，以及如何去结合 Vue.js 3.0 使用：")]),t._v(" "),e("h4",[t._v("Vue Router")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/vuejs/vue-router-next"}},[t._v("vue-router")]),t._v(" 一直以来是使用 Vue.js 开发 SPA 类型应用必不可少的，针对 3.0，vue-router 也有一些调整。")]),t._v(" "),e("p",[t._v("注册（定义）路由的用法：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/01/FD/Ciqc1F6v6pKAaRIRAAHzDZjGLng133.png",alt:"image (7).png"}})]),t._v(" "),e("p",[t._v("组件中获取当前路由信息的方法：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/01/FD/CgqCHl6v6p2AG_EpAAEJL03CUDk536.png",alt:"image (8).png"}})]),t._v(" "),e("h4",[t._v("Vuex")]),t._v(" "),e("p",[t._v("对于 "),e("a",{attrs:{href:"https://github.com/vuejs/vuex/tree/4.0"}},[t._v("Vuex")]),t._v("，API 改动是最小的，基本上没有什么变化。")]),t._v(" "),e("p",[t._v("创建 Store 的方法：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/01/FD/Ciqc1F6v6qeAJtdfAAFPEAP3Tos147.png",alt:"image (9).png"}})]),t._v(" "),e("p",[t._v("组件中使用 Store 的方式一（跟 2.x 一样）：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/01/FD/CgqCHl6v6q6Af8R9AAFcCB1sJGY955.png",alt:"image (10).png"}})]),t._v(" "),e("p",[t._v("方式二，使用 useStore API（推荐）：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/01/FD/Ciqc1F6v6raAHqIEAAJm6pO4Vnw344.png",alt:"image (11).png"}})]),t._v(" "),e("p",[t._v("除此之外，Vue.js 官方还给出了目前官方的一些周边库的状态，下表为：Official Libraries Vue 3.0 Support Status")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Project")]),t._v(" "),e("th",[t._v("Status")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("vue-router")]),t._v(" "),e("td",[t._v("Alpha "),e("a",{attrs:{href:"https://github.com/vuejs/rfcs/pulls?q=is%3Apr+is%3Aopen+label%3Arouter"}},[t._v("[Proposed RFCs]")]),t._v(" "),e("a",{attrs:{href:"https://github.com/vuejs/vue-router-next"}},[t._v("[GitHub]")]),t._v(" "),e("a",{attrs:{href:"https://unpkg.com/browse/vue-router@4.0.0-alpha.7/"}},[t._v("[npm]")])])]),t._v(" "),e("tr",[e("td",[t._v("vuex")]),t._v(" "),e("td",[t._v("Alpha, with same API "),e("a",{attrs:{href:"https://github.com/vuejs/vuex/tree/4.0"}},[t._v("[GitHub]")]),t._v(" "),e("a",{attrs:{href:"https://unpkg.com/browse/vuex@4.0.0-alpha.1/"}},[t._v("[npm]")])])]),t._v(" "),e("tr",[e("td",[t._v("vue-class-component")]),t._v(" "),e("td",[t._v("Alpha "),e("a",{attrs:{href:"https://github.com/vuejs/vue-class-component/tree/next"}},[t._v("[GitHub]")]),t._v(" "),e("a",{attrs:{href:"https://unpkg.com/browse/vue-class-component@8.0.0-alpha.2/"}},[t._v("[npm]")])])]),t._v(" "),e("tr",[e("td",[t._v("vue-cli")]),t._v(" "),e("td",[t._v("Experimental support via vue-cli-plugin-vue-next")])]),t._v(" "),e("tr",[e("td",[t._v("eslint-plugin-vue")]),t._v(" "),e("td",[t._v("Alpha "),e("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue"}},[t._v("[GitHub]")]),t._v(" "),e("a",{attrs:{href:"https://unpkg.com/browse/eslint-plugin-vue@7.0.0-alpha.0/"}},[t._v("[npm]")])])]),t._v(" "),e("tr",[e("td",[t._v("vue-test-utils")]),t._v(" "),e("td",[t._v("Pre-alpha "),e("a",{attrs:{href:"https://github.com/vuejs/vue-test-utils-next"}},[t._v("[GitHub]")]),t._v(" "),e("a",{attrs:{href:"https://www.npmjs.com/package/@vue/test-utils"}},[t._v("[npm]")])])]),t._v(" "),e("tr",[e("td",[t._v("vue-devtools")]),t._v(" "),e("td",[t._v("WIP")])]),t._v(" "),e("tr",[e("td",[t._v("jsx")]),t._v(" "),e("td",[t._v("WIP")])])])]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"精选评论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#精选评论"}},[t._v("#")]),t._v(" 精选评论")]),t._v(" "),e("h5",{attrs:{id:"kvsur"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kvsur"}},[t._v("#")]),t._v(" kvsur：")]),t._v(" "),e("blockquote",[e("p",[t._v("请问截图里面的三等号是什么插件啊？😀")])]),t._v(" "),e("h6",{attrs:{id:"讲师回复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),e("blockquote",[e("p",[t._v("    我用的是 Fira Code 这种编程专用字体，这种字体有连体特性")])])])}),[],!1,null,null,null);v.default=_.exports}}]);