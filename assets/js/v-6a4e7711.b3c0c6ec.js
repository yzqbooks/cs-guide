"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[72833],{83151:(e,t,a)=>{a.r(t),a.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-6a4e7711","path":"/go-tutor/common-lib.html","title":"常用库","lang":"zh-CN","frontmatter":{"order":5,"summary":"常用库 viper 解析yaml和json可能会出现解析值为空,原因是错误的使用了json或者yaml的tag,要使用mapstructure标签 gorm AutoMigrate 爬虫 https://github.com/gocolly/colly","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/go-tutor/common-lib.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"常用库"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-29T07:25:09.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-29T07:25:09.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"viper","slug":"viper","children":[]},{"level":2,"title":"gorm","slug":"gorm","children":[]},{"level":2,"title":"爬虫","slug":"爬虫","children":[]}],"git":{"createdTime":1652379302000,"updatedTime":1659079509000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":3}]},"readingTime":{"minutes":0.23,"words":69},"filePathRelative":"go-tutor/common-lib.md","localizedDate":"2022年5月12日"}')},1791:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r=a(66252);const o=(0,r.uE)('<h1 id="常用库" tabindex="-1"><a class="header-anchor" href="#常用库" aria-hidden="true">#</a> 常用库</h1><h2 id="viper" tabindex="-1"><a class="header-anchor" href="#viper" aria-hidden="true">#</a> viper</h2><p>解析yaml和json可能会出现解析值为空,原因是错误的使用了json或者yaml的tag,要使用<code>mapstructure</code>标签</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Config<span class="token punctuation">{</span>\n    QiniuAccessKey     <span class="token builtin">string</span> <span class="token string">`yaml:&quot;qiniu_accesskey&quot; mapstruct:&quot;qiniu_accesskey&quot;`</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gorm" tabindex="-1"><a class="header-anchor" href="#gorm" aria-hidden="true">#</a> gorm</h2><p>AutoMigrate</p>',6),n={href:"https://gorm.io/zh_CN/docs/migration.html",target:"_blank",rel:"noopener noreferrer"},i=(0,r.Uk)("https://gorm.io/zh_CN/docs/migration.html"),l=(0,r._)("h2",{id:"爬虫",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#爬虫","aria-hidden":"true"},"#"),(0,r.Uk)(" 爬虫")],-1),s={href:"https://github.com/gocolly/colly",target:"_blank",rel:"noopener noreferrer"},c=(0,r.Uk)("https://github.com/gocolly/colly"),d={},u=(0,a(83744).Z)(d,[["render",function(e,t){const a=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[o,(0,r._)("p",null,[(0,r._)("a",n,[i,(0,r.Wm)(a)])]),l,(0,r._)("p",null,[(0,r._)("a",s,[c,(0,r.Wm)(a)])])])}]])}}]);