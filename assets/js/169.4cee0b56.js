(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{638:function(t,a,r){"use strict";r.r(a);var s=r(15),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("ninja 搭建成功")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wu529778790/image/blog/20211103231255.png",alt:"20211103231255"}})]),t._v(" "),r("h2",{attrs:{id:"宝塔面板安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#宝塔面板安装"}},[t._v("#")]),t._v(" 宝塔面板安装")]),t._v(" "),r("p",[t._v("宝塔服务器面板，一键全能部署及管理，送你 3188 元礼包，点我领取"),r("a",{attrs:{href:"https://www.bt.cn/?invite_code=MV9pcnVna28",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.bt.cn/?invite_code=MV9pcnVna28"),r("OutboundLink")],1),t._v("=")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.bt.cn/bbs/thread-19376-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.bt.cn/bbs/thread-19376-1-1.html"),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[t._v("yum "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O install.sh http://download.bt.cn/install/install_6.0.sh "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" install.sh\n")])])]),r("h2",{attrs:{id:"安装青龙"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装青龙"}},[t._v("#")]),t._v(" 安装青龙")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/whyour/qinglong",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/whyour/qinglong"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wu529778790/image/blog/20211103231542.png",alt:"20211103231542"}})]),t._v(" "),r("p",[t._v("首先宝塔面板里安装 docker")]),t._v(" "),r("p",[t._v("docker pull whyour/qinglong:latest")]),t._v(" "),r("p",[t._v("部署镜像（预留 sillyGirl、xdd-plus、xdd、ninja）")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -dit    -v "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/ql/config:/ql/config    -v "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/ql/db:/ql/db    -v "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/ql/repo:/ql/repo    -v "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/ql/raw:/ql/raw    -v "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/ql/scripts:/ql/scripts    -v "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/ql/log:/ql/log    -v "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/ql/jbot:/ql/jbot    -v "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/ql/ninja:/ql/ninja    -v "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/ql/xdd:/ql/xdd    -v "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/ql/xdd-plus:/ql/xdd-plus    -v "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/ql/sillyGirl:/ql/sillyGirl    -p "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5700")]),t._v(":5700    -p "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5701")]),t._v(":5701    -e "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ENABLE_HANGUP")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true    -e "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ENABLE_TG_BOT")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true    -e "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ENABLE_WEB_PANEL")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true    --name qinglong   --hostname qinglong    --restart always whyour/qinglong:latest\n")])])]),r("h2",{attrs:{id:"安装-ninja"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-ninja"}},[t._v("#")]),t._v(" 安装 ninja")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/MoonBegonia/ninja/tree/main",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/MoonBegonia/ninja/tree/main"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("切换到 main 分支，master 分支隐藏了")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wu529778790/image/blog/20211103231039.png",alt:"20211103231039"}})]),t._v(" "),r("h2",{attrs:{id:"安装-dailycheckin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-dailycheckin"}},[t._v("#")]),t._v(" 安装 dailycheckin")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://sitoi.github.io/dailycheckin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://sitoi.github.io/dailycheckin/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("必须指定具体的 python 版本号")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://stackoverflow.com/questions/69860233/cant-install-python-package-on-alpine-docker-anymore",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://stackoverflow.com/questions/69860233/cant-install-python-package-on-alpine-docker-anymore"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"安装-nvjdc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-nvjdc"}},[t._v("#")]),t._v(" 安装 nvjdc")]),t._v(" "),r("p",[t._v("由于大佬已经删除跑路，一键脚本不能使用")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://w.a-zw.com/1689.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://w.a-zw.com/1689.html"),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拉源码")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 国内服务器")]),t._v("\ngit clone https"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ghproxy"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("https"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("fzls"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nvjdcdocker"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nolanjdc\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 国外服务器")]),t._v("\ngit clone https"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("fzls"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nvjdcdocker"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nolanjdc\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拉取基础镜像")]),t._v("\ndocker pull shifanga"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nolanhzy"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("latest\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个目录放配置")]),t._v("\ncd "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nolanjdc\nmkdir "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p  Config "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" cd Config\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 回到nolanjdc目录创建chromium文件夹并进入")]),t._v("\ncd "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nolanjdc "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" mkdir "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("chromium"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Linux"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("884014")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" cd "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("chromium"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Linux"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("884014")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下载 chromium")]),t._v("\nwget https"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mirrors"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("huaweicloud"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("chromium"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("browser"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("snapshots"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Linux_x64"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("884014")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("chrome"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("linux"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zip "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" unzip chrome"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("linux"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zip\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除刚刚下载的压缩包")]),t._v("\nrm  "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f chrome"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("linux"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zip\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 回到刚刚创建的目录")]),t._v("\ncd  "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nolanjdc\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动镜像")]),t._v("\nsudo docker run   "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("name nolanjdc "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5703")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d  "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v  "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$(pwd)"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("app \\\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localtime"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localtime"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("ro \\\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("it "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("privileged"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" shifanga"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nolanhzy"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("latest\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编辑文件:/root/nolanjdc/Config里面的文件")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重启容器，开放端口:5703")]),t._v("\n")])])]),r("h2",{attrs:{id:"脚本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#脚本"}},[t._v("#")]),t._v(" 脚本")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/zero205/JD_tencent_scf",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/zero205/JD_tencent_scf"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/shufflewzc/faker2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/shufflewzc/faker2"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/he1pu/JDHelp",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/he1pu/JDHelp"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.matools.com/cron",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.matools.com/cron"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/rubyangxg/sillyGirl",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/rubyangxg/sillyGirl"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/julyguazi/xdd",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/julyguazi/xdd"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/KingRan/JDJB",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/KingRan/JDJB"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/764763903a/xdd-plus",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/764763903a/xdd-plus"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://h4w.gitee.io/2021/10/13/%E5%AE%89%E8%A3%85xdd-plus%E6%9C%BA%E5%99%A8%E4%BA%BA/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://h4w.gitee.io/2021/10/13/安装xdd-plus机器人/"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"教程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#教程"}},[t._v("#")]),t._v(" 教程")]),t._v(" "),r("p",[t._v("参考妖友的 B 站视频教程")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.yanyuwangluo.cn/239/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.yanyuwangluo.cn/239/"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.yanyuwangluo.cn/209/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.yanyuwangluo.cn/209/"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.bilibili.com/read/cv13786687",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.bilibili.com/read/cv13786687"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.bilibili.com/read/cv13788680",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.bilibili.com/read/cv13788680"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);