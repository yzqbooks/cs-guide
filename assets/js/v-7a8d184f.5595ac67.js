"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[21845],{4862:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-7a8d184f","path":"/frontend/vue-tutor/highlight-code.html","title":"代码高亮","lang":"zh-CN","frontmatter":{"summary":"代码高亮 代码高亮可以使用highlight.js或者prismjs 可以使用highlight.js自己封装组件 官网 @code 如何使用 prismjs 官网 示例 @code","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/frontend/vue-tutor/highlight-code.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"代码高亮"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-05T00:09:15.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-05T00:09:15.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"可以使用highlight.js自己封装组件","slug":"可以使用highlight-js自己封装组件","children":[]},{"level":2,"title":"如何使用","slug":"如何使用","children":[]},{"level":2,"title":"prismjs","slug":"prismjs","children":[]}],"git":{"createdTime":1649576450000,"updatedTime":1654387755000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":2}]},"readingTime":{"minutes":0.31,"words":92},"filePathRelative":"frontend/vue-tutor/highlight-code.md","localizedDate":"2022年4月10日"}')},32417:(n,s,a)=>{a.r(s),a.d(s,{default:()=>k});var t=a(66252);const p=(0,t.uE)('<h1 id="代码高亮" tabindex="-1"><a class="header-anchor" href="#代码高亮" aria-hidden="true">#</a> 代码高亮</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>代码高亮可以使用highlight.js或者prismjs</p></div><h2 id="可以使用highlight-js自己封装组件" tabindex="-1"><a class="header-anchor" href="#可以使用highlight-js自己封装组件" aria-hidden="true">#</a> 可以使用highlight.js自己封装组件</h2>',3),e={href:"https://highlightjs.org/",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("官网"),c=(0,t.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> h<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> defineComponent<span class="token punctuation">,</span> Plugin<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> hljs <span class="token keyword">from</span> <span class="token string">&quot;highlight.js/lib/core&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&quot;highlight.js/styles/atom-one-dark.css&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">escapeHtml</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> value\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&amp;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&amp;amp;&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&amp;lt;&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&amp;gt;&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&quot;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&amp;quot;&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&#39;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&amp;#x27;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> Highlight <span class="token operator">=</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  props<span class="token operator">:</span> <span class="token punctuation">{</span>\n    code<span class="token operator">:</span> <span class="token punctuation">{</span>\n      type<span class="token operator">:</span> String<span class="token punctuation">,</span>\n      required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    language<span class="token operator">:</span> <span class="token punctuation">{</span>\n      type<span class="token operator">:</span> String<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    autodetect<span class="token operator">:</span> <span class="token punctuation">{</span>\n      type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    ignoreIllegals<span class="token operator">:</span> <span class="token punctuation">{</span>\n      type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> language <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>language<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">watch</span><span class="token punctuation">(</span>\n      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>language<span class="token punctuation">,</span>\n      <span class="token punctuation">(</span>newLanguage<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        language<span class="token punctuation">.</span>value <span class="token operator">=</span> newLanguage<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> autodetect <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>autodetect <span class="token operator">||</span> <span class="token operator">!</span>language<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> cannotDetectLanguage <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>\n      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>autodetect<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>hljs<span class="token punctuation">.</span><span class="token function">getLanguage</span><span class="token punctuation">(</span>language<span class="token punctuation">.</span>value<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> className <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>cannotDetectLanguage<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hljs </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>language<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> highlightedCode <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token comment">// No idea what language to use, return raw code</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>cannotDetectLanguage<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>\n          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">The language &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>language<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; you specified could not be found.</span><span class="token template-punctuation string">`</span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token function">escapeHtml</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>autodetect<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> result <span class="token operator">=</span> hljs<span class="token punctuation">.</span><span class="token function">highlightAuto</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        language<span class="token punctuation">.</span>value <span class="token operator">=</span> result<span class="token punctuation">.</span>language <span class="token operator">??</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> result<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> result <span class="token operator">=</span> hljs<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>code<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n          language<span class="token operator">:</span> language<span class="token punctuation">.</span>value<span class="token punctuation">,</span>\n          ignoreIllegals<span class="token operator">:</span> props<span class="token punctuation">.</span>ignoreIllegals<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> result<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      className<span class="token punctuation">,</span>\n      highlightedCode<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;pre&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>\n      <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        <span class="token keyword">class</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>className<span class="token punctuation">,</span>\n        innerHTML<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>highlightedCode<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// const plugin: Plugin &amp; { component: typeof component } = {</span>\n<span class="token comment">//   install(app) {</span>\n<span class="token comment">//     app.component(&quot;highlightjs&quot;, component);</span>\n<span class="token comment">//   },</span>\n<span class="token comment">//   component,</span>\n<span class="token comment">// };</span>\n\n<span class="token comment">// export default plugin;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> Highlight<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- bind to a data property named `code` --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>highlight</span> <span class="token attr-name">autodetect</span> <span class="token attr-name">:code</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>code<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token comment">&lt;!-- or literal code works as well --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>highlight</span> <span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>javascript<span class="token punctuation">&#39;</span></span> <span class="token attr-name">code</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>let x = 5;<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prismjs" tabindex="-1"><a class="header-anchor" href="#prismjs" aria-hidden="true">#</a> prismjs</h2>',4),l={href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("官网"),u=(0,t.uE)('<p>示例</p><iframe style="height:25rem;width:100%;border:1px solid cyan;" src="/cs-guide/prism.html"></iframe><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    ...\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/prismjs@1.27.0/themes/prism-tomorrow.min.css<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>language-javascript line-numbers<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\nimport { h, ref } from &#39;vue&#39;\n\nconst RedDiv = (_, ctx) =&gt; h(\n  &#39;div&#39;,\n  {\n    class: &#39;red-div&#39;,\n  },\n  ctx.slots.default()\n)\nconst msg = &#39;Markdown 中的 Vue&#39;\nconst count = ref(0)\n                \n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/prismjs@1.27.0/components/prism-core.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/prismjs@1.27.0/plugins/autoloader/prism-autoloader.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),r={},k=(0,a(83744).Z)(r,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[p,(0,t._)("p",null,[(0,t._)("a",e,[o,(0,t.Wm)(a)])]),c,(0,t._)("p",null,[(0,t._)("a",l,[i,(0,t.Wm)(a)])]),u])}]])}}]);