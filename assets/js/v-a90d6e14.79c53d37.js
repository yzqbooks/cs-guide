"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[35584],{58135:(e,t,i)=>{i.r(t),i.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-a90d6e14","path":"/windows-tutor/kate.html","title":"使用kate代替记事本","lang":"zh-CN","frontmatter":{"summary":"使用kate代替记事本 kate(推荐); emeditor; editor-plus; everedit; ueditor; vscode; sublime; cudatext; nodepad3; 现在推荐使用 kate(kde默认编辑器) kde永远的神 kate; okular; kile; filelight; 分割线---------------","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/windows-tutor/kate.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"使用kate代替记事本"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-24T09:27:13.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-24T09:27:13.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"使用emeditor打开文件","slug":"使用emeditor打开文件","children":[{"level":3,"title":"右键注册用emeditor打开","slug":"右键注册用emeditor打开","children":[]},{"level":3,"title":"劫持默认notepad","slug":"劫持默认notepad","children":[]}]},{"level":2,"title":"cudatext设置中文","slug":"cudatext设置中文","children":[]}],"git":{"createdTime":1658584315000,"updatedTime":1658654833000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":2}]},"readingTime":{"minutes":1.27,"words":381},"filePathRelative":"windows-tutor/kate.md","localizedDate":"2022年7月23日"}')},97356:(e,t,i)=>{i.r(t),i.d(t,{default:()=>q});var r=i(66252);const d=(0,r._)("h1",{id:"使用kate代替记事本",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#使用kate代替记事本","aria-hidden":"true"},"#"),(0,r.Uk)(" 使用kate代替记事本")],-1),o={class:"custom-container tip"},a=(0,r.uE)('<p class="custom-container-title">提示</p><ul><li>kate(推荐)</li><li>emeditor</li><li>editor-plus</li><li>everedit</li><li>ueditor</li><li>vscode</li><li>sublime</li><li>cudatext</li><li>nodepad3</li></ul>',2),n=(0,r.Uk)("现在推荐使用 "),l={href:"https://kate-editor.org/zh-cn",target:"_blank",rel:"noopener noreferrer"},s=(0,r.Uk)("kate(kde默认编辑器)"),u={href:"https://apps.kde.org/zh-cn",target:"_blank",rel:"noopener noreferrer"},c=(0,r.Uk)("kde永远的神"),m=(0,r._)("ul",null,[(0,r._)("li",null,"kate"),(0,r._)("li",null,"okular"),(0,r._)("li",null,"kile"),(0,r._)("li",null,"filelight")],-1),p=(0,r.uE)('<p>分割线------------------------------------------</p><h2 id="使用emeditor打开文件" tabindex="-1"><a class="header-anchor" href="#使用emeditor打开文件" aria-hidden="true">#</a> 使用emeditor打开文件</h2><h3 id="右键注册用emeditor打开" tabindex="-1"><a class="header-anchor" href="#右键注册用emeditor打开" aria-hidden="true">#</a> 右键注册<code>用emeditor打开</code></h3><p>注意这里的<code>%1</code>在注册表里面要带<code>&quot;&quot;</code> 就像这样 <code>&quot;D:\\\\programs\\\\emeditor\\\\EmEditor.exe&quot; &quot;%1&quot;</code> 新建一个<code>用cudatext打开</code>的reg文件,然后执行</p><div class="language-reg ext-reg line-numbers-mode"><pre class="language-reg"><code>Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\*\\shell\\用EmEditor打开]\n&quot;Icon&quot;=&quot;D:\\\\programs\\\\EmEditor\\\\EmEditor.exe&quot;\n@=&quot;用cudatext打开&quot;\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\*\\shell\\用EmEditor打开\\command]\n@=&quot;\\&quot;D:\\\\programs\\\\EmEditor\\EmEditor.exe\\&quot;  \\&quot;%1\\&quot;&quot;\n\n\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="劫持默认notepad" tabindex="-1"><a class="header-anchor" href="#劫持默认notepad" aria-hidden="true">#</a> 劫持默认notepad</h3><p>win+R 输入 regedit 打开注册表<br> 输入计算机<code>HKEY_CLASSES_ROOT\\txtfile\\shell\\open\\command</code> 进入记事本的注册表<br> 修改默认的值,原来的值是 <code>%SystemRoot%\\system32\\NOTEPAD.EXE %1</code>,改为自己解压后的exe的位置(中间不要有中文和空格) 我改后是 <code>D:\\programs\\EmEditor\\EmEditor.exe %1</code> 然后! 在路径输入 计算机<code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options</code>,设置默认值为软件路径,比如我是 <code>D:\\programs\\EmEditor\\EmEditor.exe</code></p><div class="language-reg ext-reg line-numbers-mode"><pre class="language-reg"><code>Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\notepad.exe]\n&quot;Debugger&quot;=&quot;\\&quot;D:\\\\programs\\\\EmEditor\\\\EmEditor.exe\\&quot;&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cudatext设置中文" tabindex="-1"><a class="header-anchor" href="#cudatext设置中文" aria-hidden="true">#</a> cudatext设置中文</h2>',9),h=(0,r._)("img",{src:"https://cudatext.github.io/img/cudatext-main.png",alt:"cudatext",loading:"lazy"},null,-1),g=(0,r.Uk)(" 打开 "),v={href:"https://sourceforge.net/projects/cudatext/files/addons/",target:"_blank",rel:"noopener noreferrer"},E=(0,r.Uk)("https://sourceforge.net/projects/cudatext/files/addons/"),k=(0,r.Uk)(" 找到【translations】文件夹， 下载【translation.zh_CN.zip】 把其中的install.inf、zh_CN.ini以及其他存在的文件都解压到cudatext的data\\lang文件夹下，重新运行软件点击【Options】-【translations】选择【zh_CN】即可。 下载所有插件"),_=(0,r._)("br",null,null,-1),b={href:"https://sourceforge.net/projects/cudatext/files/addons_all/",target:"_blank",rel:"noopener noreferrer"},x=(0,r.Uk)("https://sourceforge.net/projects/cudatext/files/addons_all/"),f={},q=(0,i(83744).Z)(f,[["render",function(e,t){const i=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[d,(0,r._)("div",o,[a,(0,r._)("p",null,[n,(0,r._)("a",l,[s,(0,r.Wm)(i)])]),(0,r._)("p",null,[(0,r._)("a",u,[c,(0,r.Wm)(i)])]),m]),p,(0,r._)("p",null,[h,g,(0,r._)("a",v,[E,(0,r.Wm)(i)]),k,_,(0,r._)("a",b,[x,(0,r.Wm)(i)])])])}]])}}]);