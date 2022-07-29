"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[71101],{47045:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-7379efe7","path":"/frontend/snippets/awesome-js-console.html","title":"一些在控制台好用的js脚本","lang":"zh-CN","frontmatter":{"summary":"一些在控制台好用的js脚本 在iconfont批量添加图标 https://www.iconfont.cn/collections 或者 抖音获取喜欢的列表 获取所有的cookie","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/frontend/snippets/awesome-js-console.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"一些在控制台好用的js脚本"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-30T11:07:55.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-30T11:07:55.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"在iconfont批量添加图标","slug":"在iconfont批量添加图标","children":[]},{"level":2,"title":"抖音获取喜欢的列表","slug":"抖音获取喜欢的列表","children":[]},{"level":2,"title":"获取所有的cookie","slug":"获取所有的cookie","children":[]}],"git":{"createdTime":1649050438000,"updatedTime":1656587275000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":3}]},"readingTime":{"minutes":0.57,"words":171},"filePathRelative":"frontend/snippets/awesome-js-console.md","localizedDate":"2022年4月4日"}')},43021:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(66252);const p=(0,t._)("h1",{id:"一些在控制台好用的js脚本",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#一些在控制台好用的js脚本","aria-hidden":"true"},"#"),(0,t.Uk)(" 一些在控制台好用的js脚本")],-1),o=(0,t._)("h2",{id:"在iconfont批量添加图标",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#在iconfont批量添加图标","aria-hidden":"true"},"#"),(0,t.Uk)(" 在iconfont批量添加图标")],-1),e={href:"https://www.iconfont.cn/collections",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("https://www.iconfont.cn/collections"),i=(0,t.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 先选择最外层的ul</span>\n<span class="token keyword">let</span> ul<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.block-icon-list.clearfix&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>children\n<span class="token comment">// 然后遍历子类li</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> li <span class="token keyword">of</span> ul<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    li<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.cover-item.iconfont.cover-item-line.icon-gouwuche1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token operator">...</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.cover-item.iconfont.cover-item-line.icon-gouwuche1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token operator">=&gt;</span>i<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment">//获取所有的iconname</span>\n<span class="token keyword">let</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">[</span><span class="token operator">...</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.icon-name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token operator">=&gt;</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>innerText<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抖音获取喜欢的列表" tabindex="-1"><a class="header-anchor" href="#抖音获取喜欢的列表" aria-hidden="true">#</a> 抖音获取喜欢的列表</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">[</span><span class="token operator">...</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.B3AsdZT9.chmb2GX8.UwG3qaZV&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>href<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取所有的cookie" tabindex="-1"><a class="header-anchor" href="#获取所有的cookie" aria-hidden="true">#</a> 获取所有的cookie</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> pairs <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> cookies <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pairs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> pair <span class="token operator">=</span> pairs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;=&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pair<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>pair<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> cookies<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\n<span class="token keyword">var</span> log <span class="token operator">=</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;%c[Log]%c %s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;color:cyan&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;%cfoo%c%s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;color:red&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;=bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',8),l={},u=(0,a(83744).Z)(l,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[p,o,(0,t._)("p",null,[(0,t._)("a",e,[c,(0,t.Wm)(a)])]),i])}]])}}]);