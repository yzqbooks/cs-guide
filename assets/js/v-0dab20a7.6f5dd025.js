"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[98638],{51836:(e,s,a)=>{a.r(s),a.d(s,{data:()=>n});const n=JSON.parse('{"key":"v-0dab20a7","path":"/linux-tutor/linux-tips/linux-envs.html","title":"linux环境变量","lang":"zh-CN","frontmatter":{"summary":"linux环境变量 \\" 来自lvmenghui001  ,  侵删\\" Shell变量有局部变量、环境变量之分。局部变量就是指在某个Shell中生效的变量，只在此次登录中有效。环境变量通常又称“全局变量”，虽然在Shell中变量默认就是全局的，但是为了让子Shall继承当前Shell的变量，需要使用export内建命令将其导出为环境变量。 一、linux系统变","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/linux-tutor/linux-tips/linux-envs.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"linux环境变量"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-04-05T13:45:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-04-05T13:45:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"一、linux系统变量的类型","slug":"一、linux系统变量的类型","children":[]},{"level":2,"title":"二、设置环境变量","slug":"二、设置环境变量","children":[]},{"level":2,"title":"3. 修改用户环境变量","slug":"_3-修改用户环境变量","children":[]},{"level":2,"title":"4. 修改环境变量配置文件","slug":"_4-修改环境变量配置文件","children":[]},{"level":2,"title":"三、环境配置文件的区别","slug":"三、环境配置文件的区别","children":[]},{"level":2,"title":"1. profile、 bashrc、.bash_profile、 .bashrc介绍","slug":"_1-profile、-bashrc、-bash-profile、-bashrc介绍","children":[]}],"git":{"createdTime":1649166358000,"updatedTime":1649166358000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":5.51,"words":1653},"filePathRelative":"linux-tutor/linux-tips/linux-envs.md","localizedDate":"2022年4月5日"}')},20467:(e,s,a)=>{a.r(s),a.d(s,{default:()=>A});var n=a(66252);const l=(0,n._)("h1",{id:"linux环境变量",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#linux环境变量","aria-hidden":"true"},"#"),(0,n.Uk)(" linux环境变量")],-1),i=(0,n.Uk)("来自"),r={href:"https://www.cnblogs.com/lmh001/p/9999859.html",target:"_blank",rel:"noopener noreferrer"},o=(0,n.Uk)("lvmenghui001"),c=(0,n.Uk)("  ,  侵删"),t=(0,n.uE)('<p>Shell变量有局部变量、环境变量之分。局部变量就是指在某个Shell中生效的变量，只在此次登录中有效。环境变量通常又称“全局变量”，虽然在Shell中变量默认就是全局的，但是为了让子Shall继承当前Shell的变量，需要使用export内建命令将其导出为环境变量。</p><h2 id="一、linux系统变量的类型" tabindex="-1"><a class="header-anchor" href="#一、linux系统变量的类型" aria-hidden="true">#</a> 一、linux系统变量的类型</h2><p>按变量的生存周期划分：</p><p>永久的：需要修改配置文件，变量永久生效。 临时的：使用export命令声明即可，变量在关闭shell时失效。</p><p>在配置永久的环境变量时，又可以按照作用范围分为：</p><p>用户环境变量 系统环境变量。 系统环境变量对所有系统用户都有效，用户环境变量仅仅对当前的用户有效。</p><h2 id="二、设置环境变量" tabindex="-1"><a class="header-anchor" href="#二、设置环境变量" aria-hidden="true">#</a> 二、设置环境变量</h2><ol><li>直接运行export命令定义变量 在shell的命令行下直接使用[export 变量名=变量值] 定义变量。该变量只在当前的shell（BASH）或其子shell（BASH）下是有效的，shell关闭了，变量也就失效了，再打开新shell时就没有这个变量，需要使用的话还需要重新定义。</li><li>修改系统环境变量 系统环境变量一般保存在下面的文件中</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/etc/profile\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>全局（公有）配置，不管是哪个用户，登录时都会读取该文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/etc/bash.bashrc\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它也是全局（公有）的 bash执行时，不管是何种方式，都会读取此文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/etc/environment\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不要轻易修改此文件</p><h2 id="_3-修改用户环境变量" tabindex="-1"><a class="header-anchor" href="#_3-修改用户环境变量" aria-hidden="true">#</a> 3. 修改用户环境变量</h2><p>用户环境变量通常被存储在下面的文件中：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>~/.profile\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若bash是以login方式执行时，读取<code>~/.bash_profile</code>，若它不存在，则读取<code>~/.bash_login</code>，若前两者不存在，读取<code>~/.profile</code>。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>~/.bash_profile 或者~./bash_login\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若bash是以login方式执行时，读取<code>~/.bash_profile</code>，若它不存,则读取<code>~/.bash_login</code>，若前两者不存在，读取 <code>~/.profile</code>。 只有bash是以login形式执行时，才会读取.bash_profile，Unbutu默认没有此文件，可新建。 通常该配置文件还会配置成去读取<code>~/.bashrc</code>。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>~/.bashrc\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当bash是以non-login形式执行时，读取此文件。若是以login形式执行，则不会读取此文件。</p><p><code>~/.bash_profile</code>是交互式、login 方式进入 bash 运行的 <code>~/.bashrc</code>是交互式 non-login 方式进入 bash 运行的通常二者设置大致相同，所以通常前者会调用后者。</p><h2 id="_4-修改环境变量配置文件" tabindex="-1"><a class="header-anchor" href="#_4-修改环境变量配置文件" aria-hidden="true">#</a> 4. 修改环境变量配置文件</h2><p>如想将一个路径加入到环境变量（例如$PATH）中，可以像下面这样做（修改/etc/profile）：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/profile\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:PATH_1:PATH_2:PATH_3:------:PATH_N \n<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以自己加上指定的路径，中间用冒号隔开。环境变量更改后，在用户下次登陆时生效，如果想立刻生效，则可执行下面的语句：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三、环境配置文件的区别" tabindex="-1"><a class="header-anchor" href="#三、环境配置文件的区别" aria-hidden="true">#</a> 三、环境配置文件的区别</h2><h2 id="_1-profile、-bashrc、-bash-profile、-bashrc介绍" tabindex="-1"><a class="header-anchor" href="#_1-profile、-bashrc、-bash-profile、-bashrc介绍" aria-hidden="true">#</a> 1. profile、 bashrc、.bash_profile、 .bashrc介绍</h2><p>bash会在用户登录时，读取下列四个环境配置文件：</p><p>全局环境变量设置文件：<code>/etc/profile</code>、<code>/etc/bashrc</code>。 用户环境变量设置文件：<code>~/.bash_profile</code>、<code>~/.bashrc</code>。</p><p>读取顺序：① <code>/etc/profile</code>、② <code>~/.bash_profile</code>、③ <code>~/.bashrc</code>、④ <code>/etc/bashrc</code>。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>①` /etc/profile`：此文件为系统的每个用户设置环境信息，系统中每个用户登录时都要执行这个脚本，如果系统管理员希望某个设置对所有用户都生效，可以写在这个脚本里，该文件也会从`/etc/profile.d`目录中的配置文件中搜集shell的设置。 \n②` ~/.bash_profile`：每个用户都可使用该文件设置专用于自己的shell信息，当用户登录时，该文件仅执行一次。默认情况下，他设置一些环境变量，执行用户的`.bashrc`文件。 \n③` ~/.bashrc`：该文件包含专用于自己的shell信息，当登录时以及每次打开新shell时，该文件被读取。 \n④` /etc/bashrc`：为每一个运行bash shell的用户执行此文件，当bash shell被打开时，该文件被读取。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 <code>.bashrc</code>和<code>.bash_profile</code>的区别</p><p><code>.bash_profile</code>会用在登陆shell， <code>.bashrc</code>使用在交互式非登陆 shell 。简单说来，它们的区别主要是<code>.bash_profile</code>是在你每次登录的时候执行的；<code>.bashrc</code>是在你新开了一个命令行窗口时执行的。 当通过控制台进行登录（输入用户名和密码）：在初始化命令行提示符的时候会执行.bash_profile 来配置你的shell环境。但是如果已经登录到机器，在Gnome或者是KDE也开了一个新的终端窗口（xterm），这时，.bashrc会在窗口命令行提示符出现前被执行。当你在终端敲入/bin/bash时.bashrc也会在这个新的bash实例启动的时候执行。</p><ol start="3"><li>建议 大多数的时候你不想维护两个独立的配置文件，一个登录的一个非登录的shell。当你设置PATH时，你想在两个文件都适用。可以在.bash_profile中调用.bashrc，然后将PATH和其他通用的设置放到.bashrc中。 要做到这几点，添加以下几行到.bash_profile中：</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> -f ~/.bashrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token builtin class-name">.</span> ~/.bashrc\n<span class="token keyword">fi</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以对于我自己,我写了一个<code>.pathrc</code>文件 然后在<code>.bashrc</code>,<code>.zshrc</code>,<code>.bash_profile</code>,<code>/etc/profile</code>中都加了</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> -f ~/.pathrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token builtin class-name">.</span> ~/.pathrc\n<span class="token keyword">fi</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是<code>.pathrc</code>文件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">DENO_INSTALL</span><span class="token operator">=</span><span class="token string">&quot;/home/yzqdev/.deno&quot;</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/home/yzqdev/.jdks/jdk-17.0.2+8\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">NODEPATH</span><span class="token operator">=</span>/opt/nodejs\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOMODPATH</span><span class="token operator">=</span>/opt/go\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">OPENPATH</span><span class="token operator">=</span>/usr/local/openresty/nginx\n<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$GOMODPATH</span>/bin:<span class="token variable">$GOMODPATH</span>/golangmod/bin:<span class="token variable">$OPENPATH</span>/sbin:<span class="token variable">$NODEPATH</span>/bin:<span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$DENO_INSTALL</span>/bin:<span class="token environment constant">$PATH</span>&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，当你从控制台登录机器的时候，.bashrc就会被执行。</p><p>四、常用的环境变量</p><p>BASH Bash Shell的全路径 CDPATH       用于快速进入某个目录。 PATH       决定了shell将到哪些目录中寻找命令或程序 HOME       当前用户主目录 HISTSIZE       历史记录数 LOGNAME       当前用户的登录名 HOSTNAME       指主机的名称 SHELL       当前用户Shell类型 LANGUGE       语言相关的环境变量，多语言可以修改此环境变量 MAIL       当前用户的邮件存放目录 PS1       基本提示符，对于root用户是#，对于普通用户是$</p>',46),d=(0,n.Uk)("Reference [1] /etc/profile、/etc/bashrc、"),p=(0,n._)("s",null,"/.bash_profile、",-1),h=(0,n.Uk)("/.bashrc "),b={href:"http://blog.chinaunix.net/uid-26435987-id-3400127.html",target:"_blank",rel:"noopener noreferrer"},u=(0,n.Uk)("http://blog.chinaunix.net/uid-26435987-id-3400127.html"),v=(0,n.Uk)(" [2] Linux如何修改env看到的环境变量？ .bashrc和.bash_profile区别 "),m={href:"http://blog.csdn.net/xifeijian/article/details/13355031",target:"_blank",rel:"noopener noreferrer"},g=(0,n.Uk)("http://blog.csdn.net/xifeijian/article/details/13355031"),k=(0,n.Uk)(" [3] linux环境变量，bashrc与bashprofile "),f={href:"http://blog.sina.com.cn/s/blog_43e5ad4e0101ei43.html",target:"_blank",rel:"noopener noreferrer"},x=(0,n.Uk)("http://blog.sina.com.cn/s/blog_43e5ad4e0101ei43.html"),_={},A=(0,a(83744).Z)(_,[["render",function(e,s){const a=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[l,(0,n._)("blockquote",null,[(0,n._)("p",null,[i,(0,n._)("a",r,[o,(0,n.Wm)(a)]),c])]),t,(0,n._)("p",null,[d,p,h,(0,n._)("a",b,[u,(0,n.Wm)(a)]),v,(0,n._)("a",m,[g,(0,n.Wm)(a)]),k,(0,n._)("a",f,[x,(0,n.Wm)(a)])])])}]])}}]);