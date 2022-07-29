"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[78558],{79434:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-60348cfa","path":"/frontend/others/js-run-method.html","title":"这一次，彻底弄懂 JavaScript 执行机制","lang":"zh-CN","frontmatter":{"summary":"这一次，彻底弄懂 JavaScript 执行机制 本文的目的就是要保证你彻底弄懂javascript的执行机制，如果读完本文还不懂，可以揍我。 不论你是javascript新手还是老鸟，不论是面试求职，还是日常开发工作，我们经常会遇到这样的情况：给定的几行代码，我们需要知道其输出内容和顺序。因为javascript是一门单线程语言，所以我们可以得出结论： j","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/frontend/others/js-run-method.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"这一次，彻底弄懂 JavaScript 执行机制"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-05T00:09:15.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-05T00:09:15.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"1.关于javascript","slug":"_1-关于javascript","children":[]},{"level":3,"title":"2.javascript事件循环","slug":"_2-javascript事件循环","children":[]},{"level":3,"title":"3.又爱又恨的setTimeout","slug":"_3-又爱又恨的settimeout","children":[]},{"level":3,"title":"4.又恨又爱的setInterval","slug":"_4-又恨又爱的setinterval","children":[]},{"level":3,"title":"5.Promise与process.nextTick(callback)","slug":"_5-promise与process-nexttick-callback","children":[]},{"level":3,"title":"6.写在最后","slug":"_6-写在最后","children":[]}],"git":{"createdTime":1647947241000,"updatedTime":1654387755000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":3}]},"readingTime":{"minutes":11.76,"words":3527},"filePathRelative":"frontend/others/js-run-method.md","localizedDate":"2022年3月22日"}')},90427:(n,s,a)=>{a.r(s),a.d(s,{default:()=>h});var t=a(66252);const e=(0,t.uE)('<h1 id="这一次-彻底弄懂-javascript-执行机制" tabindex="-1"><a class="header-anchor" href="#这一次-彻底弄懂-javascript-执行机制" aria-hidden="true">#</a> 这一次，彻底弄懂 JavaScript 执行机制</h1><p>本文的目的就是要保证你彻底弄懂javascript的执行机制，如果读完本文还不懂，可以揍我。</p><p>不论你是javascript新手还是老鸟，不论是面试求职，还是日常开发工作，我们经常会遇到这样的情况：给定的几行代码，我们需要知道其输出内容和顺序。因为javascript是一门单线程语言，所以我们可以得出结论：</p><ul><li>javascript是按照语句出现的顺序执行的</li></ul><p>看到这里读者要打人了：我难道不知道js是一行一行执行的？还用你说？稍安勿躁，正因为js是一行一行执行的，所以我们以为js都是这样的：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n复制代码\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/20/15fd87f7221d0dbe~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img" loading="lazy"></p><p>然而实际上js是这样的：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;定时器开始啦&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;马上执行for循环啦&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        i <span class="token operator">==</span> <span class="token number">99</span> <span class="token operator">&amp;&amp;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;执行then函数啦&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;代码执行结束&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n复制代码\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/20/15fd87d38acc4905~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img" loading="lazy"></p><p>依照<strong>js是按照语句出现的顺序执行</strong>这个理念，我自信的写下输出结果：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//&quot;定时器开始啦&quot;</span>\n<span class="token comment">//&quot;马上执行for循环啦&quot;</span>\n<span class="token comment">//&quot;执行then函数啦&quot;</span>\n<span class="token comment">//&quot;代码执行结束&quot;</span>\n复制代码\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>去chrome上验证下，结果完全不对，瞬间懵了，说好的一行一行执行的呢？</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/20/15fd8840f3c3f109~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img" loading="lazy"></p><p>我们真的要彻底弄明白javascript的执行机制了。</p><h3 id="_1-关于javascript" tabindex="-1"><a class="header-anchor" href="#_1-关于javascript" aria-hidden="true">#</a> 1.关于javascript</h3><p>javascript是一门<strong>单线程</strong>语言，在最新的HTML5中提出了Web-Worker，但javascript是单线程这一核心仍未改变。所以一切javascript版的&quot;多线程&quot;都是用单线程模拟出来的，一切javascript多线程都是纸老虎！</p><h3 id="_2-javascript事件循环" tabindex="-1"><a class="header-anchor" href="#_2-javascript事件循环" aria-hidden="true">#</a> 2.javascript事件循环</h3><p>既然js是单线程，那就像只有一个窗口的银行，客户需要排队一个一个办理业务，同理js任务也要一个一个顺序执行。如果一个任务耗时过长，那么后一个任务也必须等着。那么问题来了，假如我们想浏览新闻，但是新闻包含的超清图片加载很慢，难道我们的网页要一直卡着直到图片完全显示出来？因此聪明的程序员将任务分为两类：</p><ul><li>同步任务</li><li>异步任务</li></ul><p>当我们打开网站时，网页的渲染过程就是一大堆同步任务，比如页面骨架和页面元素的渲染。而像加载图片音乐之类占用资源大耗时久的任务，就是异步任务。关于这部分有严格的文字定义，但本文的目的是用最小的学习成本彻底弄懂执行机制，所以我们用导图来说明：</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/21/15fdd88994142347~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img" loading="lazy"></p><p>导图要表达的内容用文字来表述的话：</p><ul><li>同步和异步任务分别进入不同的执行&quot;场所&quot;，同步的进入主线程，异步的进入Event Table并注册函数。</li><li>当指定的事情完成时，Event Table会将这个函数移入Event Queue。</li><li>主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。</li><li>上述过程会不断重复，也就是常说的Event Loop(事件循环)。</li></ul><p>我们不禁要问了，那怎么知道主线程执行栈为空啊？js引擎存在monitoring process进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去Event Queue那里检查是否有等待被调用的函数。</p><p>说了这么多文字，不如直接一段代码更直白：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">url</span><span class="token operator">:</span>www<span class="token punctuation">.</span>javascript<span class="token punctuation">.</span>com<span class="token punctuation">,</span>\n    <span class="token literal-property property">data</span><span class="token operator">:</span>data<span class="token punctuation">,</span>\n    <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;发送成功!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;代码执行结束&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n复制代码\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是一段简易的<code>ajax</code>请求代码：</p><ul><li>ajax进入Event Table，注册回调函数<code>success</code>。</li><li>执行<code>console.log(&#39;代码执行结束&#39;)</code>。</li><li>ajax事件完成，回调函数<code>success</code>进入Event Queue。</li><li>主线程从Event Queue读取回调函数<code>success</code>并执行。</li></ul><p>相信通过上面的文字和代码，你已经对js的执行顺序有了初步了解。接下来我们来研究进阶话题：setTimeout。</p><h3 id="_3-又爱又恨的settimeout" tabindex="-1"><a class="header-anchor" href="#_3-又爱又恨的settimeout" aria-hidden="true">#</a> 3.又爱又恨的setTimeout</h3><p>大名鼎鼎的<code>setTimeout</code>无需再多言，大家对他的第一印象就是异步可以延时执行，我们经常这么实现延时3秒执行：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;延时3秒&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span>\n复制代码\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渐渐的<code>setTimeout</code>用的地方多了，问题也出现了，有时候明明写的延时3秒，实际却5，6秒才执行函数，这又咋回事啊？</p><p>先看一个例子：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;执行console&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n复制代码\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据前面我们的结论，<code>setTimeout</code>是异步的，应该先执行<code>console.log</code>这个同步任务，所以我们的结论是：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//执行console</span>\n<span class="token comment">//task()</span>\n复制代码\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>去验证一下，结果正确！ 然后我们修改一下前面的代码：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span>\n\n<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10000000</span><span class="token punctuation">)</span>\n复制代码\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>乍一看其实差不多嘛，但我们把这段代码在chrome执行一下，却发现控制台执行<code>task()</code>需要的时间远远超过3秒，说好的延时三秒，为啥现在需要这么长时间啊？</p><p>这时候我们需要重新理解<code>setTimeout</code>的定义。我们先说上述代码是怎么执行的：</p><ul><li><code>task()</code>进入Event Table并注册,计时开始。</li><li>执行<code>sleep</code>函数，很慢，非常慢，计时仍在继续。</li><li>3秒到了，计时事件<code>timeout</code>完成，<code>task()</code>进入Event Queue，但是<code>sleep</code>也太慢了吧，还没执行完，只好等着。</li><li><code>sleep</code>终于执行完了，<code>task()</code>终于从Event Queue进入了主线程执行。</li></ul><p>上述的流程走完，我们知道<code>setTimeout</code>这个函数，是经过指定时间后，把要执行的任务(本例中为<code>task()</code>)加入到Event Queue中，又因为是单线程任务要一个一个执行，如果前面的任务需要的时间太久，那么只能等着，导致真正的延迟时间远远大于3秒。</p><p>我们还经常遇到<code>setTimeout(fn,0)</code>这样的代码，0秒后执行又是什么意思呢？是不是可以立即执行呢？</p><p>答案是不会的，<code>setTimeout(fn,0)</code>的含义是，指定某个任务在主线程最早可得的空闲时间执行，意思就是不用再等多少秒了，只要主线程执行栈内的同步任务全部执行完成，栈为空就马上执行。举例说明：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//代码1</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;先执行这里&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;执行啦&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n复制代码\n<span class="token comment">//代码2</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;先执行这里&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;执行啦&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n复制代码\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码1的输出结果是：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//先执行这里</span>\n<span class="token comment">//执行啦</span>\n复制代码\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码2的输出结果是：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//先执行这里</span>\n<span class="token comment">// ... 3s later</span>\n<span class="token comment">// 执行啦</span>\n复制代码\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于<code>setTimeout</code>要补充的是，即便主线程为空，0毫秒实际上也是达不到的。根据HTML的标准，最低是4毫秒。有兴趣的同学可以自行了解。</p><h3 id="_4-又恨又爱的setinterval" tabindex="-1"><a class="header-anchor" href="#_4-又恨又爱的setinterval" aria-hidden="true">#</a> 4.又恨又爱的setInterval</h3><p>上面说完了<code>setTimeout</code>，当然不能错过它的孪生兄弟<code>setInterval</code>。他俩差不多，只不过后者是循环的执行。对于执行顺序来说，<code>setInterval</code>会每隔指定的时间将注册的函数置入Event Queue，如果前面的任务耗时太久，那么同样需要等待。</p><p>唯一需要注意的一点是，对于<code>setInterval(fn,ms)</code>来说，我们已经知道不是每过<code>ms</code>秒会执行一次<code>fn</code>，而是每过<code>ms</code>秒，会有<code>fn</code>进入Event Queue。一旦**<code>setInterval</code>的回调函数<code>fn</code>执行时间超过了延迟时间<code>ms</code>，那么就完全看不出来有时间间隔了**。这句话请读者仔细品味。</p><h3 id="_5-promise与process-nexttick-callback" tabindex="-1"><a class="header-anchor" href="#_5-promise与process-nexttick-callback" aria-hidden="true">#</a> 5.Promise与process.nextTick(callback)</h3><p>传统的定时器我们已经研究过了，接着我们探究<code>Promise</code>与<code>process.nextTick(callback)</code>的表现。</p>',57),p=(0,t._)("code",null,"Promise",-1),o=(0,t.Uk)("的定义和功能本文不再赘述，不了解的读者可以学习一下阮一峰老师的"),c={href:"https://link.juejin.cn?target=http%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fpromise",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("Promise"),l=(0,t.Uk)("。而"),u=(0,t._)("code",null,"process.nextTick(callback)",-1),d=(0,t.Uk)('类似node.js版的"setTimeout"，在事件循环的下一次循环中调用 callback 回调函数。'),r=(0,t.uE)('<p>我们进入正题，除了广义的同步任务和异步任务，我们对任务有更精细的定义：</p><ul><li>macro-task(宏任务)：包括整体代码script，setTimeout，setInterval</li><li>micro-task(微任务)：Promise，process.nextTick</li></ul><p>不同类型的任务会进入对应的Event Queue，比如<code>setTimeout</code>和<code>setInterval</code>会进入相同的Event Queue。</p><p>事件循环的顺序，决定js代码的执行顺序。进入整体代码(宏任务)后，开始第一次循环。接着执行所有的微任务。然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有的微任务。听起来有点绕，我们用文章最开始的一段代码说明：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setTimeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;then&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;console&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n复制代码\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这段代码作为宏任务，进入主线程。</li><li>先遇到<code>setTimeout</code>，那么将其回调函数注册后分发到宏任务Event Queue。(注册过程与上同，下文不再描述)</li><li>接下来遇到了<code>Promise</code>，<code>new Promise</code>立即执行，<code>then</code>函数分发到微任务Event Queue。</li><li>遇到<code>console.log()</code>，立即执行。</li><li>好啦，整体代码script作为第一个宏任务执行结束，看看有哪些微任务？我们发现了<code>then</code>在微任务Event Queue里面，执行。</li><li>ok，第一轮事件循环结束了，我们开始第二轮循环，当然要从宏任务Event Queue开始。我们发现了宏任务Event Queue中<code>setTimeout</code>对应的回调函数，立即执行。</li><li>结束。</li></ul><p>事件循环，宏任务，微任务的关系如图所示：</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/21/15fdcea13361a1ec~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img" loading="lazy"></p><p>我们来分析一段较复杂的代码，看看你是否真的掌握了js的执行机制：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nprocess<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;6&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;7&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;8&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;9&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;11&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;12&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n复制代码\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一轮事件循环流程分析如下：</p><ul><li>整体script作为第一个宏任务进入主线程，遇到<code>console.log</code>，输出1。</li><li>遇到<code>setTimeout</code>，其回调函数被分发到宏任务Event Queue中。我们暂且记为<code>setTimeout1</code>。</li><li>遇到<code>process.nextTick()</code>，其回调函数被分发到微任务Event Queue中。我们记为<code>process1</code>。</li><li>遇到<code>Promise</code>，<code>new Promise</code>直接执行，输出7。<code>then</code>被分发到微任务Event Queue中。我们记为<code>then1</code>。</li><li>又遇到了<code>setTimeout</code>，其回调函数被分发到宏任务Event Queue中，我们记为<code>setTimeout2</code>。</li></ul><table><thead><tr><th>宏任务Event Queue</th><th>微任务Event Queue</th></tr></thead><tbody><tr><td>setTimeout1</td><td>process1</td></tr><tr><td>setTimeout2</td><td>then1</td></tr></tbody></table><ul><li>上表是第一轮事件循环宏任务结束时各Event Queue的情况，此时已经输出了1和7。</li><li>我们发现了<code>process1</code>和<code>then1</code>两个微任务。</li><li>执行<code>process1</code>,输出6。</li><li>执行<code>then1</code>，输出8。</li></ul><p>好了，第一轮事件循环正式结束，这一轮的结果是输出1，7，6，8。那么第二轮时间循环从<code>setTimeout1</code>宏任务开始：</p><ul><li>首先输出2。接下来遇到了<code>process.nextTick()</code>，同样将其分发到微任务Event Queue中，记为<code>process2</code>。<code>new Promise</code>立即执行输出4，<code>then</code>也分发到微任务Event Queue中，记为<code>then2</code>。</li></ul><table><thead><tr><th>宏任务Event Queue</th><th>微任务Event Queue</th></tr></thead><tbody><tr><td>setTimeout2</td><td>process2</td></tr><tr><td></td><td>then2</td></tr></tbody></table><ul><li>第二轮事件循环宏任务结束，我们发现有<code>process2</code>和<code>then2</code>两个微任务可以执行。</li><li>输出3。</li><li>输出5。</li><li>第二轮事件循环结束，第二轮输出2，4，3，5。</li><li>第三轮事件循环开始，此时只剩setTimeout2了，执行。</li><li>直接输出9。</li><li>将<code>process.nextTick()</code>分发到微任务Event Queue中。记为<code>process3</code>。</li><li>直接执行<code>new Promise</code>，输出11。</li><li>将<code>then</code>分发到微任务Event Queue中，记为<code>then3</code>。</li></ul><table><thead><tr><th>宏任务Event Queue</th><th>微任务Event Queue</th></tr></thead><tbody><tr><td></td><td>process3</td></tr><tr><td></td><td>then3</td></tr></tbody></table><ul><li>第三轮事件循环宏任务执行结束，执行两个微任务<code>process3</code>和<code>then3</code>。</li><li>输出10。</li><li>输出12。</li><li>第三轮事件循环结束，第三轮输出9，11，10，12。</li></ul><p>整段代码，共进行了三次事件循环，完整的输出为1，7，6，8，2，4，3，5，9，11，10，12。 (请注意，node环境下的事件监听依赖libuv与前端环境不完全相同，输出顺序可能会有误差)</p><h3 id="_6-写在最后" tabindex="-1"><a class="header-anchor" href="#_6-写在最后" aria-hidden="true">#</a> 6.写在最后</h3><h4 id="_1-js的异步" tabindex="-1"><a class="header-anchor" href="#_1-js的异步" aria-hidden="true">#</a> (1)js的异步</h4><p>我们从最开头就说javascript是一门单线程语言，不管是什么新框架新语法糖实现的所谓异步，其实都是用同步的方法去模拟的，牢牢把握住单线程这点非常重要。</p><h4 id="_2-事件循环event-loop" tabindex="-1"><a class="header-anchor" href="#_2-事件循环event-loop" aria-hidden="true">#</a> (2)事件循环Event Loop</h4><p>事件循环是js实现异步的一种方法，也是js的执行机制。</p><h4 id="_3-javascript的执行和运行" tabindex="-1"><a class="header-anchor" href="#_3-javascript的执行和运行" aria-hidden="true">#</a> (3)javascript的执行和运行</h4><p>执行和运行有很大的区别，javascript在不同的环境下，比如node，浏览器，Ringo等等，执行方式是不同的。而运行大多指javascript解析引擎，是统一的。</p><h4 id="_4-setimmediate" tabindex="-1"><a class="header-anchor" href="#_4-setimmediate" aria-hidden="true">#</a> (4)setImmediate</h4><p>微任务和宏任务还有很多种类，比如<code>setImmediate</code>等等，执行都是有共同点的，有兴趣的同学可以自行了解。</p><h4 id="_5-最后的最后" tabindex="-1"><a class="header-anchor" href="#_5-最后的最后" aria-hidden="true">#</a> (5)最后的最后</h4><ul><li>javascript是一门单线程语言</li><li>Event Loop是javascript的执行机制</li></ul><p>牢牢把握两个基本点，以认真学习javascript为中心，早日实现成为前端高手的伟大梦想！</p>',33),k=(0,t.Uk)("作者：ssssyoki 链接："),v={href:"https://juejin.cn/post/6844903512845860872",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("https://juejin.cn/post/6844903512845860872"),b=(0,t.Uk)(" 来源：稀土掘金 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"),g={},h=(0,a(83744).Z)(g,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t._)("p",null,[p,o,(0,t._)("a",c,[i,(0,t.Wm)(a)]),l,u,d]),r,(0,t._)("p",null,[k,(0,t._)("a",v,[m,(0,t.Wm)(a)]),b])])}]])}}]);