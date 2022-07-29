"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[96851],{63999:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-cd212628","path":"/java-tutor/stackoverflow/read-convert-an-inputstream-to-a-string.html","title":"将InputStream转换为String","lang":"zh-CN","frontmatter":{"summary":"将InputStream转换为String 使用Apache库 不重复造轮子。最靠谱的方法，还是用Apache commons IOUtils 这样简单几行代码就搞定了 或者 使用原生库 如果不想引入Apache库，也可以这样做 stackoverflow讨论地址","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/java-tutor/stackoverflow/read-convert-an-inputstream-to-a-string.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"将InputStream转换为String"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-03-22T11:07:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-03-22T11:07:21.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"使用Apache库","slug":"使用apache库","children":[]},{"level":3,"title":"使用原生库","slug":"使用原生库","children":[]}],"git":{"createdTime":1647947241000,"updatedTime":1647947241000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":0.44,"words":132},"filePathRelative":"java-tutor/stackoverflow/read-convert-an-inputstream-to-a-string.md","localizedDate":"2022年3月22日"}')},66811:(n,a,s)=>{s.r(a),s.d(a,{default:()=>r});var t=s(66252);const e=(0,t.uE)('<h1 id="将inputstream转换为string" tabindex="-1"><a class="header-anchor" href="#将inputstream转换为string" aria-hidden="true">#</a> 将InputStream转换为String</h1><h3 id="使用apache库" tabindex="-1"><a class="header-anchor" href="#使用apache库" aria-hidden="true">#</a> 使用Apache库</h3><p>不重复造轮子。最靠谱的方法，还是用Apache commons IOUtils 这样简单几行代码就搞定了</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">StringWriter</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">IOUtils</span><span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">,</span> writer<span class="token punctuation">,</span> encoding<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">String</span> theString <span class="token operator">=</span> writer<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> theString <span class="token operator">=</span> <span class="token class-name">IOUtils</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">,</span> encoding<span class="token punctuation">)</span><span class="token comment">//这个方法其实封装了上面的方法，减少了一个参数</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用原生库" tabindex="-1"><a class="header-anchor" href="#使用原生库" aria-hidden="true">#</a> 使用原生库</h3><p>如果不想引入Apache库，也可以这样做</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">convertStreamToString</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>InputStream</span> is<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Scanner</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Scanner</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">useDelimiter</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> s<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',9),p=(0,t.Uk)("stackoverflow讨论地址 "),o={href:"http://stackoverflow.com/questions/309424/read-convert-an-inputstream-to-a-string",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("http://stackoverflow.com/questions/309424/read-convert-an-inputstream-to-a-string"),i={},r=(0,s(83744).Z)(i,[["render",function(n,a){const s=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t._)("p",null,[p,(0,t._)("a",o,[c,(0,t.Wm)(s)])])])}]])}}]);