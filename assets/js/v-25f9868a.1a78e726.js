"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[86654],{46924:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-25f9868a","path":"/go-tutor/framework/gin-tips.html","title":"gin的使用","lang":"zh-CN","frontmatter":{"summary":"gin的使用 跨域 如果端口不一样还需要加端口 出现js不是module的错误 解决方法","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/go-tutor/framework/gin-tips.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"gin的使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T20:13:57.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-27T20:13:57.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"跨域","slug":"跨域","children":[]},{"level":2,"title":"出现js不是module的错误","slug":"出现js不是module的错误","children":[]}],"git":{"createdTime":1658952837000,"updatedTime":1658952837000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":1.28,"words":383},"filePathRelative":"go-tutor/framework/gin-tips.md","localizedDate":"2022年7月27日"}')},53545:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});var t=a(66252);const p=[(0,t.uE)('<h1 id="gin的使用" tabindex="-1"><a class="header-anchor" href="#gin的使用" aria-hidden="true">#</a> gin的使用</h1><h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n    <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>\n    <span class="token string">&quot;strings&quot;</span>\n    <span class="token string">&quot;fmt&quot;</span>\n    <span class="token string">&quot;net/http&quot;</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        r<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token function">Cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//开启中间件 允许使用跨域请求</span>\n        r<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">Cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        method <span class="token operator">:=</span> c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Method\n        origin <span class="token operator">:=</span> c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;Origin&quot;</span><span class="token punctuation">)</span> <span class="token comment">//请求头部</span>\n        <span class="token keyword">if</span> origin <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>\n            <span class="token comment">//接收客户端发送的origin （重要！）</span>\n            c<span class="token punctuation">.</span>Writer<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> origin<span class="token punctuation">)</span> \n            <span class="token comment">//服务器支持的所有跨域请求的方法</span>\n            c<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST, GET, OPTIONS, PUT, DELETE,UPDATE&quot;</span><span class="token punctuation">)</span> \n            <span class="token comment">//允许跨域设置可以返回其他子段，可以自定义字段</span>\n            c<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Authorization, Content-Length, X-CSRF-Token, Token,session&quot;</span><span class="token punctuation">)</span>\n            <span class="token comment">// 允许浏览器（客户端）可以解析的头部 （重要）</span>\n            c<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Expose-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers&quot;</span><span class="token punctuation">)</span> \n            <span class="token comment">//设置缓存时间</span>\n            c<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Max-Age&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;172800&quot;</span><span class="token punctuation">)</span> \n            <span class="token comment">//允许客户端传递校验信息比如 cookie (重要)</span>\n            c<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Credentials&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span>                                                                                                                                                                                                                          \n        <span class="token punctuation">}</span>\n\n        <span class="token comment">//允许类型校验 </span>\n        <span class="token keyword">if</span> method <span class="token operator">==</span> <span class="token string">&quot;OPTIONS&quot;</span> <span class="token punctuation">{</span>\n            c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">&quot;ok!&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n                log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Panic info is: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n        c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果端口不一样还需要加端口</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> r<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>cors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>cors<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>\n  <span class="token comment">//AllowOrigins: []string{&quot;*&quot;},</span>\n  AllowOrigins<span class="token punctuation">:</span>     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;http://localhost:3000&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost:8080&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://www.juejin.cn:8580&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://45.445.443.170:8585&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  AllowMethods<span class="token punctuation">:</span>     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PATCH&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;HEAD&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  AllowHeaders<span class="token punctuation">:</span>     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Content-Length&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;version&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  ExposeHeaders<span class="token punctuation">:</span>    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Content-Length&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  AllowCredentials<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n  MaxAge<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Hour<span class="token punctuation">,</span>\n <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="出现js不是module的错误" tabindex="-1"><a class="header-anchor" href="#出现js不是module的错误" aria-hidden="true">#</a> 出现js不是module的错误</h2><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>Failed to load module script: The server responded with a non-JavaScript MIME type of &quot;text/html&quot;. Strict MIME type checking is enforced for module scripts per HTML spec.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决方法</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">//中间件</span>\n<span class="token keyword">func</span> <span class="token function">headersByRequestUrl</span><span class="token punctuation">(</span> <span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">HasPrefix</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>RequestURI<span class="token punctuation">,</span> <span class="token string">&quot;/ui/&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            c<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;Cache-Control&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;public,max-age=86400&quot;</span><span class="token punctuation">)</span>\n            <span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">HasSuffix</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>RequestURI<span class="token punctuation">,</span> <span class="token string">&quot;.js&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                c<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;text/javascript&quot;</span><span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',9)],o={},e=(0,a(83744).Z)(o,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,p)}]])}}]);