"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[40808],{52441:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-9b1f1c06","path":"/windows-tutor/powershell/environment-varibles.html","title":"环境变量配置","lang":"zh-CN","frontmatter":{"summary":"环境变量配置 环境变量默认编辑界面是这样的 编辑编辑文本会变成 如果出现环境变量path的编辑一直是编辑文本的样式,则需要将%SystemRoot%\\\\system32 这个变量移到最前面,这样干就变成了列表的样式 使用powershell编辑环境变量 查看微软官方文档 链接","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/windows-tutor/powershell/environment-varibles.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"环境变量配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-04-05T15:17:32.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-04-05T15:17:32.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1649171852000,"updatedTime":1649171852000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":1.21,"words":362},"filePathRelative":"windows-tutor/powershell/environment-varibles.md","localizedDate":"2022年4月5日"}')},55010:(e,n,a)=>{a.r(n),a.d(n,{default:()=>d});var s=a(66252);const i=(0,s.uE)('<h1 id="环境变量配置" tabindex="-1"><a class="header-anchor" href="#环境变量配置" aria-hidden="true">#</a> 环境变量配置</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>%SystemRoot%\\system32;%INTEL_DEV_REDIST%redist\\intel64\\compiler;%JAVA_HOME%\\bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;%SystemRoot%;%SystemRoot%\\System32\\Wbem;%SYSTEMROOT%\\System32\\WindowsPowerShell\\v1.0\\;%SYSTEMROOT%\\System32\\OpenSSH\\;C:\\Program Files\\dotnet\\;%NVM_HOME%;%NVM_SYMLINK%;C:\\Android_Reverse\\apkTool;C:\\Go\\bin;C:\\Program Files (x86)\\dotnet-core-uninstall\\;C:\\codeblocks-20.03mingw-nosetup\\MinGW\\bin;C:\\Program Files\\Memurai\\;C:\\Users\\yzqde\\AppData\\Local\\Yarn\\bin;C:\\Users\\yzqde\\.conda\\envs\\condapkg;C:\\Program Files\\Git\\cmd\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>环境变量默认编辑界面是这样的 <img src="https://cdn.nlark.com/yuque/0/2021/png/295914/1626400042083-7c07f28f-db13-4387-871d-b8fa7e13678f.png#height=416&amp;id=XO1HX&amp;margin=[object Object]&amp;name=image.png&amp;originHeight=664&amp;originWidth=677&amp;originalType=binary&amp;ratio=1&amp;size=49381&amp;status=done&amp;style=none&amp;width=424" alt="image.png" loading="lazy"> 编辑编辑文本会变成 <img src="https://cdn.nlark.com/yuque/0/2021/png/295914/1626400138935-2780232b-782f-4afb-b057-2b65315c17f3.png#height=109&amp;id=F4GPV&amp;margin=[object Object]&amp;name=image.png&amp;originHeight=217&amp;originWidth=839&amp;originalType=binary&amp;ratio=1&amp;size=14711&amp;status=done&amp;style=none&amp;width=419.5" alt="image.png" loading="lazy"></p><p>如果出现环境变量path的编辑一直是编辑文本的样式,则需要将<code>%SystemRoot%\\system32</code> 这个变量移到最前面,这样干就变成了列表的样式</p><h1 id="使用powershell编辑环境变量" tabindex="-1"><a class="header-anchor" href="#使用powershell编辑环境变量" aria-hidden="true">#</a> 使用powershell编辑环境变量</h1>',5),t=(0,s.Uk)("查看微软官方文档 "),l={href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.1",target:"_blank",rel:"noopener noreferrer"},o=(0,s.Uk)("链接"),r=(0,s.uE)('<div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token comment"># 获取path环境变量</span>\n<span class="token variable">$env</span>:path \n<span class="token comment"># 获取用户名</span>\n<span class="token variable">$env</span>:USERNAME\n<span class="token comment"># env有如下变量: USERPROFILE,username,path,windir,COMPUTERNAME等等</span>\n\n<span class="token comment">#Powershell设置环境变量</span>\n\n<span class="token comment">#查看所有环境变量  </span>\n<span class="token function">ls</span> env:\n\n<span class="token comment">#搜索环境变量   </span>\n<span class="token function">ls</span> env:NODE*\n\n<span class="token comment">#查看单个环境变量 </span>\n<span class="token variable">$env</span>:NODE_ENV\n\n<span class="token comment">#添加/更新环境变量 </span>\n<span class="token variable">$env</span>:NODE_ENV=development\n\n<span class="token comment">#删除环境变量        </span>\n<span class="token function">del</span> evn:NODE_ENV\n\n<span class="token comment"># 改变path环境变量</span>\n<span class="token variable">$env</span>:PATH <span class="token operator">+=</span> <span class="token string">&quot;;<span class="token variable">$env</span>:ERLANG_HOME\\bin;c:\\temp&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),m={},d=(0,a(83744).Z)(m,[["render",function(e,n){const a=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[i,(0,s._)("p",null,[t,(0,s._)("a",l,[o,(0,s.Wm)(a)])]),r])}]])}}]);