System.register(["./vendor-legacy.d2a5cd34.js"],(function(t){"use strict";var e,d,n,r,o;return{setters:[function(t){e=t.e,d=t.g,n=t.t,r=t.G,o=t.o}],execute:function(){const a={class:"markdown-body"},c=r('<h1>NoticeBar 通告栏</h1><h3>介绍</h3><p>用于循环播放展示一组消息通知。</p><h3>安装</h3><pre><code class="language-javascript">\nimport { createApp } from &#39;vue&#39;;\n// vue\nimport { NoticeBar } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(NoticeBar);\n\n</code></pre><h3>代码示例</h3><h3>基本用法</h3><pre><code class="language-html">    &lt;nut-noticebar\n      text=&quot;华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！&quot;\n    &gt;&lt;/nut-noticebar&gt;\n</code></pre><h3>禁用滚动</h3><p>文字内容多于一行时，可通过scrollable参数控制是否开启滚动</p><pre><code class="language-html">    &lt;nut-noticebar\n      text=&quot;华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！&quot;\n      :scrollable=&quot;false&quot;\n    &gt;&lt;/nut-noticebar&gt;\n</code></pre><h3>通告栏模式–关闭模式</h3><pre><code class="language-html">    &lt;nut-noticebar\n      :closeMode=&quot;true&quot;\n      @click=&quot;hello&quot;\n    &gt;华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！\n    &lt;/nut-noticebar&gt;\n</code></pre><h3>通告栏模式–链接模式</h3><pre><code class="language-html">    &lt;nut-noticebar\n      left-icon=&quot;https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png&quot;\n    &gt;\n      &lt;a href=&quot;https://www.jd.com&quot;&gt;京东商城&lt;/a&gt;\n    &lt;/nut-noticebar&gt;\n</code></pre><h3>纵向滚动</h3><pre><code class="language-html">&lt;nut-noticebar direction=&#39;vertical&#39; :list=&quot;horseLamp1&quot; :speed=&#39;10&#39; :standTime=&#39;1000&#39;  @click=&#39;go&#39; :closeMode=&quot;true&quot;&gt;&lt;/nut-noticebar&gt;\n</code></pre><pre><code class="language-javascript">data() {\n    return {\n        horseLamp1: [&#39;惊喜红包免费领&#39;, &#39;爆款准点秒&#39;, &#39;买超值优惠&#39;, &#39;赢百万京豆&#39;],\n    };\n},\n\nmethods:{\n    go(item){\n        console.log(item)\n    }\n}\n</code></pre><h3>复杂滚动动画</h3><pre><code class="language-html">&lt;nut-noticebar direction=&#39;vertical&#39; :list=&quot;horseLamp2&quot; :speed=&#39;10&#39; :standTime=&#39;2000&#39; :complexAm=&#39;true&#39;&gt;&lt;/nut-noticebar&gt;\n</code></pre><pre><code class="language-javascript">data() {\n    return {\n        horseLamp2: [&#39;惊喜红包免费领&#39;, &#39;爆款准点秒&#39;, &#39;买超值优惠&#39;, &#39;赢百万京豆&#39;],\n    };\n}\n</code></pre><h3>自定义滚动内容</h3>',22),l={class:"language-html"},s=r('<pre><code class="language-javascript">data() {\n    return {\n        horseLamp3: [&#39;惊喜红包免费领&#39;, &#39;爆款准点秒&#39;, &#39;买超值优惠&#39;, &#39;赢百万京豆&#39;],\n    };\n}\n</code></pre><h3>纵向自定义右侧图标</h3><pre><code class="language-html">&lt;nut-noticebar direction=&#39;vertical&#39; :list=&quot;horseLamp1&quot; :speed=&#39;10&#39; :standTime=&#39;1000&#39; &gt;\n  &lt;template v-slot:rightIcon&gt;\n    &lt;nut-icon \n      type=&quot;trolley&quot; \n      color=&quot;#f0250f&quot;\n    &gt;\n    &lt;/nut-icon&gt;\n\n  &lt;/template&gt;\n&lt;/nut-noticebar&gt;\n</code></pre><pre><code class="language-javascript">data() {\n    return {\n        horseLamp1: [&#39;惊喜红包免费领&#39;, &#39;爆款准点秒&#39;, &#39;买超值优惠&#39;, &#39;赢百万京豆&#39;],\n    };\n}\n</code></pre><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>direction</td><td>滚动的方向，可选 across、vertical</td><td>String</td><td>across</td></tr><tr><td>text</td><td>提示的信息</td><td>String</td><td>空</td></tr><tr><td>closeMode</td><td>是否启用关闭模式</td><td>Boolean</td><td>false</td></tr><tr><td>leftIcon</td><td>close为没有左边icon,其他为自定义的图片链接，没有为默认图片</td><td>String</td><td>空</td></tr><tr><td>color</td><td>导航栏的文字颜色</td><td>String</td><td>空</td></tr><tr><td>background</td><td>导航栏的背景颜色</td><td>String</td><td>空</td></tr><tr><td>delay</td><td>延时多少秒</td><td>String/Number</td><td>1</td></tr><tr><td>scrollable</td><td>是否可以滚动</td><td>Boolean</td><td>true</td></tr><tr><td>speed</td><td>滚动速率 (px/s)</td><td>Number</td><td>50</td></tr></tbody></table><h3>Prop（direction=vertical）</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>list</td><td>纵向滚动数据列表</td><td>Array</td><td>[]</td></tr><tr><td>speed</td><td>滚动的速度</td><td>Number</td><td>50</td></tr><tr><td>standTime</td><td>停留时间(毫秒)</td><td>Number</td><td>1000</td></tr><tr><td>complexAm</td><td>稍复杂的动画，耗能会高</td><td>Boolean</td><td>false</td></tr><tr><td>height</td><td>每一个滚动列的高度(px)，注意：在使用 slot 插槽定义滚动单元时，按照实际高度修改此值</td><td>Number</td><td>40</td></tr><tr><td>closeMode</td><td>是否启用右侧关闭图标，可以通过slot[name=rightIcon]自定义图标</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>外层点击事件回调</td><td>event: Event</td></tr><tr><td>close</td><td>关闭通知栏时触发</td><td>event: Event</td></tr></tbody></table>',10);t("default",{setup:t=>(t,r)=>(o(),e("div",a,[c,d("pre",null,[d("code",l,"<nut-noticebar direction='vertical' :height='50' :speed='10' :standTime='1000' :list=\"[]\"  @close='go'>\n  <div class=\"custom-item\" :data-index='index' v-for=\"(item,index) in horseLamp3\" :key=\"index\">"+n(t.item)+"</div>\n</nut-noticebar>\n",1)]),s]))})}}}));
