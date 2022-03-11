(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{602:function(a,t,s){"use strict";s.r(t);var d=s(15),v=Object(d.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",{attrs:{"data-nodeid":"637"}},[a._v("前几讲我介绍了首屏秒开、白屏时间和卡顿的优化手段，这些是已上线业务的性能优化。那么，如果有新业务要上线，如何尽量减少它上线后的前端性能问题，避免以后我们手忙脚乱去“救火”呢？我们可以通过性能专项测试，提前于生产环境发现问题。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"638"}},[a._v("什么叫性能专项测试呢？简单来说就是，在业务上线前，我们对性能指标（如首屏时间、白屏时间、页面加载时长等）进行测试，确保上线后性能指标达标。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"639"}},[a._v("那怎么做呢？大致分四步：")]),a._v(" "),s("ul",{attrs:{"data-nodeid":"640"}},[s("li",{attrs:{"data-nodeid":"641"}},[s("p",{attrs:{"data-nodeid":"642"}},[a._v("第一步，确定线下测试方案；")])]),a._v(" "),s("li",{attrs:{"data-nodeid":"643"}},[s("p",{attrs:{"data-nodeid":"644"}},[a._v("第二步，设定线下测试标准；")])]),a._v(" "),s("li",{attrs:{"data-nodeid":"645"}},[s("p",{attrs:{"data-nodeid":"646"}},[a._v("第三步，选用合适的测试环境进行测试及视频分帧计算；")])]),a._v(" "),s("li",{attrs:{"data-nodeid":"647"}},[s("p",{attrs:{"data-nodeid":"648"}},[a._v("第四步，输出测试结果。")])])]),a._v(" "),s("p",{attrs:{"data-nodeid":"649"}},[a._v("接下来我就以首屏时间测试为例详细为你介绍下。")]),a._v(" "),s("h3",{attrs:{"data-nodeid":"650"}},[a._v("性能测试方案选型")]),a._v(" "),s("p",{attrs:{"data-nodeid":"651"}},[a._v("未上线的业务，一般有两种方案来做性能测试：使用性能 SDK 和以录制视频的方式进行。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"652"}},[a._v("第一个方案，使用性能 SDK ，比如我们要采集首屏时间指标，就使用 MutationObserver ，这一点我们在第 4 讲指标采集部分已经提到过。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"653"}},[a._v("它的优点很明显，线上和线下方案一致。缺点呢？因为业务还没上线，内网测试的访问量有限，从而造成性能平台后端的请求少，无法形成大量的首屏时间分布数据，也就无法在性能平台上可视化展现。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"654"}},[a._v("第二个方案，以录制视频的方式进行性能测试，优点是可以和 QA（Quality Assurance，表示测试人员）现有基础设施相结合。QA 测试时，不仅会测 H5 页面的首屏时间，还会测试 Native 页面的响应时间以及 App 内存使用和 CPU 占用等信息。由于测试项目较多，在这个过程中，QA 团队会沉淀一些测试基础设施，比如 App 代码覆盖率测试工具、异常测试平台、数据构造集成测试平台等，而录制视频是其中必不可少的手段。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"655"}},[a._v("所以，在性能测试上，我一般建议采用录制视频的方式来进行，除此之外，也方便后期的性能计算。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"656"}},[a._v("录制视频一般有手动方案和自动化方案。所谓手动方案就是通过手机自带的视频录制功能来进行，而自动化方案则是通过 adb 录制。前者比较简单也好理解，后者效率会很高，在这里我重点介绍一下通过 adb 录制的自动化方案。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"657"}},[a._v("adb 是 andorid studio下提供的一个工具，在电脑上通过它可以控制模拟器（也就是模拟手机）或者真实的手机设备（需要通过数据线连接到电脑）。比如我们可以通过它打开一个 App 页面，运行 shell 命令，安装软件等功能。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"658"}},[a._v("具体怎么做呢？执行 screenrecord 命令启动录屏功能，代码如下：")]),a._v(" "),s("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"659"}},[s("code",{attrs:{"data-language":"java"}},[a._v("adb shell screenrecord --time-limit "),s("span",{staticClass:"hljs-number"},[a._v("10")]),a._v(" /sdcard/perf.mp4\n")])]),a._v(" "),s("p",{attrs:{"data-nodeid":"660"}},[a._v("这里我设置了录屏时间为 10s ，如果不设置会默认时间为 180s，它会存储到 /sdcard/ 目录下，命名为 video.mp4。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"661"}},[a._v("接下来，我们打开一个 App 的页面，页面开始加载，然后在页面加载结束后，点击 ctrl+C 结束录屏，获得录制结果。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"662"}},[a._v("在录制过程中会有一些坑需要你注意下，大致有这几点。")]),a._v(" "),s("ul",{attrs:{"data-nodeid":"663"}},[s("li",{attrs:{"data-nodeid":"664"}},[s("p",{attrs:{"data-nodeid":"665"}},[a._v("有些设备的显示如分辨率过高可能无法录制，如果遇到这种情况可以通过指定分辨率来录制，示例代码如下：")])])]),a._v(" "),s("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"666"}},[s("code",{attrs:{"data-language":"java"}},[a._v("adb shell screenrecord --size "),s("span",{staticClass:"hljs-number"},[a._v("1280")]),a._v("*"),s("span",{staticClass:"hljs-number"},[a._v("720")]),a._v(" /sdcard/perf.mp4\n")])]),a._v(" "),s("ul",{attrs:{"data-nodeid":"667"}},[s("li",{attrs:{"data-nodeid":"668"}},[s("p",{attrs:{"data-nodeid":"669"}},[a._v("如果使用的模拟器，要注意模拟器在晃动、多点触摸等操作情况下替代不了真机，模拟器在性能和设备类型上也要慢一些，上限取决于你电脑的性能上限。")])]),a._v(" "),s("li",{attrs:{"data-nodeid":"670"}},[s("p",{attrs:{"data-nodeid":"671"}},[a._v("录制过程中不要旋转手机，因为这会造成画面切断。")])]),a._v(" "),s("li",{attrs:{"data-nodeid":"672"}},[s("p",{attrs:{"data-nodeid":"673"}},[a._v("可以在命令行显示log，有助于你的调试，如下所示：")])])]),a._v(" "),s("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"674"}},[s("code",{attrs:{"data-language":"java"}},[a._v("adb shell screenrecord --time-limit "),s("span",{staticClass:"hljs-number"},[a._v("10")]),a._v(" --verbose /sdcard/perf.mp4\n")])]),a._v(" "),s("h3",{attrs:{"data-nodeid":"675"}},[a._v("性能测试标准设定")]),a._v(" "),s("p",{attrs:{"data-nodeid":"676"}},[a._v("既然是要测试，就要有一个标准来判断某个性能是否达标。有关性能标准，我在第一讲里的关键指标设定介绍过，也在模块二专门说明了首屏时间、白屏时间、卡顿等的指标采集方案。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"677"}},[a._v("在这里我想说的是，首屏时间的性能测试标准设定，需要注意两点：")]),a._v(" "),s("ol",{attrs:{"data-nodeid":"678"}},[s("li",{attrs:{"data-nodeid":"679"}},[s("p",{attrs:{"data-nodeid":"680"}},[a._v("分频计算的标准，也就是什么时候认为首屏结束；")])]),a._v(" "),s("li",{attrs:{"data-nodeid":"681"}},[s("p",{attrs:{"data-nodeid":"682"}},[a._v("确定首屏时间的标准。")])])]),a._v(" "),s("p",{attrs:{"data-nodeid":"683"}},[a._v("其中，分频计算的标准，建议采用如下标准：")]),a._v(" "),s("p",{attrs:{"data-nodeid":"684"}},[a._v("白屏响应时间 = 白屏最后 - 帧的时间 - 点击时的起始帧时间")]),a._v(" "),s("p",{attrs:{"data-nodeid":"685"}},[a._v("首屏加载时间 = 内容完全加载出来那一帧的时间 - 点击时的起始帧时间")]),a._v(" "),s("p",{attrs:{"data-nodeid":"686"}},[a._v("首屏时间的标准，因为缺乏海量的数据，也无法直接使用之前的秒开率的标准，我们可以退而求其次，采用不同网络环境下的性能标准。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"687"}},[s("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/24/3E/Cgp9HWBYQqyAbswwAAD1t7w10sA670.png",alt:"Drawing 0.png","data-nodeid":"759"}})]),a._v(" "),s("p",{attrs:{"data-nodeid":"688"}},[a._v("如果你想要测试页面是否卡顿，它的标准我在前面也提到过："),s("strong",{attrs:{"data-nodeid":"764"}},[a._v("连续 5 帧超过 50ms，判定为卡顿；单帧渲染超过250ms，就可以判定为严重卡顿。")])]),a._v(" "),s("p",{attrs:{"data-nodeid":"689"}},[a._v("确定完时间标准后，紧跟着就是寻找合适的性能测环境，进行录屏然后计算视频分帧，也就是我一开始提到的第三步。")]),a._v(" "),s("h3",{attrs:{"data-nodeid":"690"}},[a._v("性能测试环境搭建及测试")]),a._v(" "),s("p",{attrs:{"data-nodeid":"691"}},[a._v("所谓的性能测试环境搭建，不是指需要搭建测试服务器及接口测试等，而是寻找合适的网络环境进行测试。由于现在的网络环境多样，比如有 WIFI，有常见的 3G、4G，有少见的 2G 弱网，还有现在流行的 5G 网络，在专项测试的时候，为了提前发现性能问题，我们需要考虑到各种网络环境下的情况。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"692"}},[a._v("那具体怎么做呢？这时候就会出现一个有趣的现象——有些人开始“神出鬼没”了。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"693"}},[a._v("比如，在 58 同城，各个业务（如房产、招聘、黄页、二手车等）都有自己的前端团队，每个团队开发完成的页面，需要集成到 58 App 里面，App 要求各个业务在性能结果方面达标。为了测试达标，前端和测试工程师就会到各种网络环境下来查看相关性能如何了。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"694"}},[a._v("像 2G 网络环境，由于在一定区域内，使用 2G 网络的人越少它的信号越好，比如半夜时分。所以，房产业务的前端和测试工程师，会深更半夜拿着手机，在公司旁边四处找 2G 网络信号好的地方录屏以作测试，甚至有时候会到公司旁边的星巴克进行。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"695"}},[a._v("无独有偶，腾讯微信团队也是如此，他们对第三方接入的 H5 ，会到周围各种网络环境下进行性能测试。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"696"}},[a._v("在这里，我分享下寻找网络环境的经验。一般 4G 信号容易受物体遮挡或者天气的影响，在空旷地点，天气晴朗情况下信号会明显好很多。当然，如果你留意过信号塔在哪里，附近的信号会更好。2G/3G 的话，一般来说信号很稳定，你在办公区域或者 WIFI 信号强的地方，使用弱网的人少时，信号一般是不错的，所以前面提到星巴克等一些咖啡厅是首选测试地点。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"697"}},[a._v("需要注意的是，此时的测试不要求平均时间，不需要关注首屏秒开率，只要在某种特定网络环境下首屏时间达标即可。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"698"}},[a._v("做完视频录屏之后，接下来我们当然可以人工去判断首屏结束时间，比如拿秒表去计算时间差。但这样做有两个缺点：一是人工去计算首屏时间的话，前后偏差几百毫秒很正常，准确性没有保证；二是人工判断，效率低，且没法和整体测试链路打通。比如，测试团队还需要对内存占用、CPU使用情况、流量、App 崩溃率等进行测试时，如果采用手动计算，就没法一次性采集到所有指标。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"699"}},[a._v("所以，一般我会建议采取分帧计算的方式进行。具体怎么做呢？主要分为下面三步：")]),a._v(" "),s("ol",{attrs:{"data-nodeid":"700"}},[s("li",{attrs:{"data-nodeid":"701"}},[s("p",{attrs:{"data-nodeid":"702"}},[a._v("安装 openCV、python ，通过 Python 的 VideoCapture 将视频分帧存储；")])]),a._v(" "),s("li",{attrs:{"data-nodeid":"703"}},[s("p",{attrs:{"data-nodeid":"704"}},[a._v("分帧图片命名，使用当前视频播放时间位置（毫秒）命名存储图片；")])]),a._v(" "),s("li",{attrs:{"data-nodeid":"705"}},[s("p",{attrs:{"data-nodeid":"706"}},[a._v("首屏时长计算 = 首屏结束帧文件名；")])])]),a._v(" "),s("p",{attrs:{"data-nodeid":"707"}},[a._v("最后，我们拿时长和标准对比即可知道性能是否达标。下面是基于 python 借助 openCV 库做的视频分帧计算。")]),a._v(" "),s("pre",{staticClass:"lang-python",attrs:{"data-nodeid":"708"}},[s("code",{attrs:{"data-language":"python"}},[s("span",{staticClass:"hljs-string"},[a._v('"""视频分帧"""')]),a._v("\n"),s("span",{staticClass:"hljs-keyword"},[a._v("import")]),a._v(" cv2\nvc = cv2.VideoCapture("),s("span",{staticClass:"hljs-string"},[a._v("r'C:\\Users\\admin\\Desktop\\1.mp4'")]),a._v(")  "),s("span",{staticClass:"hljs-comment"},[a._v("# 读入视频文件，命名cv")]),a._v("\nn = "),s("span",{staticClass:"hljs-number"},[a._v("1")]),a._v("  "),s("span",{staticClass:"hljs-comment"},[a._v("# 计数")]),a._v("\n"),s("span",{staticClass:"hljs-keyword"},[a._v("if")]),a._v(" vc.isOpened():  "),s("span",{staticClass:"hljs-comment"},[a._v("# 判断是否正常打开")]),a._v("\n    rval, frame = vc.read()\n"),s("span",{staticClass:"hljs-keyword"},[a._v("else")]),a._v(":\n    rval = "),s("span",{staticClass:"hljs-literal"},[a._v("False")]),a._v("\n \ntimeF = "),s("span",{staticClass:"hljs-number"},[a._v("10")]),a._v("  "),s("span",{staticClass:"hljs-comment"},[a._v("# 视频帧计数间隔频率")]),a._v("\n \ni = "),s("span",{staticClass:"hljs-number"},[a._v("0")]),a._v("\n"),s("span",{staticClass:"hljs-keyword"},[a._v("while")]),a._v(" rval:  "),s("span",{staticClass:"hljs-comment"},[a._v("# 循环读取视频帧")]),a._v("\n    rval, frame = vc.read()\n    "),s("span",{staticClass:"hljs-keyword"},[a._v("if")]),a._v(" (n % timeF == "),s("span",{staticClass:"hljs-number"},[a._v("0")]),a._v("):  "),s("span",{staticClass:"hljs-comment"},[a._v("# 每隔timeF帧进行存储操作")]),a._v("\n        i += "),s("span",{staticClass:"hljs-number"},[a._v("1")]),a._v("\n        print(i)\n        cv2.imwrite("),s("span",{staticClass:"hljs-string"},[a._v("r'C:\\Users\\admin\\Desktop\\1/{}.jpg'")]),a._v(".format(i), frame)  "),s("span",{staticClass:"hljs-comment"},[a._v("# 存储为图像")]),a._v("\n    n = n + "),s("span",{staticClass:"hljs-number"},[a._v("1")]),a._v("\n    cv2.waitKey("),s("span",{staticClass:"hljs-number"},[a._v("1")]),a._v(")\nvc.release()\n")])]),a._v(" "),s("p",{attrs:{"data-nodeid":"709"}},[a._v("首先，我引入 CV2 库，通过 VideoCapture 读入视频文件，然后通过设置计数间隔频率，比如我这里设置的是 10ms，循环来获取视频，最后通过 cv2.imwrite 来写入文件目录，我们就可以直接看该目录下的文件。")]),a._v(" "),s("h3",{attrs:{"data-nodeid":"710"}},[a._v("性能测试结果输出")]),a._v(" "),s("p",{attrs:{"data-nodeid":"711"}},[a._v("拿到视频分帧结果后，见下图")]),a._v(" "),s("p",{attrs:{"data-nodeid":"712"}},[s("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/24/3E/Cgp9HWBYQr-AQ0NzAAS9vRqw_FA271.png",alt:"Drawing 1.png","data-nodeid":"785"}})]),a._v(" "),s("p",{attrs:{"data-nodeid":"713"}},[a._v("图中一张一张的图片就是分帧处理的结果，文件名代表着加载帧时对应的时间，比如我们找到第14 张的图片，判断这个就是白屏结束的位置（图中红线框的部分），对应图片文件是2788.jpg，也就是说首屏时间是 2788ms。对照一下标准，WIFI 下首屏时间 2788ms，属于比较慢的情况，需要做优化。")]),a._v(" "),s("h3",{attrs:{"data-nodeid":"959"}},[a._v("小结")]),a._v(" "),s("p",{attrs:{"data-nodeid":"960"}},[s("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M01/27/94/CioPOWBdR8KAbhPpAAJvPUBn40U138.png",alt:"溪风的思维导图11.png","data-nodeid":"964"}})]),a._v(" "),s("p",{attrs:{"data-nodeid":"797"}},[a._v("好了，以上就是我们以首屏时间为例，介绍了如何进行性能专项测试，这里面还有一些注意事项：")]),a._v(" "),s("p",{staticClass:"te-preview-highlight",attrs:{"data-nodeid":"716"}},[a._v("一是在视频分帧计算时，我们 openCV 最好能借助 brew（ Mac 环境下）进行安装，如果没有 brew 的话（ Windows 等环境下），可以通过 Anaconda 来安装这个软件；")]),a._v(" "),s("p",{attrs:{"data-nodeid":"717"}},[a._v("二是计算首屏时间方面，我们前文提到的首屏时间判断，是通过人工提取对应着首屏时间的那一帧。我们后来试着用图像识别的方式去自动提取首屏时间对应的那一帧。这样做的目的主要是提高准确度，以及提高效率。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"718"}},[a._v("具体是这么做的呢？")]),a._v(" "),s("p",{attrs:{"data-nodeid":"719"}},[a._v("我们拿到视频分帧计算结果后，通过图像识别的系统，去判断关键帧—— 首屏时间对应那一帧。哪个是关键帧呢？我们认为图片从不稳定到图片稳定那一刹那的时间就是关键帧。 当两张图片的变化值小于 5%，即可认为图片趋于稳定，我们以 95 分位值为判定值，如果内容 95% 都不发生变化，则下一帧即认为是视觉稳定的时间点，也就是首屏时间点。")]),a._v(" "),s("p",{attrs:{"data-nodeid":"720"}},[a._v("除了首屏时间，其他性能测试如白屏时间、卡顿等，我们也可以采用本讲提到的 4 大步骤进行。现在给你留个问题：")]),a._v(" "),s("blockquote",{attrs:{"data-nodeid":"721"}},[s("p",{attrs:{"data-nodeid":"722"}},[a._v("我里面并没有提卡顿指标 FPS 如何获取，那么请问如何利用本讲的性能测试方案去获取呢？")])]),a._v(" "),s("p",{attrs:{"data-nodeid":"723"}},[a._v("欢迎在评论区写下你的思考。下一讲我们将介绍，Hybrid 下的性能优化整体分析。")]),a._v(" "),s("hr"),a._v(" "),s("h3",{attrs:{id:"精选评论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#精选评论"}},[a._v("#")]),a._v(" 精选评论")]),a._v(" "),s("h5",{attrs:{id:"宽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宽"}},[a._v("#")]),a._v(" *宽：")]),a._v(" "),s("blockquote",[s("p",[a._v("pc端的页面如何测试呢，也采取视频录制吗？")])]),a._v(" "),s("h6",{attrs:{id:"讲师回复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复"}},[a._v("#")]),a._v("     讲师回复：")]),a._v(" "),s("blockquote",[s("p",[a._v("    这种方式本身不区分PC端和移动端，PC端可以QuicktimePlay，然后OpenCV分帧即可。")])]),a._v(" "),s("h5",{attrs:{id:"乐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#乐"}},[a._v("#")]),a._v(" **乐：")]),a._v(" "),s("blockquote",[s("p",[a._v("如何测试C/S前端服务器的性能？")])]),a._v(" "),s("h6",{attrs:{id:"讲师回复-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-2"}},[a._v("#")]),a._v("     讲师回复：")]),a._v(" "),s("blockquote",[s("p",[a._v("    这个和测试后端服务器的性能思路是一样的")])])])}),[],!1,null,null,null);t.default=v.exports}}]);