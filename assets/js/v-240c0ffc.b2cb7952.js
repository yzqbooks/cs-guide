"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[3661],{33299:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-240c0ffc","path":"/frontend/basic-css/transform.html","title":"变形","lang":"zh-CN","frontmatter":{"summary":"变形 尝试一下 import { h, ref } from \'vue\' let cssList= ref([ {transform: \'matrix(1, 2, 3, 4, 5, 6)\'}, {transform:\' translate(120px, 50%)\'}, {transform: \'scale(2, 0.5)\'}, {transform: \'ro","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/frontend/basic-css/transform.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"变形"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-18T20:12:43.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-18T20:12:43.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"尝试一下","slug":"尝试一下","children":[]}],"git":{"createdTime":1658156029000,"updatedTime":1658175163000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":2}]},"readingTime":{"minutes":0.67,"words":201},"filePathRelative":"frontend/basic-css/transform.md","localizedDate":"2022年7月18日"}')},96791:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(66252),p=a(2262);const o=(0,t._)("h1",{id:"变形",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#变形","aria-hidden":"true"},"#"),(0,t.Uk)(" 变形")],-1),e=(0,t._)("h2",{id:"尝试一下",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#尝试一下","aria-hidden":"true"},"#"),(0,t.Uk)(" 尝试一下")],-1),c=(0,t.uE)('<p>语法</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Keyword values */</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n\n<span class="token comment">/* Function values */</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">matrix</span><span class="token punctuation">(</span>1.0<span class="token punctuation">,</span> 2.0<span class="token punctuation">,</span> 3.0<span class="token punctuation">,</span> 4.0<span class="token punctuation">,</span> 5.0<span class="token punctuation">,</span> 6.0<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>12px<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2em<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>3in<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0.5turn<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>30deg<span class="token punctuation">,</span> 20deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skewX</span><span class="token punctuation">(</span>30deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skewY</span><span class="token punctuation">(</span>1.07rad<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">matrix3d</span><span class="token punctuation">(</span>1.0<span class="token punctuation">,</span> 2.0<span class="token punctuation">,</span> 3.0<span class="token punctuation">,</span> 4.0<span class="token punctuation">,</span> 5.0<span class="token punctuation">,</span> 6.0<span class="token punctuation">,</span> 7.0<span class="token punctuation">,</span> 8.0<span class="token punctuation">,</span> 9.0<span class="token punctuation">,</span> 10.0<span class="token punctuation">,</span> 11.0<span class="token punctuation">,</span> 12.0<span class="token punctuation">,</span> 13.0<span class="token punctuation">,</span> 14.0<span class="token punctuation">,</span> 15.0<span class="token punctuation">,</span> 16.0<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>12px<span class="token punctuation">,</span> 50%<span class="token punctuation">,</span> 3em<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale3d</span><span class="token punctuation">(</span>2.5<span class="token punctuation">,</span> 1.2<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleZ</span><span class="token punctuation">(</span>0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate3d</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span> 2.0<span class="token punctuation">,</span> 3.0<span class="token punctuation">,</span> 10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>17px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* Multiple function values */</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span> <span class="token function">translateY</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* Global values */</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>\n<span class="token property">transform</span><span class="token punctuation">:</span> unset<span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),u={__name:"transform.html",setup(n){let s=(0,p.iH)([{transform:"matrix(1, 2, 3, 4, 5, 6)"},{transform:" translate(120px, 50%)"},{transform:"scale(2, 0.5)"},{transform:"rotate(0.5turn)"},{transform:"rotateX(10deg)"},{transform:"skew(30deg, 20deg)"},{transform:"scale(0.5) translate(-100%, -100%)"},{transform:"translate3d(12px, 50%, 3em)"}]),a=(0,p.iH)("https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg");return(n,u)=>{const i=(0,t.up)("CssDemo");return(0,t.wg)(),(0,t.iD)("div",null,[o,e,(0,t.Wm)(i,{"css-list":(0,p.SU)(s),image:(0,p.SU)(a)},null,8,["css-list","image"]),c])}}}}}]);