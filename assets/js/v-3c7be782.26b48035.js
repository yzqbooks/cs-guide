"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[89731],{58860:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-3c7be782","path":"/frontend/basic-js/fetch.html","title":"使用fetch","lang":"zh-CN","frontmatter":{"summary":"使用fetch 使用方法 @code","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/frontend/basic-js/fetch.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"使用fetch"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-24T22:42:20.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-05-24T22:42:20.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"使用方法","slug":"使用方法","children":[]}],"git":{"createdTime":1650201329000,"updatedTime":1653432140000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":2}]},"readingTime":{"minutes":0.64,"words":192},"filePathRelative":"frontend/basic-js/fetch.md","localizedDate":"2022年4月17日"}')},11831:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(66252);const p=(0,t.uE)('<h1 id="使用fetch" tabindex="-1"><a class="header-anchor" href="#使用fetch" aria-hidden="true">#</a> 使用fetch</h1><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Example POST method implementation:</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">postData</span><span class="token punctuation">(</span>url <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Default options are marked with *</span>\n  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token comment">// *GET, POST, PUT, DELETE, etc.</span>\n    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;cors&#39;</span><span class="token punctuation">,</span> <span class="token comment">// no-cors, *cors, same-origin</span>\n    <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">&#39;no-cache&#39;</span><span class="token punctuation">,</span> <span class="token comment">// *default, no-cache, reload, force-cache, only-if-cached</span>\n    <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token string">&#39;same-origin&#39;</span><span class="token punctuation">,</span> <span class="token comment">// include, *same-origin, omit</span>\n    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span>\n      <span class="token comment">// &#39;Content-Type&#39;: &#39;application/x-www-form-urlencoded&#39;,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;follow&#39;</span><span class="token punctuation">,</span> <span class="token comment">// manual, *follow, error</span>\n    <span class="token literal-property property">referrerPolicy</span><span class="token operator">:</span> <span class="token string">&#39;no-referrer&#39;</span><span class="token punctuation">,</span> <span class="token comment">// no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url</span>\n    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">// body data type must match &quot;Content-Type&quot; header</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// parses JSON response into native JavaScript objects</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">postData</span><span class="token punctuation">(</span><span class="token string">&#39;https://example.com/answer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">answer</span><span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// JSON data parsed by `data.json()` call</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),e=(0,t._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,t._)("pre",{class:"language-html"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("button")]),(0,t.Uk)(),(0,t._)("span",{class:"token special-attr"},[(0,t._)("span",{class:"token attr-name"},"onclick"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},"'"),(0,t._)("span",{class:"token value javascript language-javascript"},[(0,t._)("span",{class:"token function"},"fun1"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")")]),(0,t._)("span",{class:"token punctuation"},"'")])]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("点击我 1"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("button")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"})])],-1),o=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"fun1"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token function"},"fetch"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'http://httpbin.org/get'"),(0,t._)("span",{class:"token punctuation"},","),(0,t._)("span",{class:"token punctuation"},"{"),(0,t._)("span",{class:"token literal-property property"},"mode"),(0,t._)("span",{class:"token operator"},":"),(0,t._)("span",{class:"token string"},"'no-cors'"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"then"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"response"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(" response"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"json"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"then"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"data"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(" console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("data"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"})])],-1),c=(0,t.uE)('<iframe style="width:100%;border:1px solid cyan;" src="/cs-guide/fetch.html"></iframe><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>element-plus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Access-Control-Allow-Origin<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/axios<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showMsg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>element-plus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{msg1}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showAxios<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>获取标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{msg2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n      axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>crossDomain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;hhhhh&quot;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">msg1</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">msg2</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token keyword">async</span> <span class="token function">showAxios</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>\n              <span class="token string">&quot;https://www.jianshu.com/shakespeare/v2/notes/recommend&quot;</span><span class="token punctuation">,</span>\n              <span class="token punctuation">{</span>\n                <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                  <span class="token string-property property">&quot;Access-Control-Allow-Headers&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span>\n                  <span class="token string-property property">&quot;Access-Control-Allow-Origin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>msg2 <span class="token operator">=</span> data<span class="token punctuation">;</span>\n            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span>msg2 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token function">showMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">fetch</span><span class="token punctuation">(</span>\n              <span class="token string">&quot;https://118.89.204.198/resolv?host=www.zhihu.com&amp;os_type=web&quot;</span><span class="token punctuation">,</span>\n              <span class="token punctuation">{</span>\n                <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;cors&quot;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">)</span>\n              <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span>\n              <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>msg1 <span class="token operator">=</span> data<span class="token punctuation">;</span>\n                <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                  <span class="token keyword">this</span><span class="token punctuation">.</span>msg1 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span>\n              <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error:&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment">// 使用setup</span>\n      <span class="token comment">// const { createApp, reactive, toRefs } = Vue;</span>\n      <span class="token comment">// const data = reactive({</span>\n      <span class="token comment">//   state: 12,</span>\n      <span class="token comment">// });</span>\n      <span class="token comment">// const app = createApp({</span>\n      <span class="token comment">//   setup() {</span>\n      <span class="token comment">//     return {</span>\n      <span class="token comment">//       ...toRefs(data),</span>\n      <span class="token comment">//     };</span>\n      <span class="token comment">//   },</span>\n      <span class="token comment">// });</span>\n      <span class="token comment">// app.mount(&quot;#app&quot;);</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),l={},u=(0,a(83744).Z)(l,[["render",function(n,s){const a=(0,t.up)("CodeDemo");return(0,t.wg)(),(0,t.iD)("div",null,[p,(0,t.Wm)(a,{id:"code-demo-2bfca1c0",type:"normal",code:"%7B%22html%22%3A%22%3Cbutton%20onclick%3D'fun1()'%3E%E7%82%B9%E5%87%BB%E6%88%91%201%3C%2Fbutton%3E%5Cn%22%2C%22js%22%3A%22function%20fun1()%7B%5Cn%20%20%20%20fetch('http%3A%2F%2Fhttpbin.org%2Fget'%2C%7Bmode%3A'no-cors'%7D)%5Cn%20%20.then(response%20%3D%3E%20response.json())%5Cn%20%20.then(data%20%3D%3E%20console.log(data))%3B%5Cn%5Cn%7D%5Cn%22%7D"},{default:(0,t.w5)((()=>[e,o])),_:1}),c])}]])}}]);