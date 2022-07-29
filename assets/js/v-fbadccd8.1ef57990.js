"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[75152],{31674:(e,i,n)=>{n.r(i),n.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-fbadccd8","path":"/linux-tutor/awesome-shell/","title":"一些很有用的shell","lang":"zh-CN","frontmatter":{"summary":"一些很有用的shell 看到一位大佬介绍shell脚本介绍的非常好,转载来用一下 源地址:链接 前言 由于工作需要，最近重新开始拾掇shell脚本。虽然绝大部分命令自己平时也经常使用，但是在写成脚本的时候总觉得写的很难看。而且当我在看其他人写的脚本的时候，总觉得难以阅读。毕竟shell脚本这个东西不算是正经的编程语言，他更像是一个工具，用来杂糅不同的程序供我","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/linux-tutor/awesome-shell/"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"一些很有用的shell"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-27T01:37:35.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-05-27T01:37:35.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"前言","slug":"前言","children":[]},{"level":2,"title":"代码风格规范","slug":"代码风格规范","children":[]},{"level":2,"title":"代码有注释","slug":"代码有注释","children":[]},{"level":2,"title":"参数要规范","slug":"参数要规范","children":[]},{"level":2,"title":"变量和魔数","slug":"变量和魔数","children":[]},{"level":2,"title":"缩进有规矩","slug":"缩进有规矩","children":[]},{"level":2,"title":"命名有标准","slug":"命名有标准","children":[]},{"level":2,"title":"编码要统一","slug":"编码要统一","children":[{"level":3,"title":"权限记得加","slug":"权限记得加","children":[]}]},{"level":2,"title":"编码细节规范","slug":"编码细节规范","children":[{"level":3,"title":"勤用双引号","slug":"勤用双引号","children":[]},{"level":3,"title":"巧用main函数","slug":"巧用main函数","children":[]},{"level":3,"title":"考虑作用域","slug":"考虑作用域","children":[]},{"level":3,"title":"函数返回值","slug":"函数返回值","children":[]},{"level":3,"title":"间接引用值","slug":"间接引用值","children":[]},{"level":3,"title":"巧用heredocs","slug":"巧用heredocs","children":[]},{"level":3,"title":"学会查路径","slug":"学会查路径","children":[]},{"level":3,"title":"代码要简短","slug":"代码要简短","children":[]},{"level":3,"title":"命令并行化","slug":"命令并行化","children":[]},{"level":3,"title":"全文本检索","slug":"全文本检索","children":[]}]},{"level":2,"title":"使用新写法","slug":"使用新写法","children":[{"level":3,"title":"其他小tip","slug":"其他小tip","children":[]}]},{"level":2,"title":"静态检查工具shellcheck","slug":"静态检查工具shellcheck","children":[]}],"git":{"createdTime":1653565176000,"updatedTime":1653615455000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":2}]},"readingTime":{"minutes":16.75,"words":5026},"filePathRelative":"linux-tutor/awesome-shell/README.md","localizedDate":"2022年5月26日"}')},40225:(e,i,n)=>{n.r(i),n.d(i,{default:()=>m});var a=n(66252);const l=(0,a._)("h1",{id:"一些很有用的shell",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#一些很有用的shell","aria-hidden":"true"},"#"),(0,a.Uk)(" 一些很有用的shell")],-1),d={class:"custom-container tip"},s=(0,a._)("p",{class:"custom-container-title"},"提示",-1),r=(0,a.Uk)("看到一位大佬介绍shell脚本介绍的非常好,转载来用一下 源地址:"),t={href:"https://mp.weixin.qq.com/s?__biz=MzI0MDQ4MTM5NQ==&mid=2247496756&idx=1&sn=03c2d54ab2ac11ffc58266f964ee9e3a&chksm=e9189128de6f183e74243e993bf0715d8bea5bad56852a4f6d0fe6d884cbe3af07f2a27b01ae&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("链接"),u=(0,a.uE)('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>由于工作需要，最近重新开始拾掇shell脚本。虽然绝大部分命令自己平时也经常使用，但是在写成脚本的时候总觉得写的很难看。而且当我在看其他人写的脚本的时候，总觉得难以阅读。毕竟shell脚本这个东西不算是正经的编程语言，他更像是一个工具，用来杂糅不同的程序供我们调用。</p><p>因此很多人在写的时候也是想到哪里写到哪里，基本上都像是一段超长的main函数，不忍直视。同时，由于历史原因，shell有很多不同的版本，而且也有很多有相同功能的命令需要我们进行取舍，以至于代码的规范很难统一。</p><p>考虑到上面的这些原因，我查阅了一些相关的文档，发现这些问题其实很多人都考虑过，而且 也形成了一些不错的文章，但是还是有点零散。因此我就在这里把这些文章稍微整理了一下，作为以后我自己写脚本的技术规范。</p><h2 id="代码风格规范" tabindex="-1"><a class="header-anchor" href="#代码风格规范" aria-hidden="true">#</a> 代码风格规范</h2><p>开头有“蛇棒”</p><p>所谓shebang其实就是在很多脚本的第一行出现的以#!开头的注释，他指明了当我们没有指定解释器的时候默认的解释器，一般可能是下面这样：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然，解释器有很多种，除了bash之外，我们可以用下面的命令查看本机支持的解释器:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cat /etc/shells\n#/etc/shells: valid login shells\n/bin/sh\n/bin/dash\n/bin/bash\n/bin/rbash\n/usr/bin/screen\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们直接使用./a.sh来执行这个脚本的时候，如果没有shebang，那么它就会默认用$SHELL指定的解释器，否则就会用shebang指定的解释器。</p><p>这种方式是我们推荐的使用方式。</p><h2 id="代码有注释" tabindex="-1"><a class="header-anchor" href="#代码有注释" aria-hidden="true">#</a> 代码有注释</h2><p>注释，显然是一个常识，不过这里还是要再强调一下，这个在shell脚本里尤为重要。因为很多单行的shell命令不是那么浅显易懂，没有注释的话在维护起来会让人尤其的头大。</p><p>注释的意义不仅在于解释用途，而在于告诉我们注意事项，就像是一个README。</p><p>具体的来说，对于shell脚本，注释一般包括下面几个部分：</p><ul><li>shebang</li><li>脚本的参数</li><li>脚本的用途</li><li>脚本的注意事项</li><li>脚本的写作时间，作者，版权等</li><li>各个函数前的说明注释</li><li>一些较复杂的单行命令注释</li></ul><h2 id="参数要规范" tabindex="-1"><a class="header-anchor" href="#参数要规范" aria-hidden="true">#</a> 参数要规范</h2><p>这一点很重要，当我们的脚本需要接受参数的时候，我们一定要先判断参数是否合乎规范，并给出合适的回显，方便使用者了解参数的使用。</p><p>最少，最少，我们至少得判断下参数的个数吧：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if [[ $# != 2 ]];then\n    echo &quot;Parameter incorrect.&quot;\n    exit 1\nfi\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量和魔数" tabindex="-1"><a class="header-anchor" href="#变量和魔数" aria-hidden="true">#</a> 变量和魔数</h2><p>一般情况下我们会将一些重要的环境变量定义在开头，确保这些变量的存在。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>source /etc/profile\nexport PATH=”/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:/apps/bin/”\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这种定义方式有一个很常见的用途，最典型的应用就是，当我们本地安装了很多java版本时，我们可能需要指定一个java来用。那么这时我们就会在脚本开头重新定义JAVA_HOME以及PATH变量来进行控制。同时，一段好的代码通常是不会有很多硬编码在代码里的“魔数”的。如果一定要有，通常是用一个变量的形式定义在开头，然后调用的时候直接调用这个变量，这样方便日后的修改。</p><h2 id="缩进有规矩" tabindex="-1"><a class="header-anchor" href="#缩进有规矩" aria-hidden="true">#</a> 缩进有规矩</h2><p>对于shell脚本，缩进是个大问题。因为很多需要缩进的地方(比如if,for语句)都不长，所有很多人都懒得去缩进，而且很多人不习惯用函数，导致缩进功能被弱化。</p><p>其实正确的缩进是很重要的，尤其是在写函数的时候，否则我们在阅读的时候很容易把函数体跟直接执行的命令搞混。</p><p>常见的缩进方法主要有”soft tab”和”hard tab”两种。</p><ul><li>所谓soft tab就是使用n个空格进行缩进(n通常是2或4)</li><li>所谓hard tab当然就是指真实的\\t字符</li><li>这里不去撕哪种方式最好，只能说各有各的优劣。反正我习惯用hard tab。</li><li>对于if和for语句之类的，我们最好不要把then，do这些关键字单独写一行，这样看上去比较丑。。。</li></ul><h2 id="命名有标准" tabindex="-1"><a class="header-anchor" href="#命名有标准" aria-hidden="true">#</a> 命名有标准</h2><p>所谓命名规范，基本包含下面这几点：</p><ul><li>文件名规范，以.sh结尾，方便识别</li><li>变量名字要有含义，不要拼错</li><li>统一命名风格，写shell一般用小写字母加下划线</li></ul><h2 id="编码要统一" tabindex="-1"><a class="header-anchor" href="#编码要统一" aria-hidden="true">#</a> 编码要统一</h2><p>在写脚本的时候尽量使用UTF-8编码，能够支持中文等一些奇奇怪怪的字符。不过虽然能写中文，但是在写注释以及打log的时候还是尽量英文，毕竟很多机器还是没有直接支持中文的，打出来可能会有乱码。这里还尤其需要注意一点，就是当我们是在windows下用utf-8编码来写shell脚本的时候，一定要注意这个utf-8是否是有BOM的。默认情况下windows判断utf-8格式是通过在文件开头加上三个EF BB BF字节来判断的，但是在Linux中默认是无BOM的。因此如果我们是在windows下写脚本的时候，一定要注意将编码改成Utf-8无BOM，一般用notepad++之类的编辑器都能改。否则，在Linux下运行的时候就会识别到开头的三个字符，从而报一些无法识别命令的错。当然，对于跨平台写脚本还有一个比较常见的问题就是换行符不同。windows默认是\\r\\n而unix下是\\n。不过有两个小工具可以非常方便的解决这个问题：dos2unix,unix2dos。</p><h3 id="权限记得加" tabindex="-1"><a class="header-anchor" href="#权限记得加" aria-hidden="true">#</a> 权限记得加</h3><p>这一点虽然很小，但是我个人却经常忘记，不加执行权限会导致无法直接执行，有点讨厌。。。</p><h4 id="日志和回显" tabindex="-1"><a class="header-anchor" href="#日志和回显" aria-hidden="true">#</a> 日志和回显</h4><p>日志的重要性不必多说，能够方便我们回头纠错，在大型的项目里是非常重要的。</p><p>如果这个脚本是供用户直接在命令行使用的，那么我们最好还要能够在执行时实时回显执行过程，方便用户掌控。</p><p>有时候为了提高用户体验，我们会在回显中添加一些特效，比如颜色啊，闪烁啊之类的，具体可以参考ANSI/VT100 Control sequences这篇文章的介绍。</p><h4 id="密码要移除" tabindex="-1"><a class="header-anchor" href="#密码要移除" aria-hidden="true">#</a> 密码要移除</h4><p>不要把密码硬编码在脚本里，不要把密码硬编码在脚本里，不要把密码硬编码在脚本里。</p><p>重要的事情说三遍，尤其是当脚本托管在类似Github这类平台中时。。。</p><h4 id="太长要分行" tabindex="-1"><a class="header-anchor" href="#太长要分行" aria-hidden="true">#</a> 太长要分行</h4><p>在调用某些程序的时候，参数可能会很长，这时候为了保证较好的阅读体验，我们可以用反斜杠来分行：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./configure \\\n–prefix=/usr \\\n–sbin-path=/usr/sbin/nginx \\\n–conf-path=/etc/nginx/nginx.conf \\\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意在反斜杠前有个空格。</p><h2 id="编码细节规范" tabindex="-1"><a class="header-anchor" href="#编码细节规范" aria-hidden="true">#</a> 编码细节规范</h2><p><strong>代码有效率</strong></p><p>在使用命令的时候要了解命令的具体做法，尤其当数据处理量大的时候，要时刻考虑该命令是否会影响效率。</p><p>比如下面的两个sed命令：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -n &#39;1p&#39; file\nsed -n &#39;1p;1q&#39; file\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>他们的作用一样，都是获取文件的第一行。但是第一条命令会读取整个文件，而第二条命令只读取第一行。当文件很大的时候，仅仅是这样一条命令不一样就会造成巨大的效率差异。</p><p>当然，这里只是为了举一个例子，这个例子真正正确的用法应该是使用head -n1 file命令。。。</p><h3 id="勤用双引号" tabindex="-1"><a class="header-anchor" href="#勤用双引号" aria-hidden="true">#</a> 勤用双引号</h3><p>几乎所有的大佬都推荐在使用”$”来获取变量的时候最好加上双引号。</p><p>不加上双引号在很多情况下都会造成很大的麻烦，为什么呢？举一个例子：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/sh\n#已知当前文件夹有一个a.sh的文件\nvar=&quot;*.sh&quot;\necho $var\necho &quot;$var&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>他的运行结果如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a.sh\n*.sh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为啥会这样呢？其实可以解释为他执行了下面的命令：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>echo *.sh\necho &quot;*.sh&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在很多情况下，在将变量作为参数的时候，一定要注意上面这一点，仔细体会其中的差异。上面只是一个非常小的例子，实际应用的时候由于这个细节导致的问题实在是太多了。。。</p><h3 id="巧用main函数" tabindex="-1"><a class="header-anchor" href="#巧用main函数" aria-hidden="true">#</a> 巧用main函数</h3><p>我们知道，像java，C这样的编译型语言都会有一个函数入口，这种结构使得代码可读性很强，我们知道哪些直接执行，那些是函数。但是脚本不一样，脚本属于解释性语言，从第一行直接执行到最后一行，如果在这当中命令与函数糅杂在一起，那就非常难读了。</p><p>用python的朋友都知道，一个合乎标准的python脚本大体上至少是这样的：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/usr/bin/env python\n\ndef func1():\n    pass\ndef func2():\n    pass\nif __name__==&#39;__main__&#39;:\n    func1()\n    func2()\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>他用一个很巧妙的方法实现了我们习惯的main函数，使得代码可读性更强。</p><p>在shell中，我们也有类似的小技巧:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/usr/bin/env bash\n\nfunc1(){\n    #do sth\n}\nfunc2(){\n    #do sth\n}\nmain(){\n    func1\n    func2\n}\nmain &quot;$@&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以采用这种写法，同样实现类似的main函数，使得脚本的结构化程度更好。</p><h3 id="考虑作用域" tabindex="-1"><a class="header-anchor" href="#考虑作用域" aria-hidden="true">#</a> 考虑作用域</h3><p>shell中默认的变量作用域都是全局的，比如下面的脚本：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/usr/bin/env bash\n\nvar=1\nfunc(){\n    var=2\n}\nfunc\necho $var\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>他的输出结果就是2而不是1，这样显然不符合我们的编码习惯，很容易造成一些问题。</p><p>因此，相比直接使用全局变量，我们最好使用local readonly这类的命令，其次我们可以使用declare来声明变量。这些方式都比使用全局方式定义要好。</p><h3 id="函数返回值" tabindex="-1"><a class="header-anchor" href="#函数返回值" aria-hidden="true">#</a> 函数返回值</h3><p>在使用函数的时候一定要注意，shell中函数的返回值只能是整数，估计是因为一般情况下一个函数的返回值通常表示这个函数的运行状态，所以一般都是0或者是１就够了，因此就设计成了这样。不过，如果非得想传递字符串，也可以通过下面变通的方法:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func(){\n    echo &quot;2333&quot;\n}\nres=$(func)\necho &quot;This is from $res.&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，通过echo或者print之类的就可以做到传一些额外参数的目的。</p><h3 id="间接引用值" tabindex="-1"><a class="header-anchor" href="#间接引用值" aria-hidden="true">#</a> 间接引用值</h3><p>什么叫间接引用？比如下面这个场景：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VAR1=&quot;2323232&quot;\nVAR2=&quot;VAR1&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们有一个变量VAR1，又有一个变量VAR2，这个VAR2的值是VAR1的名字，那么我们现在想通过VAR2来获取VAR1的值，这时候应该怎么办呢？</p><p>比较土鳖的方法是这样：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>eval echo \\$$VAR2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>啥意思呢？其实就是构造了一个字符串echo XXX，这个XXX就是XXX”，这个XXX就是VAR2的值VAR1，然后再用eval强制解析，这样就做到了变相取值。</p><p>这个用法的确可行，但是看起来十分的不舒服，很难直观的去理解，我们并不推荐。而且事实上我们本身就不推荐使用eval这个命令。</p><p>比较舒服的写法是下面这样:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>echo ${!VAR1}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过在变量名前加一个!就可以做到简单的间接引用了。</p><p>不过需要注意的是，用上面的方法，我们只能够做到取值，而不能做到赋值。如果想要做到赋值，还要老老实实的用eval来处理:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VAR1=VAR2\neval $VAR1=233\necho $VAR2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="巧用heredocs" tabindex="-1"><a class="header-anchor" href="#巧用heredocs" aria-hidden="true">#</a> 巧用heredocs</h3><p>所谓heredocs，也可以算是一种多行输入的方法，即在”&lt;&lt;”后定一个标识符，接着我们可以输入多行内容，直到再次遇到标识符为止。</p><p>使用heredocs，我们可以非常方便的生成一些模板文件：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat&gt;&gt;/etc/rsyncd.conf &lt;&lt; EOF\nlog file = /usr/local/logs/rsyncd.log\ntransfer logging = yes\nlog format = %t %a %m %f %b\nsyslog facility = local3\nEOF\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="学会查路径" tabindex="-1"><a class="header-anchor" href="#学会查路径" aria-hidden="true">#</a> 学会查路径</h3><p>很多情况下，我们会先获取当前脚本的路径，然后一这个路径为基准，去找其他的路径。通常我们是直接用pwd以期获得脚本的路径。</p><p>不过其实这样是不严谨的，pwd获得的是当前shell的执行路径，而不是当前脚本的执行路径。</p><p>正确的做法应该是下面这两种：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>script_dir=$(cd $(dirname $0) &amp;&amp; pwd)\nscript_dir=$(dirname $(readlink -f $0 ))\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>应当先cd进当前脚本的目录然后再pwd，或者直接读取当前脚本的所在路径。</p><h3 id="代码要简短" tabindex="-1"><a class="header-anchor" href="#代码要简短" aria-hidden="true">#</a> 代码要简短</h3><p>这里的简短不单单是指代码长度，而是只用到的命令数。原则上我们应当做到，能一条命令解决的问题绝不用两条命令解决。这不仅牵涉到代码的可读性，而且也关乎代码的执行效率。</p><p>最最经典的例子如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /etc/passwd | grep root\ngrep root /etc/passwd\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>cat命令最为人不齿的用法就是这样，用的没有任何意义，明明一条命令可以解决，他非得加根管道。。。</p><p>其实代码简短在还能某种程度上能保证效率的提升，比如下面的例子：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#method1\nfind . -name &#39;*.txt&#39; |xargs sed -i s/233/666/g\nfind . -name &#39;*.txt&#39; |xargs sed -i s/235/626/g\nfind . -name &#39;*.txt&#39; |xargs sed -i s/333/616/g\nfind . -name &#39;*.txt&#39; |xargs sed -i s/233/664/g\n#method1\nfind . -name &#39;*.txt&#39; |\nxargs sed -i &quot;s/233/666/g;s/235/626/g;s/333/616/g;s/233/664/g&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两种方法做的事情都一样，就是查找所有的.txt后缀的文件并做一系列替换。前者是多次执行find，后者是执行一次find，但是增加了sed的模式串。第一种更直观一点，但是当替换的量变大的时候，第二种的速度就会比第一种快很多。这里效率提升的原因，就是第二种只要执行一次命令，而第一种要执行多次。并且，巧用xargs命令，我们还可以十分方便的进行并行化处理:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find . -name &#39;*.txt&#39; |xargs -P $(nproc) sed -i &quot;s/233/666/g;s/235/626/g;s/333/616/g;s/233/664/g&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过-P参数指定并行度，可以进一步加快执行效率。</p><h3 id="命令并行化" tabindex="-1"><a class="header-anchor" href="#命令并行化" aria-hidden="true">#</a> 命令并行化</h3><p>当我们需要充分考虑执行效率时，我们可能需要在执行命令的时候考虑并行化。shell中最简单的并行化是通过”&amp;”以及”wait”命令来做:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func(){\n    #do sth\n｝\nfor((i=0;i&lt;10;i++))do\n    func &amp;\ndone\nwait\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，这里并行的次数不能太多，否则机器会卡死。稍微正确的做法比较复杂，以后再讨论，如果图省事可以使用parallel命令来做，或者是用上面提到的xargs来处理。</p><h3 id="全文本检索" tabindex="-1"><a class="header-anchor" href="#全文本检索" aria-hidden="true">#</a> 全文本检索</h3><p>我们知道，当我们想在文件夹下所有的txt文件中检索某一个字符串(比如233)的时候，我们可能会用类似这样的命令：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find . -name &#39;*.txt&#39; -type f | xargs grep 2333\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>很多情况下，这个命令会想我们所想的找到对应的匹配行，但是我们需要注意两个小问题。</p><p>find命令会符合要求的匹配文件名，但是如果文件名包含空格，这时候将文件名传给grep的时候就会有问题，这个文件就会被当成两个参数，这时候就要加一层处理，保证用空格分开的文件名不会被当成两个参数：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find . -type f|xargs -i echo &#39;&quot;{}&quot;&#39;|xargs grep 2333\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有时候，文件的字符集可能跟终端的字符集不一致，这时候就会导致grep在搜索时将文件当成二进制文件从而报binary file matches之类的问题。这时候要么用iconv之类的字符集转换工具将字符集进行切换，要么就在不影响查找的情况下对grep加-a参数，将所有文件看成文本文件:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find . -type f|xargs grep -a 2333\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用新写法" tabindex="-1"><a class="header-anchor" href="#使用新写法" aria-hidden="true">#</a> 使用新写法</h2><p>这里的新写法不是指有多厉害，而是指我们可能更希望使用较新引入的一些语法，更多是偏向代码风格的，比如</p><p>尽量使用func(){}来定义函数，而不是func{}</p><p>尽量使用[[]]来代替[]</p><p>尽量使用$()将命令的结果赋给变量，而不是反引号</p><p>在复杂的场景下尽量使用printf代替echo进行回显</p><p>事实上，这些新写法很多功能都比旧的写法要强大，用的时候就知道了。</p><h3 id="其他小tip" tabindex="-1"><a class="header-anchor" href="#其他小tip" aria-hidden="true">#</a> 其他小tip</h3><p>考虑到还有很多零碎的点，就不一一展开了，这里简单提一提。</p><p>路径尽量保持绝对路径，绝多路径不容易出错，如果非要用相对路径，最好用./修饰</p><p>优先使用bash的变量替换代替awk sed，这样更加简短</p><p>简单的if尽量使用&amp;&amp; ||，写成单行。</p><p>比如[[ x &gt; 2]] &amp;&amp; echo x</p><p>当export变量时，尽量加上子脚本的namespace，保证变量不冲突</p><p>会使用trap捕获信号，并在接受到终止信号时执行一些收尾工作</p><p>使用mktemp生成临时文件或文件夹</p><p>利用/dev/null过滤不友好的输出信息</p><p>会利用命令的返回值判断命令的执行情况</p><p>使用文件前要判断文件是否存在，否则做好异常处理</p><p>不要处理ls后的数据(比如ls -l | awk ‘{ print $8 }’)，ls的结果非常不确定，并且平台有关</p><p>读取文件时不要使用for loop而要使用while read</p><p>使用cp -r命令复制文件夹的时候要注意如果目的文件夹不存在则会创建，如果存在则会复制到该文件的子文件夹下</p><h2 id="静态检查工具shellcheck" tabindex="-1"><a class="header-anchor" href="#静态检查工具shellcheck" aria-hidden="true">#</a> <strong>静态检查工具shellcheck</strong></h2><h4 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h4><p>为了从制度上保证脚本的质量，我们最简单的想法大概就是搞一个静态检查工具，通过引入工具来弥补开发者可能存在的知识盲点。</p><p>市面上对于shell的静态检查工具还真不多，找来找去就找到一个叫shellcheck的工具，开源在github上，有8K多的star，看上去还是十分靠谱的。我们可以去他的主页了解具体的安装和使用信息。</p><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4><p>这个工具的对不同平台的支持力度都很大，他至少支持了Debian,Arch,Gentoo,EPEL,Fedora,OS X,openSUSE等等各种的平台的主流包管理工具。安装方便。具体可以参照安装文档</p><h4 id="集成" tabindex="-1"><a class="header-anchor" href="#集成" aria-hidden="true">#</a> 集成</h4><p>既然是静态检查工具，就一定可以集成在CI框架里，shellcheck可以非常方便的集成在Travis CI中，供以shell脚本为主语言的项目进行静态检查。</p><h4 id="样例" tabindex="-1"><a class="header-anchor" href="#样例" aria-hidden="true">#</a> 样例</h4><p>在文档的Gallery of bad code里，也提供了非常详细的“坏代码”的标准，具有非常不错的参考价值，可以在闲下来的时候当成”Java Puzzlers“之类的书来读读还是很惬意的。</p><p>参考：</p>',159),h=(0,a.Uk)("Shell脚本编程30分钟入门 "),v={href:"https://github.com/qinjx/30min_guides/blob/master/shell.md",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("https://github.com/qinjx/30min_guides/blob/master/shell.md"),o={},m=(0,n(83744).Z)(o,[["render",function(e,i){const n=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[l,(0,a._)("div",d,[s,(0,a._)("p",null,[r,(0,a._)("a",t,[c,(0,a.Wm)(n)])])]),u,(0,a._)("p",null,[h,(0,a._)("a",v,[p,(0,a.Wm)(n)])])])}]])}}]);