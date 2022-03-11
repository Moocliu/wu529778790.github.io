(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{594:function(t,a,d){"use strict";d.r(a);var _=d(15),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,d=t._self._c||a;return d("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[d("p",{attrs:{"data-nodeid":"617"}},[t._v("2014 年底我刚刚入职 58 同城，高级总监有一天找到我说，咱们性能问题经常出现，能不能给优化一下。刚开始我的想法是，天下武功，唯快不破，召集几个高 T，短平快解决掉问题。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"618"}},[t._v("很快我发现这个任务很模糊，现在性能是怎样的，不清楚，也没法量化，而要让这个任务清晰，需要搭建一个性能监控平台，而搭建性能监控平台，不单需要前端团队去开发，还需要和数据组一起协作，对性能采集数据做统计分析，想到这些，我瞬间头大了。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"619"}},[t._v("根据多年工作经验，我意识到，性能优化，无论在哪个公司都属于跨团队的事情。比如，我当时就需要房产和招聘这两个业务部门，以及前端和后端这两个职能团队的支持。为了确保目标清晰、一致，也为了协作顺利，快速完成任务，我们专门成立了一个项目组进行性能立项和实施。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"620"}},[t._v("这一讲呢，我就以当时的这个案例来为你介绍下，除了必要的优化技术手段，在性能优化整个过程中，我们需要注意些什么问题。")]),t._v(" "),d("h3",{attrs:{"data-nodeid":"621"}},[t._v("性能立项")]),t._v(" "),d("p",{attrs:{"data-nodeid":"622"}},[t._v("性能立项就是通过成立一个项目组，用项目化的运作方式来解决性能问题。整个立项流程包括团队成员确定、技术调研开展、项目目标制定、获取业务侧支持、项目名字选定，需求范围和优先级确定等过程。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"623"}},[t._v("不知道你有没有发现，这个立项不是先定需求范围和优先级，然后再制定项目目标和成立项目团队。为什么呢？")]),t._v(" "),d("p",{attrs:{"data-nodeid":"624"}},[t._v("因为这个性能优化项目，是探索性的项目需求。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"625"}},[t._v("探索性项目需求，有别于日常的业务项目。业务项目一般都有明确的项目目标和需求修改范围。比如，修改首页金刚位模块，提升首页到列表页的转户率。这个项目，需求文档和 UI 图会给出具体模块修改点、样式、内容等，前端开发完成后，产品和 UI 进行验收即可。而探索性项目需求，目标不确定，一般需要先选定项目团队，做完技术调研，才能确定出项目目标。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"626"}},[t._v("因为探索性项目需求中的项目目标制定、获取业务侧支持、项目立项时机这三点和常规项目不太一样，下面我就为你重点介绍一下。")]),t._v(" "),d("h4",{attrs:{"data-nodeid":"627"}},[t._v("项目目标制定")]),t._v(" "),d("p",{attrs:{"data-nodeid":"628"}},[t._v("性能项目的目标制定是一个正推和反推结合的过程。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"629"}},[t._v("正推是指，从线索 -> 本质或痛点问题 -> 解决方案 -> 目标。我们寻找到项目线索，找到性能具体问题，试验了解决方案，得到一个结果。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"630"}},[t._v("这个项目中，最终项目首屏时间可以减少 10%，对应 VPPV 可以提升 3%。但是我判断，3%的收入提升这个结果对公司来说，吸引力不够，因为平时波动都有 2%，要达成一个“性感”的目标，至少需要提升 10%的收入提升。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"631"}},[t._v("什么叫 VPPV 呢？VPPV 就是详情页的 UV 除以列表页的 PV，这个指标和最终收入正相关，通俗一点来说就是，来店里的用户中，有多少最后买了东西。为了方便介绍，这里我省去了VPPV 到广告收入的转化过程，用 VPPV 代替收益。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"632"}},[t._v("那么，怎么实现 10% 的收入提升呢？这时候就需要反推的过程。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"633"}},[t._v("什么叫反推呢？这是它的过程：从目标->解决方案->本质或痛点->线索。想要 10% 的收入提升（VPPV），至少需要 30% 的性能提升，对应的方案、问题痛点、性能线索都要能支持这个结果。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"634"}},[t._v("最后，我把正推和反推结合起来就能得出一个目标，即通过性能提升 30%，实现收入提升 10%。")]),t._v(" "),d("h4",{attrs:{"data-nodeid":"635"}},[t._v("获取业务侧支持")]),t._v(" "),d("p",{attrs:{"data-nodeid":"636"}},[t._v("项目目标制定完，接下来就是如何说服业务侧支持这个项目。因为前端团队一般都投入在各个业务方向，要做性能优化，就需要说服业务将部分前端资源投到这个性能优化项目上来。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"637"}},[t._v("此时，为了评估值不值得花时间在这上面，前端同学会和你提到项目收益，比如，他会问，加载时间提升了多少，可以学习新技术 react hook，vue3等。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"638"}},[t._v("一般业务同事想到项目收益，通常是流量增加多少、转化率提升多少，跳失率降低多少等。要想让对方理解性能优化项目的收益，我们就要了解业务的关注点，从业务的角度去思考，去回答。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"639"}},[t._v("以这个项目为例，我们给项目起了名字叫奥林匹亚项目，更高更快更强的意思。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"640"}},[t._v("有关它的预期收益，我们最初想的是，通过请求资源优化，将首屏时间提升 30%。后来为了让业务同事更直观理解项目收益，我们就把目标修改成了“通过性能提升 30%，提升页面 VPPV 10%”。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"641"}},[t._v("业务看到后面一个目标很有共鸣，觉得我们不是为了自己做一个技术项目，而是实实在在想提升业务体验，帮助达成业务收入指标。")]),t._v(" "),d("h4",{attrs:{"data-nodeid":"642"}},[t._v("立项时机")]),t._v(" "),d("p",{attrs:{"data-nodeid":"643"}},[t._v("看到这个小标题，你可能要问了，什么时候立项合适，这有什么讲的呀，不是项目之初就开始立项吗？")]),t._v(" "),d("p",{attrs:{"data-nodeid":"644"}},[t._v("对此，我的理解是，一定要先做好技术可行性调研，性能优化是横向项目，会涉及多个业务，最好在试点两个业务后，再正式立项。否则，会出现你用了一个列表页筛选优化的方案，适合 A 业务场景，却不适合 B 业务场景的问题。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"645"}},[t._v("做完这些后，我们就可以正式开始立项了。以下是我们的立项信息。")]),t._v(" "),d("blockquote",{attrs:{"data-nodeid":"646"}},[d("p",{attrs:{"data-nodeid":"647"}},[t._v("投入资源：前端 FE10 人，后端RD 4 人，UI设计 4 人，测试 2 人。"),d("br"),t._v("\n投入价值：20 人，2 个月，40 人月，约 XXw。"),d("br"),t._v("\n收获价值：访问量，VPPV 提升 10%，订单提升 8%，约 XXX 万美金/季度。")])]),t._v(" "),d("p",{attrs:{"data-nodeid":"648"}},[t._v("立项完成后，接下来我们就可以去找性能线索，有针对性地去优化。此时，就需要依赖于性能监控预警平台。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"649"}},[t._v("当时我们一开始也想过从 0 到 1 完整做一个性能监控平台，但因为时间和人力关系，只能作罢。最后，我们直接选取了一个运维同事已经在用的一个开源展示平台，来做数据展示，至于具体的数据指标定义和采集，就需要我们自己来做了。")]),t._v(" "),d("h3",{attrs:{"data-nodeid":"650"}},[t._v("性能诊断优化")]),t._v(" "),d("p",{attrs:{"data-nodeid":"651"}},[t._v("有了性能监控平台，也有了性能数据，接下来就是结合页面加载过程，进行性能问题诊断和优化了。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"652"}},[t._v("页面加载的性能瓶颈点在上一讲我已经介绍过了，在这里就不多说了。当时我们主要是通过本地缓存方案来减少客户端请求数，同时让运维同事对静态资源配置了合理的过期时间，实现静态资源的强缓存方案。另外还对页面做了 DNS 预解析处理，也对一些广告和帮帮页（58 同城的 WebIM 应用，用于用户的咨询使用）做了懒加载。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"653"}},[t._v("为了确保页面解析不会中断，我们还对列表页的加载资源做了处理，也制定了 CSS 相关的规范，确保嵌套层次更少，让规则解析更简单。原先列表页的筛选功能使用的是同步技术，每次完成筛选，整个页面都需要重新加载一次，这一次我们把它修改成了 SPA 单页面应用，每次筛选后，只请求数据接口即可，不用整个页面都请求。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"654"}},[t._v("现在回过头来看，列表页改成单页面应用的方案，对我们最终 VPPV 的提升贡献最大，且在当时的情况下，属于比较前沿的解决方案。而弱网下的性能优化，当时我们花了很长时间才发现问题原因，它是当时的一个难点，也是前端优化中的盲区。所以，接下来我向你重点介绍一下这两个。")]),t._v(" "),d("h4",{attrs:{"data-nodeid":"655"}},[t._v("列表页改单页面应用")]),t._v(" "),d("p",{attrs:{"data-nodeid":"656"}},[t._v("列表页主要用来展示分类下的列表信息，根据用户的筛选项，将搜索结果展示给用户。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"657"}},[t._v("把列表页改成单页面，面临的第一个难题就是 VUE/React 还处于早期阶段，贸然给业务同事使用，会趟不少坑。还有就是，这些页面都在搜索引擎和其他 App 做了广告投放，需要考虑 SEO， 也就是说，URL 要和原来的页面保持一致的同时，支持爬虫够抓取和解析。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"658"}},[t._v("我调研过程中发现，与直接切换 VUE/React 技术栈相比，现有的列表页模板修改成单页面应用，风险上要小很多，所以最终采用的是列表页模板的单页面实现。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"659"}},[t._v("另外我还发现，浏览器的 History API 方案刚好能够支持单页面应用和原页面URL保持一致。具体来说，通过其中的 pushState 修改 URL 和历史记录，能确保筛选后的 URL 和原来保持一致，通过它的回退等功能操作，也可以回到上一个页面。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"660"}},[t._v("对于SEO这块儿，为了确保爬虫能够抓取解析这个页面，如果页面逻辑和数据展现是通过JavaScript 动态获取加载数据，那么爬虫就无法解析抓取到的页面。为此，我额外提供了一套服务端模板，如果页面访问头是爬虫的话，就走服务端模板，反之如果是个人用户的话，就走单页面应用。")]),t._v(" "),d("h4",{attrs:{"data-nodeid":"661"}},[t._v("弱网下性能优化")]),t._v(" "),d("p",{attrs:{"data-nodeid":"662"}},[t._v("当时上线前夕刚好遇到招聘业务，最后发现数据并不及预期，怎么回事呢？我们怎么测试都没发现问题，后来在家里 2G 网络下测试了一下，发现白屏了。问题是不是出在这里呢？")]),t._v(" "),d("p",{attrs:{"data-nodeid":"663"}},[t._v("接下来，我就针对用户网络分布做了网络测速，网络测速过程中，发现我们的弱网（2G、 3G）用户超过 50%。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"664"}},[t._v("于是，接下来我们就针对弱网环境做了以下优化手段。")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"665"}},[d("li",{attrs:{"data-nodeid":"666"}},[d("p",{attrs:{"data-nodeid":"667"}},[t._v("因为弱网下一个请求都需要 2s，而原来的列表页数据接口请求大约26个请求，于是我们就尽可能合并请求，最后合并到了 11个。")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"668"}},[d("p",{attrs:{"data-nodeid":"669"}},[t._v("小图标采用 Base64 Encoding 的方式，内嵌于页面中，不用额外发网络请求来获取。")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"670"}},[d("p",{attrs:{"data-nodeid":"671"}},[t._v("针对弱网（特别是移动网络），不自动加载图片，只显示本占位图。")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"672"}},[t._v("通过以上优化方式后，首屏时间从 2.5s 提升到 1.5s。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"673"}},[t._v("最后，还有一个教训就是，如果性能优化涉及多条业务线，最好是先把一条业务打透，确保收入数据确实提升了，再推广到其他业务。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"674"}},[t._v("当时我们的性能优化涉及五条业务线：二手，房产，招聘，黄页，二手车。我在做优化的时候同时选了招聘和房产业务，结果因为一个问题，业务收入没有如预期的那样提升 10%，而是直接降低了 20%，并且是两条业务数据一起降，业务部门对此意见很大。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"675"}},[t._v("我印象中每天晚上 12 点计算出统计数据后，发一封邮件告诉业务同学和老板，今天的数据是利好还是利空。如果是利空，还需要顶着业务同学压力，通过性能优化，把收入数据优化提升上去，这个过程中非常艰难。")]),t._v(" "),d("h3",{attrs:{"data-nodeid":"929"}},[t._v("小结")]),t._v(" "),d("p",{attrs:{"data-nodeid":"930"}},[d("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/0E/6E/CioPOWA8g6GAE1UMAAIKDTnUTKg935.png",alt:"溪风的思维导图.png","data-nodeid":"934"}})]),t._v(" "),d("p",{attrs:{"data-nodeid":"772"}},[t._v("我们经过性能立项、性能采集和性能监控诊断，最后落实实施。到了这一步就结束了吗？不，还有几个点，还要思考：这个项目到底沉淀下来了什么，是造轮子还是为业务打下了坚厚的基建基础？")]),t._v(" "),d("p",{attrs:{"data-nodeid":"678"}},[t._v("当然，性能监控预警平台肯定是一个大的沉淀，但是除此之外呢？怎么确保一个新人，在做性能优化时也能做到 80 分的水平？所以，这就需要我们把那些优化过程中的最佳实践沉淀下来。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"679"}},[t._v("未来如果有人 Review 这段代码，你希望学到什么？之前一个阿里的朋友，提到这个问题，他的回答是，希望有人抱拳说受教了。当时我们没有这么高的期望，只希望后来的同学看到这段代码时，别吐槽给留了一些坑。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"680"}},[t._v("所以，我也希望，在实际工作当中，你在性能优化之后记得把经验沉淀下来，可以写成文档或代码。这一点记得我在第一讲的时候也提到过，在这里我再强调一下。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"681"}},[t._v("好了讲完这些，给大家留一个问题。")]),t._v(" "),d("blockquote",{attrs:{"data-nodeid":"682"}},[d("p",{attrs:{"data-nodeid":"683"}},[t._v("优化前后如何对比数据，如果我们只是对比上线前后的数据，怎么排除这段时间业务升级带来的影响？")])]),t._v(" "),d("p",{attrs:{"data-nodeid":"684"}},[t._v("可以把答案写在评论区哦，下一讲我将介绍首屏时间指标采集。")]),t._v(" "),d("hr",{attrs:{"data-nodeid":"685"}}),t._v(" "),d("p",{attrs:{"data-nodeid":"686"}},[d("a",{attrs:{href:"https://shenceyun.lagou.com/t/mka","data-nodeid":"761"}},[d("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/05/7D/CioPOWAwzC2AW_ZLAAdqMM6w3z0058.png",alt:"微信图片_20210218174704.png","data-nodeid":"760"}})])]),t._v(" "),d("p",{attrs:{"data-nodeid":"687"}},[d("strong",{attrs:{"data-nodeid":"765"}},[t._v("《大前端高薪训练营》")])]),t._v(" "),d("p",{attrs:{"data-nodeid":"688"}},[t._v("12 个月打磨，6 个月训练，优秀学员大厂内推，"),d("a",{attrs:{href:"https://shenceyun.lagou.com/t/mka","data-nodeid":"769"}},[t._v("点击报名，高薪有你")]),t._v("！")]),t._v(" "),d("hr"),t._v(" "),d("h3",{attrs:{id:"精选评论"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#精选评论"}},[t._v("#")]),t._v(" 精选评论")]),t._v(" "),d("h5",{attrs:{id:"好"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#好"}},[t._v("#")]),t._v(" **好：")]),t._v(" "),d("blockquote",[d("p",[t._v("这个案例分析确实学到了，主要学到如何推动事情的这个方式，多谢")])]),t._v(" "),d("h5",{attrs:{id:"_5741"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_5741"}},[t._v("#")]),t._v(" **5741：")]),t._v(" "),d("blockquote",[d("p",[t._v("性能分析过程没有或者说细节太少，性能优化分析深度不足，这是我看完给的评价")])]),t._v(" "),d("h6",{attrs:{id:"讲师回复"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),d("blockquote",[d("p",[t._v("    感谢反馈，让我了解到大家的期望，后续将持续改进。")])]),t._v(" "),d("h5",{attrs:{id:"华"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#华"}},[t._v("#")]),t._v(" **华：")]),t._v(" "),d("blockquote",[d("p",[t._v("这节课程学到了何为立项，立项预研和成立阶段，以及立项之后的技术与业务部门的权衡利弊。关于最后的问题，希望老师有空解答一下")])]),t._v(" "),d("h6",{attrs:{id:"讲师回复-2"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-2"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),d("blockquote",[d("p",[t._v("    有收获就好，点赞。本质上是要做AB测试，分50%流量到优化前版本，分50%流量到优化后版本，近期升级，AB版都要升，08讲有专门讲到")])]),t._v(" "),d("h5",{attrs:{id:"_6400"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_6400"}},[t._v("#")]),t._v(" **6400：")]),t._v(" "),d("blockquote",[d("p",[t._v("通过AB test 来实现?不过没想到具体的方案，求老师指点")])]),t._v(" "),d("h6",{attrs:{id:"讲师回复-3"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-3"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),d("blockquote",[d("p",[t._v("    如果公司没有ABtest的方案，需要先从后端去实现这个方案，可以采用随机数取模的方式去做分流，纯前端的方案我们还在实现中，实现完可以和你沟通。")])]),t._v(" "),d("h5",{attrs:{id:"亮"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#亮"}},[t._v("#")]),t._v(" **亮：")]),t._v(" "),d("blockquote",[d("p",[t._v("想要 10% 的收入提升（VPPV），至少需要 30% 的性能提升 这个结论是怎么推出来的呢")])]),t._v(" "),d("h6",{attrs:{id:"讲师回复-4"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-4"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),d("blockquote",[d("p",[t._v("    这个是在我们业务根据转化率推算+实验得出的。和业务转化率，业务收入类型（如广告型业务）、业务当前性能现状有关。")])]),t._v(" "),d("h5",{attrs:{id:"_5741-2"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_5741-2"}},[t._v("#")]),t._v(" **5741：")]),t._v(" "),d("blockquote",[d("p",[t._v("学习新技术 react hook，vue3 和提高移动端M站的性能有什么必然关系？没看出来")])]),t._v(" "),d("h6",{attrs:{id:"讲师回复-5"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-5"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),d("blockquote",[d("p",[t._v("    可能我没表达清楚，这里是想说，前端工程师普遍看重的项目收益来源于用了什么新技术，我希望的技术价值为业务创造了什么价值。")])]),t._v(" "),d("h5",{attrs:{id:"娟"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#娟"}},[t._v("#")]),t._v(" **娟：")]),t._v(" "),d("blockquote",[d("p",[t._v("列表页模板的单页面实现可以具体说说吗？")])]),t._v(" "),d("h6",{attrs:{id:"讲师回复-6"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-6"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),d("blockquote",[d("p",[t._v("    15年底借助h5 pushstate做的单页面模板，现在的话可以直接用vue了。")])])])}),[],!1,null,null,null);a.default=v.exports}}]);