"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[47259],{83646:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-6567eb23","path":"/java-tutor/java-tips/java-snip.html","title":"一些java常用的片段","lang":"zh-CN","frontmatter":{"summary":"一些java常用的片段 更改java版本 我想用java17怎么办呢? ​ 在plugin里面加这个,就可以了 时间转换","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/java-tutor/java-tips/java-snip.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"一些java常用的片段"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-04-05T15:17:32.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-04-05T15:17:32.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"更改java版本","slug":"更改java版本","children":[]},{"level":2,"title":"时间转换","slug":"时间转换","children":[]}],"git":{"createdTime":1649171852000,"updatedTime":1649171852000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":0.3,"words":89},"filePathRelative":"java-tutor/java-tips/java-snip.md","localizedDate":"2022年4月5日"}')},36769:(a,n,s)=>{s.r(n),s.d(n,{default:()=>c});var t=s(66252);const p=[(0,t.uE)('<h1 id="一些java常用的片段" tabindex="-1"><a class="header-anchor" href="#一些java常用的片段" aria-hidden="true">#</a> 一些java常用的片段</h1><h2 id="更改java版本" tabindex="-1"><a class="header-anchor" href="#更改java版本" aria-hidden="true">#</a> 更改java版本</h2><p>我想用java17怎么办呢? ​</p><p>在plugin里面加这个,就可以了</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>maven-compiler-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.8.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span><span class="token punctuation">&gt;</span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>source</span><span class="token punctuation">&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>target</span><span class="token punctuation">&gt;</span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>target</span><span class="token punctuation">&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoding</span><span class="token punctuation">&gt;</span></span>utf-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoding</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时间转换" tabindex="-1"><a class="header-anchor" href="#时间转换" aria-hidden="true">#</a> 时间转换</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1.</span>Timestamp 转 <span class="token class-name">LocalDateTime</span> \n<span class="token class-name">Timestamp</span> time <span class="token operator">=</span> <span class="token class-name">Timestamp</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token class-name">Instant</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">LocalDateTime</span> localDateTime <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">toLocalDateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token number">2.L</span>ocalDateTime  转 <span class="token class-name">Timestamp</span>\n <span class="token class-name">DateTimeFormatter</span> dtf <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">Timestamp</span> time <span class="token operator">=</span> <span class="token class-name">Timestamp</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>dtf<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',7)],e={},c=(0,s(83744).Z)(e,[["render",function(a,n){return(0,t.wg)(),(0,t.iD)("div",null,p)}]])}}]);