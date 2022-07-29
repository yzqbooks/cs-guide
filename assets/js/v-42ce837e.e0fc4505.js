"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[59032],{44506:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a=JSON.parse('{"key":"v-42ce837e","path":"/frontend/basic-css/border.html","title":"边框","lang":"zh-CN","frontmatter":{"summary":"边框 import { h, ref } from \'vue\' let cssList= ref([ {border:\'2px solid red\'}, {border:\'2px dashed cyan\'}, {border:\'1rem solid yellow\'}, {border:\'2px solid yellow\'}, {border: \'thick ","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/frontend/basic-css/border.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"边框"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-18T14:53:49.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-18T14:53:49.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1658156029000,"updatedTime":1658156029000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":0.65,"words":196},"filePathRelative":"frontend/basic-css/border.md","localizedDate":"2022年7月18日"}')},57476:(n,s,e)=>{e.r(s),e.d(s,{default:()=>p});var a=e(66252),t=e(2262);const o=(0,a._)("h1",{id:"边框",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#边框","aria-hidden":"true"},"#"),(0,a.Uk)(" 边框")],-1),i=(0,a.uE)('<p>Borders vs. outlines 边界border和轮廓outline很相似。然而轮廓在以下方面与边界不同</p><ul><li>轮廓不占据空间，他们在元素内容之外绘制</li><li>根据规范，轮廓不必为矩形，尽管通常是矩形。</li></ul><p>语法</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* style */</span>\n<span class="token property">border</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>\n\n<span class="token comment">/* width | style */</span>\n<span class="token property">border</span><span class="token punctuation">:</span> 2px dotted<span class="token punctuation">;</span>\n\n<span class="token comment">/* style | color */</span>\n<span class="token property">border</span><span class="token punctuation">:</span> outset #f33<span class="token punctuation">;</span>\n\n<span class="token comment">/* width | style | color */</span>\n<span class="token property">border</span><span class="token punctuation">:</span> medium dashed green<span class="token punctuation">;</span>\n\n<span class="token comment">/* Global values */</span>\n<span class="token property">border</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n<span class="token property">border</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>\n<span class="token property">border</span><span class="token punctuation">:</span> unset<span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),l=(0,a._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("I have a border, an outline, AND a box shadow! Amazing, isn't it?"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,a._)("div",{class:"line-number"})])],-1),r=(0,a._)("div",{class:"language-css ext-css line-numbers-mode"},[(0,a._)("pre",{class:"language-css"},[(0,a._)("code",null,[(0,a._)("span",{class:"token selector"},"div"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},"border"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 0.5rem outset pink"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},"outline"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 0.5rem solid khaki"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},"box-shadow"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 0 0 0 2rem skyblue"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},"border-radius"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 12px"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},"font"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" bold 1rem sans-serif"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},"margin"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 2rem"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},"padding"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 1rem"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},"outline-offset"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 0.5rem"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"})])],-1),p={__name:"border.html",setup(n){let s=(0,t.iH)([{border:"2px solid red"},{border:"2px dashed cyan"},{border:"1rem solid yellow"},{border:"2px solid yellow"},{border:"thick double rgb(50, 161, 206)"},{border:"4mm ridge rgba(211,220,50,.6)"}]);return(n,e)=>{const p=(0,a.up)("CssDemo"),c=(0,a.up)("CodeDemo");return(0,a.wg)(),(0,a.iD)("div",null,[o,(0,a.Wm)(p,{"css-list":(0,t.SU)(s)},null,8,["css-list"]),i,(0,a.Wm)(c,{id:"code-demo-0142c359",type:"normal",code:"%7B%22html%22%3A%22%3Cdiv%3EI%20have%20a%20border%2C%20an%20outline%2C%20AND%20a%20box%20shadow!%20Amazing%2C%20isn't%20it%3F%3C%2Fdiv%3E%5Cn%22%2C%22css%22%3A%22div%20%7B%5Cn%20%20border%3A%200.5rem%20outset%20pink%3B%5Cn%20%20outline%3A%200.5rem%20solid%20khaki%3B%5Cn%20%20box-shadow%3A%200%200%200%202rem%20skyblue%3B%5Cn%20%20border-radius%3A%2012px%3B%5Cn%20%20font%3A%20bold%201rem%20sans-serif%3B%5Cn%20%20margin%3A%202rem%3B%5Cn%20%20padding%3A%201rem%3B%5Cn%20%20outline-offset%3A%200.5rem%3B%5Cn%7D%5Cn%22%7D"},{default:(0,a.w5)((()=>[l,r])),_:1})])}}}}}]);