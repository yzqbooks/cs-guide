"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[94967],{22380:(e,a,t)=>{t.r(a),t.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-a48f3a8a","path":"/java-tutor/springboot/tips/autowired.html","title":"autowired和resource对比","lang":"zh-CN","frontmatter":{"summary":"autowired和resource对比 差异 1. @Autowired和@Resource都可以用来装配bean，都可以写在字段上，或者方法上。 2. @Autowired属于Spring的；@Resource为JSR-250标准的注释，属于J2EE的。 3. @Autowired默认按类型装配，默认情况下必须要求依赖对象必须存在，如果要允许null值，","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/java-tutor/springboot/tips/autowired.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"autowired和resource对比"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-18T06:54:45.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-18T06:54:45.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"差异","slug":"差异","children":[]}],"git":{"createdTime":1655535285000,"updatedTime":1655535285000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":1.06,"words":318},"filePathRelative":"java-tutor/springboot/tips/autowired.md","localizedDate":"2022年6月18日"}')},96073:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});var n=t(66252);const s=[(0,n.uE)('<h1 id="autowired和resource对比" tabindex="-1"><a class="header-anchor" href="#autowired和resource对比" aria-hidden="true">#</a> autowired和resource对比</h1><h2 id="差异" tabindex="-1"><a class="header-anchor" href="#差异" aria-hidden="true">#</a> 差异</h2><ol><li><p>@Autowired和@Resource都可以用来装配bean，都可以写在字段上，或者方法上。</p></li><li><p>@Autowired属于Spring的；@Resource为JSR-250标准的注释，属于J2EE的。</p></li><li><p>@Autowired默认按类型装配，默认情况下必须要求依赖对象必须存在，如果要允许null值，可以设置它的required属性为false，例如：@Autowired(required=false) ，如果我们想使用名称装配可以结合@Qualifier注解进行使用，如下：</p></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;baseDao&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">private</span> <span class="token class-name">BaseDao</span> baseDao<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>@Resource，默认安装名称进行装配，名称可以通过name属性进行指定，如果没有指定name属性，当注解写在字段上时，默认取字段名进行安装名称查找，如果注解写在setter方法上默认取属性名进行装配。当找不到与名称匹配的bean时才按照类型进行装配。但是需要注意的是，如果name属性一旦指定，就只会按照名称进行装配。</li></ol><p>例如：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Resource</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;baseDao&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">private</span> <span class="token class-name">BaseDao</span> baseDao<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>推荐使用：@Resource注解在字段上，这样就不用写setter方法了，并且这个注解是属于J2EE的，减少了与spring的耦合。这样代码看起就比较优雅。</p></div>',8)],o={},i=(0,t(83744).Z)(o,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,s)}]])}}]);