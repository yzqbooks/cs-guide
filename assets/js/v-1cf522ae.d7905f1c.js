"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[90013],{98961:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a=JSON.parse('{"key":"v-1cf522ae","path":"/linux-tutor/server/Influxdb-Install-And-Settings.html","title":"Influxdb 安装和配置","lang":"zh-CN","frontmatter":{"summary":"Influxdb 安装和配置 Influxdb Docker 安装 官网库：; 进入终端交互：; 其他资料 ;","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/linux-tutor/server/Influxdb-Install-And-Settings.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"Influxdb 安装和配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-04T21:01:43.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-04T21:01:43.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Influxdb Docker 安装","slug":"influxdb-docker-安装","children":[]},{"level":2,"title":"其他资料","slug":"其他资料","children":[]}],"git":{"createdTime":1653615455000,"updatedTime":1654376503000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":2}]},"readingTime":{"minutes":0.45,"words":136},"filePathRelative":"linux-tutor/server/Influxdb-Install-And-Settings.md","localizedDate":"2022年5月27日"}')},7032:(n,e,s)=>{s.r(e),s.d(e,{default:()=>b});var a=s(66252);const i=(0,a._)("h1",{id:"influxdb-安装和配置",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#influxdb-安装和配置","aria-hidden":"true"},"#"),(0,a.Uk)(" Influxdb 安装和配置")],-1),l=(0,a._)("h2",{id:"influxdb-docker-安装",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#influxdb-docker-安装","aria-hidden":"true"},"#"),(0,a.Uk)(" Influxdb Docker 安装")],-1),t=(0,a.Uk)("官网库："),r={href:"https://docs.docker.com/samples/library/influxdb",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("https://docs.docker.com/samples/library/influxdb"),o=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d --name influxdb <span class="token punctuation">\\</span>\n-p <span class="token number">8086</span>:8086 -p <span class="token number">8083</span>:8083 <span class="token punctuation">\\</span>\n-e <span class="token assign-left variable">INFLUXDB_HTTP_AUTH_ENABLED</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>\n-e <span class="token assign-left variable">INFLUXDB_ADMIN_ENABLED</span><span class="token operator">=</span>true -e <span class="token assign-left variable">INFLUXDB_ADMIN_USER</span><span class="token operator">=</span>admin -e <span class="token assign-left variable">INFLUXDB_ADMIN_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>\n-e <span class="token assign-left variable">INFLUXDB_DB</span><span class="token operator">=</span>mydb1 <span class="token punctuation">\\</span>\n-v /Users/gitnavi/docker_data/influxdb/data:/var/lib/influxdb influxdb\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>进入终端交互：</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it influxdb /bin/bash\n\n输入：influx，开始终端交互\n\nauth admin <span class="token number">123456</span>\nshow databases<span class="token punctuation">;</span>\n\nuse springboot\nshow measurements\n\nshow series from <span class="token string">&quot;jvm_buffer_total_capacity&quot;</span>\n\n<span class="token keyword">select</span> * from <span class="token string">&quot;jvm_buffer_total_capacity&quot;</span>\n\n\n如果你要再额外创建数据库：\ncreate database demo\n\n如果你要再创建用户：\ncreate user <span class="token string">&quot;myuser&quot;</span> with password <span class="token string">&#39;123456&#39;</span> with all privileges\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他资料" tabindex="-1"><a class="header-anchor" href="#其他资料" aria-hidden="true">#</a> 其他资料</h2>',4),c={href:"https://www.cnblogs.com/woshimrf/p/docker-influxdb.html",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("https://www.cnblogs.com/woshimrf/p/docker-influxdb.html"),p={},b=(0,s(83744).Z)(p,[["render",function(n,e){const s=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[i,l,(0,a._)("ul",null,[(0,a._)("li",null,[t,(0,a._)("a",r,[d,(0,a.Wm)(s)])])]),o,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",c,[u,(0,a.Wm)(s)])])])])}]])}}]);