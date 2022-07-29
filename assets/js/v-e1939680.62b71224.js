"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[84865],{4621:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-e1939680","path":"/java-tutor/springboot/swaggerui.html","title":"使用swaggerui","lang":"zh-CN","frontmatter":{"summary":"使用swaggerui 不推荐使用 swaggerui配置 添加swaggerui依赖 在主类添加注解: @EnableOpenApi 最后添加配置类和拦截器类 配置类 拦截器类: 配置token 待续...","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/java-tutor/springboot/swaggerui.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"使用swaggerui"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-23T15:21:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-05-23T15:21:01.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"swaggerui配置","slug":"swaggerui配置","children":[{"level":3,"title":"添加swaggerui依赖","slug":"添加swaggerui依赖","children":[]},{"level":3,"title":"在主类添加注解: @EnableOpenApi","slug":"在主类添加注解-enableopenapi","children":[]},{"level":3,"title":"最后添加配置类和拦截器类","slug":"最后添加配置类和拦截器类","children":[]}]},{"level":2,"title":"配置token","slug":"配置token","children":[]}],"git":{"createdTime":1649171852000,"updatedTime":1653319261000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":2}]},"readingTime":{"minutes":1.28,"words":384},"filePathRelative":"java-tutor/springboot/swaggerui.md","localizedDate":"2022年4月5日"}')},91952:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(66252);const e=[(0,t.uE)('<h1 id="使用swaggerui" tabindex="-1"><a class="header-anchor" href="#使用swaggerui" aria-hidden="true">#</a> 使用swaggerui</h1><div class="custom-container warning"><p class="custom-container-title">注意</p><p>不推荐使用</p></div><h2 id="swaggerui配置" tabindex="-1"><a class="header-anchor" href="#swaggerui配置" aria-hidden="true">#</a> swaggerui配置</h2><h3 id="添加swaggerui依赖" tabindex="-1"><a class="header-anchor" href="#添加swaggerui依赖" aria-hidden="true">#</a> 添加swaggerui依赖</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.springfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springfox-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在主类添加注解-enableopenapi" tabindex="-1"><a class="header-anchor" href="#在主类添加注解-enableopenapi" aria-hidden="true">#</a> 在主类添加注解: <code>@EnableOpenApi</code></h3><h3 id="最后添加配置类和拦截器类" tabindex="-1"><a class="header-anchor" href="#最后添加配置类和拦截器类" aria-hidden="true">#</a> 最后添加配置类和拦截器类</h3><p>配置类</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\n<span class="token annotation punctuation">@Configuration</span>\n<span class="token annotation punctuation">@EnableOpenApi</span>\n<span class="token comment">//@ComponentScan(&quot;com.qgzx.mapper&quot;)</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerConfig</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Bean</span>\n    <span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">docker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 构造函数传入初始化规范，这是swagger2规范</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span>OAS_30<span class="token punctuation">)</span>\n                <span class="token comment">//apiInfo： 添加api详情信息，参数为ApiInfo类型的参数，这个参数包含了第二部分的所有信息比如标题、描述、版本之类的，开发中一般都会自定义这些信息</span>\n                <span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">groupName</span><span class="token punctuation">(</span><span class="token string">&quot;group&quot;</span><span class="token punctuation">)</span>\n                <span class="token comment">//配置是否启用Swagger，如果是false，在浏览器将无法访问，默认是true</span>\n                <span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token comment">//apis： 添加过滤条件,</span>\n                <span class="token punctuation">.</span><span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">basePackage</span><span class="token punctuation">(</span><span class="token string">&quot;cn.hellohao.controller&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token comment">//paths： 这里是控制哪些路径的api会被显示出来，比如下方的参数就是除了/user以外的其它路径都会生成api文档</span>\n\n                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">ApiInfo</span> <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Contact</span> contact <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Contact</span><span class="token punctuation">(</span><span class="token string">&quot;名字：name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;个人链接：http://xxx.xxx.com/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;邮箱：XXX&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ApiInfo</span><span class="token punctuation">(</span>\n                <span class="token string">&quot;标题内容&quot;</span><span class="token punctuation">,</span>\n                <span class="token string">&quot;描述内容&quot;</span><span class="token punctuation">,</span>\n                <span class="token string">&quot;版本内容：v1.0&quot;</span><span class="token punctuation">,</span>\n                <span class="token string">&quot;链接：http://terms.service.url/&quot;</span><span class="token punctuation">,</span>\n                contact<span class="token punctuation">,</span>\n                <span class="token string">&quot;许可：Apach 2.0 &quot;</span><span class="token punctuation">,</span>\n                <span class="token string">&quot;许可链接：XXX&quot;</span><span class="token punctuation">,</span>\n                <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拦截器类:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerUiWebMvcConfigurer</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> baseUrl<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">SwaggerUiWebMvcConfigurer</span><span class="token punctuation">(</span>\n            <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;${springfox.documentation.swagger-ui.base-url:}&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> baseUrl<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>baseUrl <span class="token operator">=</span> baseUrl<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> baseUrl <span class="token operator">=</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">trimTrailingCharacter</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>baseUrl<span class="token punctuation">,</span> <span class="token char">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        registry<span class="token punctuation">.</span>\n                <span class="token function">addResourceHandler</span><span class="token punctuation">(</span>baseUrl <span class="token operator">+</span> <span class="token string">&quot;/swagger-ui/**&quot;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:/META-INF/resources/webjars/springfox-swagger-ui/&quot;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">resourceChain</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addViewControllers</span><span class="token punctuation">(</span><span class="token class-name">ViewControllerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        registry<span class="token punctuation">.</span><span class="token function">addViewController</span><span class="token punctuation">(</span>baseUrl <span class="token operator">+</span> <span class="token string">&quot;/swagger-ui/&quot;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;forward:&quot;</span> <span class="token operator">+</span> baseUrl <span class="token operator">+</span> <span class="token string">&quot;/swagger-ui/index.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCorsMappings</span><span class="token punctuation">(</span><span class="token class-name">CorsRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        registry\n                <span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/api/pet&quot;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">allowedOrigins</span><span class="token punctuation">(</span><span class="token string">&quot;http://editor.swagger.io&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        registry\n                <span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/v2/api-docs.*&quot;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">allowedOrigins</span><span class="token punctuation">(</span><span class="token string">&quot;http://editor.swagger.io&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置token" tabindex="-1"><a class="header-anchor" href="#配置token" aria-hidden="true">#</a> 配置token</h2><p>待续...</p>',13)],p={},o=(0,a(83744).Z)(p,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,e)}]])}}]);