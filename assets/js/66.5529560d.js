(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{537:function(t,a,s){"use strict";s.r(a);var n=s(15),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),s("ul",[s("li",[t._v("loader 是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中")]),t._v(" "),s("li",[t._v("plugin 赋予了 webpack 各种灵活的功能，例如打包优化、资源管理、环境变量注入等，目的是解决 loader 无法实现的其他事")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wu529778790/image/blog/20210609163450.png",alt:"20210609163450"}})]),t._v(" "),s("p",[t._v("可以看到，两者在运行时机上的区别：")]),t._v(" "),s("ul",[s("li",[t._v("loader 运行在打包文件之前")]),t._v(" "),s("li",[t._v("plugins 在整个编译周期都起作用")])]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("Webpack")]),t._v(" 运行的生命周期中会广播出许多事件，"),s("code",[t._v("Plugin")]),t._v(" 可以监听这些事件，在合适的时机通过"),s("code",[t._v("Webpack")]),t._v("提供的 "),s("code",[t._v("API")]),t._v("改变输出结果")]),t._v(" "),s("p",[t._v("对于"),s("code",[t._v("loader")]),t._v("，实质是一个转换器，将 A 文件进行编译形成 B 文件，操作的是文件，比如将"),s("code",[t._v("A.scss")]),t._v("或"),s("code",[t._v("A.less")]),t._v("转变为"),s("code",[t._v("B.css")]),t._v("，单纯的文件转换过程")]),t._v(" "),s("h2",{attrs:{id:"编写-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写-loader"}},[t._v("#")]),t._v(" 编写 loader")]),t._v(" "),s("p",[t._v("在编写 "),s("code",[t._v("loader")]),t._v(" 前，我们首先需要了解 "),s("code",[t._v("loader")]),t._v(" 的本质")]),t._v(" "),s("p",[t._v("其本质为函数，函数中的 "),s("code",[t._v("this")]),t._v(" 作为上下文会被 "),s("code",[t._v("webpack")]),t._v(" 填充，因此我们不能将 "),s("code",[t._v("loader")]),t._v("设为一个箭头函数")]),t._v(" "),s("p",[t._v("函数接受一个参数，为 "),s("code",[t._v("webpack")]),t._v(" 传递给 "),s("code",[t._v("loader")]),t._v(" 的文件源内容")]),t._v(" "),s("p",[t._v("函数中 "),s("code",[t._v("this")]),t._v(" 是由 "),s("code",[t._v("webpack")]),t._v(" 提供的对象，能够获取当前 "),s("code",[t._v("loader")]),t._v(" 所需要的各种信息")]),t._v(" "),s("p",[t._v("函数中有异步操作或同步操作，异步操作通过 "),s("code",[t._v("this.callback")]),t._v(" 返回，返回值要求为 "),s("code",[t._v("string")]),t._v(" 或者 "),s("code",[t._v("Buffer")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导出一个函数，source为webpack传递给loader的文件源内容")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" content "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomeThing2JsString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 loader 配置了 options 对象，那么this.query将指向 options")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以用作解析其他模块路径的上下文")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this.context"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n   * this.callback 参数：\n   * error：Error | null，当 loader 出错时向外抛出一个 error\n   * content：String | Buffer，经过 loader 编译后需要导出的内容\n   * sourceMap：为方便调试生成的编译后内容的 source map\n   * ast：本次编译生成的 AST 静态语法树，之后执行的 loader 可以直接使用这个 AST，进而省去重复生成 AST 的过程\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("一般在编写"),s("code",[t._v("loader")]),t._v("的过程中，保持功能单一，避免做多种功能")]),t._v(" "),s("p",[t._v("如"),s("code",[t._v("less")]),t._v("文件转换成 "),s("code",[t._v("css")]),t._v("文件也不是一步到位，而是 "),s("code",[t._v("less-loader")]),t._v("、"),s("code",[t._v("css-loader")]),t._v("、"),s("code",[t._v("style-loader")]),t._v("几个 "),s("code",[t._v("loader")]),t._v("的链式调用才能完成转换")]),t._v(" "),s("h2",{attrs:{id:"编写-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写-plugin"}},[t._v("#")]),t._v(" 编写 plugin")]),t._v(" "),s("p",[t._v("由于"),s("code",[t._v("webpack")]),t._v("基于发布订阅模式，在运行的生命周期中会广播出许多事件，插件通过监听这些事件，就可以在特定的阶段执行自己的插件任务")]),t._v(" "),s("p",[t._v("在之前也了解过，"),s("code",[t._v("webpack")]),t._v("编译会创建两个核心对象：")]),t._v(" "),s("ul",[s("li",[t._v("compiler：包含了 webpack 环境的所有的配置信息，包括 options，loader 和 plugin，和 webpack 整个生命周期相关的钩子")]),t._v(" "),s("li",[t._v("compilation：作为 plugin 内置事件回调函数的参数，包含了当前的模块资源、编译生成资源、变化的文件以及被跟踪依赖的状态信息。当检测到一个文件变化，一次新的 Compilation 将被创建")])]),t._v(" "),s("p",[t._v("如果自己要实现"),s("code",[t._v("plugin")]),t._v("，也需要遵循一定的规范：")]),t._v(" "),s("ul",[s("li",[t._v("插件必须是一个函数或者是一个包含 "),s("code",[t._v("apply")]),t._v(" 方法的对象，这样才能访问"),s("code",[t._v("compiler")]),t._v("实例")]),t._v(" "),s("li",[t._v("传给每个插件的 "),s("code",[t._v("compiler")]),t._v(" 和 "),s("code",[t._v("compilation")]),t._v(" 对象都是同一个引用，因此不建议修改")]),t._v(" "),s("li",[t._v("异步的事件需要在插件处理完任务时调用回调函数通知 "),s("code",[t._v("Webpack")]),t._v(" 进入下一个流程，不然会卡住")])]),t._v(" "),s("p",[t._v("实现"),s("code",[t._v("plugin")]),t._v("的模板如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyPlugin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Webpack 会调用 MyPlugin 实例的 apply 方法给插件实例传入 compiler 对象")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("compiler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 找到合适的事件钩子，实现自己的插件功能")]),t._v("\n    compiler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyPlugin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("compilation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// compilation: 当前打包构建流程的上下文")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compilation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在 "),s("code",[t._v("emit")]),t._v(" 事件发生时，代表源文件的转换和组装已经完成，可以读取到最终将输出的资源、代码块、模块及其依赖，并且可以修改输出资源的内容")]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://webpack.docschina.org/api/loaders/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://webpack.docschina.org/api/loaders/"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://webpack.docschina.org/api/compiler-hooks/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://webpack.docschina.org/api/compiler-hooks/"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000039877943",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000039877943"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/febobo/web-interview/edit/master/docs/webpack/Loader_Plugin.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/febobo/web-interview/edit/master/docs/webpack/Loader_Plugin.md"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);