"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[64399],{86543:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-16ee764b","path":"/python-tutor/basics/grammar.html","title":"基础语法","lang":"zh-CN","frontmatter":{"index":2,"summary":"基础语法 最近要开始新的项目，工作又开始忙起来了，不过还是每天要抽时间来写博客，但不可能做到日更，因为一篇博客，写的时间还是挺长的。Gitbook 同时更新喔。 注：看到以前矫情的话语，一下子就想把它给删掉。可以刚刚按了删除键才发现，删了之后，不知道写什么了。就瞬间撤销了。这一章节中改动了挺多东西的，也新增了很多例子。 目录 # 一、Python 语法的简要","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/python-tutor/basics/grammar.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"基础语法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-26T11:39:36.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-05-26T11:39:36.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1、字符串","slug":"_1、字符串","children":[]},{"level":2,"title":"2、整数","slug":"_2、整数","children":[]},{"level":2,"title":"3、浮点数","slug":"_3、浮点数","children":[]},{"level":2,"title":"4、布尔值","slug":"_4、布尔值","children":[]},{"level":2,"title":"5、空值","slug":"_5、空值","children":[]},{"level":2,"title":"1、变量的创建和赋值","slug":"_1、变量的创建和赋值","children":[]},{"level":2,"title":"2、变量的指向问题","slug":"_2、变量的指向问题","children":[]},{"level":2,"title":"3、多个变量赋值","slug":"_3、多个变量赋值","children":[]}],"git":{"createdTime":1653565176000,"updatedTime":1653565176000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":13.63,"words":4090},"filePathRelative":"python-tutor/basics/grammar.md","localizedDate":"2022年5月26日"}')},11013:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var o=a(66252);const n=(0,o._)("h1",{id:"基础语法",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#基础语法","aria-hidden":"true"},"#"),(0,o.Uk)(" 基础语法")],-1),p=(0,o.Uk)("最近要开始新的项目，工作又开始忙起来了，不过还是每天要抽时间来写博客，但不可能做到日更，因为一篇博客，写的时间还是挺长的。"),i={href:"https://www.readwithu.com/",target:"_blank",rel:"noopener noreferrer"},c=(0,o.Uk)("Gitbook"),d=(0,o.Uk)(" 同时更新喔。"),r=(0,o.uE)('<p>注：看到以前矫情的话语，一下子就想把它给删掉。可以刚刚按了删除键才发现，删了之后，不知道写什么了。就瞬间撤销了。这一章节中改动了挺多东西的，也新增了很多例子。</p><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h1><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-基本数据类型和变量.png" alt="" loading="lazy"></p><h1 id="一、python-语法的简要说明" tabindex="-1"><a class="header-anchor" href="#一、python-语法的简要说明" aria-hidden="true">#</a> 一、Python 语法的简要说明</h1><p>每种语言都有自己的语法，不管是自然语言（英语，中文）还是计算机编程语言。</p><p>Python 也不例外，它也有自己的语法规则，然后编辑器或者解析器根据符合语法的程序代码转换成 CPU 能够执行的机器码，然后执行。</p><p>Python 的语法比较简单，采用缩进方式。</p><p><img src="http://upload-images.jianshu.io/upload_images/2136918-b9b072c2587cc89e.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="Python语法.png" loading="lazy"></p><p>如上面的代码截图，以 # 开头的语句是注释，其他每一行都是一个语句，当语句以冒号 : 结尾时，缩进的语句视为代码块。</p><p>要注意的是 Python 程序是大小写敏感的，如果写错了大小写，程序会报错。</p>',10),s=(0,o.Uk)("更多的说明可以看看之前的文章："),l={href:"https://www.readwithu.com/codeSpecification/codeSpecification_first.html",target:"_blank",rel:"noopener noreferrer"},g=(0,o.Uk)("Python代码规范中的简明概述"),h=(0,o.uE)('<h1 id="二、print-函数" tabindex="-1"><a class="header-anchor" href="#二、print-函数" aria-hidden="true">#</a> 二、print() 函数</h1><p>这里先说一下 <code>print()</code> 函数，如果你是新手，可能对函数不太了解，没关系，在这里你只要了解它的组成部分和作用就可以了，后面函数这一块会详细说明的。</p><p><code>print()</code> 函数由两部分构成 ：</p><ol><li>指令：print</li><li>指令的执行对象，在 print 后面的括号里的内容</li></ol><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-17-074454.png" alt="" loading="lazy"></p><p>而 <code>print()</code> 函数的作用是让计算机把你给它的指令结果，显示在屏幕的终端上。这里的指令就是你在 <code>print()</code> 函数里的内容。</p><p>比如在上一章节中，我们的第一个 Python 程序，打印 <code>print(&#39;Hello Python&#39;)</code></p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-17-080241.png" alt="" loading="lazy"></p><p>它的执行流程如下：</p><ol><li>向解释器发出指令，打印 &#39;Hello Python&#39;</li><li>解析器把代码解释为计算器能读懂的机器语言</li><li>计算机执行完后就打印结果</li></ol><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-17-083751.png" alt="" loading="lazy"></p><p>可能这里有人会问，为什么要加单引号，直接 <code>print(Hello Python)</code> 不行吗？</p><p>如果你写代码过程中，有这样的疑问，直接写一下代码，自己验证一下是最好的。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-17-094034.png" alt="" loading="lazy"></p><p>显然，去掉单引号后，运行结果标红了（报错），证明这是不可以的。</p><p>主要是因为这不符合 Python 的语法规则，去掉单引号后， Python 解释器根本没法看懂你写的是什么。</p><p>所以就报 <code>SyntaxError: invalid syntax</code> 的错误，意思是：语法错误。说明你的语句不合规则。</p><h1 id="三、python-的基本数据类型" tabindex="-1"><a class="header-anchor" href="#三、python-的基本数据类型" aria-hidden="true">#</a> 三、Python 的基本数据类型</h1><h2 id="_1、字符串" tabindex="-1"><a class="header-anchor" href="#_1、字符串" aria-hidden="true">#</a> 1、字符串</h2><p>字符串英文 string ，是 python 中随处可见的数据类型，字符串的识别也非常的简单，就是用「引号」括起来的。</p><p>引号包括单引号 <code>&#39; &#39;</code> ，双引号 <code>&quot; &quot;</code> 和 三引号 <code>&#39;&#39;&#39; &#39;&#39;&#39;</code> ，比如 <code>&#39;abc&#39;</code> ，<code>&quot;123&quot;</code> 等等。</p><p>这里请注意，单引号 <code>&#39;&#39;</code> 或双引号 <code>&quot;&quot;</code> 本身只是一种表示方式，不是字符串的一部分，因此，字符串 <code>&#39;abc&#39;</code> 只有 a，b，c 这 3 个字符。</p><p>如果善于思考的你，一定会问？</p><p>为什么要有单引号 <code>&#39; &#39;</code> ，双引号 <code>&quot; &quot;</code> 和 三引号 <code>&#39;&#39;&#39; &#39;&#39;&#39;</code> 啊，直接定死一个不就好了，搞那么麻烦，那么多规则表达同一个东西干嘛？</p><p>对，一般来说一种语法只用一个规则来表示是最好的，竟然现在字符串有三种不同的表示，证明是有原因的。</p><p>那么我们先来看下这三种方式，来定义同样内容的字符串，再把它打印出来，看看是怎样的。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-071320.png" alt="" loading="lazy"></p><p>打印出来的结果是一样的。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-071403.png" alt="" loading="lazy"></p><p>那如果我们的字符串不是 <code>两点水</code>，是 <code>两&#39;点&#39;水</code> 这样呢？</p><p>这样就直接报错了。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-071800.png" alt="" loading="lazy"></p><p>但是要注意，用单引号 <code>&#39; &#39;</code> 不行，用双引号 <code>&quot; &quot;</code> 是可以的。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-072459.png" alt="" loading="lazy"></p><p>打印的结果也跟预想的一样：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-072523.png" alt="" loading="lazy"></p><p>至于三引号，也是一样的，如果字符串内容里面含有双引号，也是会报同样的错误的。那么这时候你就可以用三引号了。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-072701.png" alt="" loading="lazy"></p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-072829.png" alt="" loading="lazy"></p><p>那么用单引号，双引号定义的字符串就不能表示这样的内容吗？</p><p>并不是的，你可以使用转义字符。</p><p>比如单引号，你可以使用 <code>\\&#39;</code> 来表示，双引号可以使用 <code>\\&quot;</code> 来表示。</p><p>注意，这里的是反斜杠 <code>\\</code>, 不是斜杆 <code>/</code> 。</p><p>了解了之后，直接程序测试一下：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-073544.png" alt="" loading="lazy"></p><p>运行结果如下：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-073601.png" alt="" loading="lazy"></p><p>最后，也提一下， 三引号 <code>&#39;&#39;&#39; &#39;&#39;&#39;</code> 是直接可以分行的。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-074157.png" alt="" loading="lazy"></p><p>运行结果：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-074209.png" alt="" loading="lazy"></p><h2 id="_2、整数" tabindex="-1"><a class="header-anchor" href="#_2、整数" aria-hidden="true">#</a> 2、整数</h2><p>整数英文为 integer 。代码中的整数跟我们平常认识的整数一样，包括正整数、负整数和零，是没有小数点的数字。</p><p>Python 可以处理任意大小的整数，例如：<code>1</code>，<code>100</code>，<code>-8080</code>，<code>0</code>，等等。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-075017.png" alt="" loading="lazy"></p><p>运行结果：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-075046.png" alt="" loading="lazy"></p><p>当然，要注意了，如果数字你用引号括起来了，那就属于字符串，而不属于整数。比如 <code>&#39;100&#39;</code> , 这 100 是字符串，不是整数。</p><p>在现实世界中，整数我们通常会做计算，因此代码世界也是一样，整数可以直接加减乘除。</p><p>比如：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-075748.png" alt="" loading="lazy"></p><p>程序运行结果：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-29-075806.png" alt="" loading="lazy"></p><p>这里提示下大家，看看上面的例子，有没有发现什么？</p><p>看下 <code>int4</code> 打印出来的结果，是 <code>0.5</code> , 是一个小数。</p><p>而我们上面对整数的定义是什么？</p><p>是没有小数点的数字。</p><p>因此 <code>int4</code> 肯定不是整数。</p><p>这里我们可以使用 <code>type()</code> 函数来查看下类型。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-30-032745.png" alt="" loading="lazy"></p><p>结果如下：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-30-032826.png" alt="" loading="lazy"></p><p>可以看到 <code>int4</code> 是 float 类型，而 <code>int1</code> ,<code>int2</code>,<code>int3</code> 都是 int 整数类型。</p><p>那么 float 是什么类型呢？</p><p>float 是浮点数类型，是我们下面会说到的。</p><p>在说浮点数之前，各位可以看下 Python 的算术运算符有哪些，有个印象。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-30-034538.png" alt="" loading="lazy"></p><h2 id="_3、浮点数" tabindex="-1"><a class="header-anchor" href="#_3、浮点数" aria-hidden="true">#</a> 3、浮点数</h2><p>浮点数的英文名是 float ，是指带小数的数字。</p><p>浮点数跟整数有很多类似的地方，但是浮点数是最折磨人的，也是最难让人捉摸透的。</p><p>就好比世界级的大佬 Herb Sutter 说的：「世上的人可以分为3类：一种是知道自己不懂浮点运算的；一种是以为自己懂浮点运算的；最后一种是极少的专家级人物，他们想知道自己是否有可能，最终完全理解浮点运算。」</p><p>为什么这么说呢？</p><p>看下面的例子 ，像整数一样，只是基本的浮点数加法运算。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-30-081702.png" alt="" loading="lazy"></p><p>可是运算结果，对于初学者来说，可能会接受不了。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-30-081922.png" alt="" loading="lazy"></p><p>对于第一个还好，<code>0.55+0.41</code> 等于 0.96 ，运算结果完全一致。可是后面两个，你会发现怎么出现了那么多个零。</p><p>这是因为计算机对浮点数的表达本身是不精确的。保存在计算机中的是二进制数，二进制对有些数字不能准确表达，只能非常接近这个数。</p><p>所以我们在对浮点数做运算和比较大小的时候要小心。</p><h2 id="_4、布尔值" tabindex="-1"><a class="header-anchor" href="#_4、布尔值" aria-hidden="true">#</a> 4、布尔值</h2><p>布尔值和布尔代数的表示完全一致，一个布尔值只有 <code>True</code> 、 <code>False</code>两种值，要么是 <code>True</code>，要么是 <code>False</code>，在 Python 中，可以直接用 True、False 表示布尔值（请注意大小写），也可以通过布尔运算计算出来。</p><p>布尔值可以用 <code>and</code>、<code>or</code> 和 <code>not</code> 运算。</p><p><code>and</code> 运算是与运算，只有所有都为 True，and 运算结果才是 True。</p><p><code>or</code> 运算是或运算，只要其中有一个为 True，or 运算结果就是 True。</p><p><code>not</code> 运算是非运算，它是一个单目运算符，把 True 变成 False，False 变成 True。</p><h2 id="_5、空值" tabindex="-1"><a class="header-anchor" href="#_5、空值" aria-hidden="true">#</a> 5、空值</h2><p>基本上每种编程语言都有自己的特殊值——空值，在 Python 中，用 None 来表示</p><h1 id="四、-字符串的编码问题" tabindex="-1"><a class="header-anchor" href="#四、-字符串的编码问题" aria-hidden="true">#</a> 四、 字符串的编码问题</h1><p>我们都知道计算机只能处理数字，如果要处理文本，就必须先把文本转换为数字才能处理。最早的计算机在设计时采用8个比特（bit）作为一个字节（byte），所以，一个字节能表示的最大的整数就是255（二进制11111111=十进制255），0 - 255被用来表示大小写英文字母、数字和一些符号，这个编码表被称为ASCII编码，比如大写字母 A 的编码是 65，小写字母 z 的编码是 122。</p><p>如果要表示中文，显然一个字节是不够的，至少需要两个字节，而且还不能和 ASCII 编码冲突，所以，中国制定了 GB2312 编码，用来把中文编进去。</p><p>类似的，日文和韩文等其他语言也有这个问题。为了统一所有文字的编码，Unicode 应运而生。Unicode 把所有语言都统一到一套编码里，这样就不会再有乱码问题了。</p><p>Unicode 通常用两个字节表示一个字符，原有的英文编码从单字节变成双字节，只需要把高字节全部填为 0 就可以。</p><p>因为 Python 的诞生比 Unicode 标准发布的时间还要早，所以最早的Python 只支持 ASCII 编码，普通的字符串 &#39;ABC&#39; 在 Python 内部都是 ASCII 编码的。</p><p>Python 在后来添加了对 Unicode 的支持，以 Unicode 表示的字符串用<code>u&#39;...&#39;</code>表示。</p><p>不过在最新的 Python 3 版本中，字符串是以 Unicode 编码的，也就是说，Python 的字符串支持多语言。就像上面的例子一样，我的代码中没有加<code>u&#39;...&#39;</code>，也能正常显示。</p><p>不过由于 Python 源代码也是一个文本文件，所以，当你的源代码中包含中文的时候，在保存源代码时，就需要务必指定保存为 UTF-8 编码。当Python 解释器读取源代码时，为了让它按 UTF-8 编码读取，我们通常在文件开头写上这两行：</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>\n<span class="token comment"># -*- coding: utf-8 -*-</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一行注释是为了告诉 Linux/OS X 系统，这是一个 Python 可执行程序，Windows 系统会忽略这个注释；</p><p>第二行注释是为了告诉 Python 解释器，按照 UTF-8 编码读取源代码，否则，你在源代码中写的中文输出可能会有乱码。</p><p>申明了 UTF-8 编码并不意味着你的 .py 文件就是 UTF-8 编码的，必须并且要确保文本编辑器正在使用 UTF-8 without BOM 编码</p><h1 id="五、基本数据类型转换" tabindex="-1"><a class="header-anchor" href="#五、基本数据类型转换" aria-hidden="true">#</a> 五、基本数据类型转换</h1><p>Python 中基本数据类型转换的方法有下面几个。</p><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>int(x [,base ])</td><td>将x转换为一个整数</td></tr><tr><td>float(x )</td><td>将x转换到一个浮点数</td></tr><tr><td>complex(real [,imag ])</td><td>创建一个复数</td></tr><tr><td>str(x )</td><td>将对象 x 转换为字符串</td></tr><tr><td>repr(x )</td><td>将对象 x 转换为表达式字符串</td></tr><tr><td>eval(str )</td><td>用来计算在字符串中的有效 Python 表达式,并返回一个对象</td></tr><tr><td>tuple(s )</td><td>将序列 s 转换为一个元组</td></tr><tr><td>list(s )</td><td>将序列 s 转换为一个列表</td></tr><tr><td>chr(x )</td><td>将一个整数转换为一个字符</td></tr><tr><td>unichr(x )</td><td>将一个整数转换为 Unicode 字符</td></tr><tr><td>ord(x )</td><td>将一个字符转换为它的整数值</td></tr><tr><td>hex(x )</td><td>将一个整数转换为一个十六进制字符串</td></tr><tr><td>oct(x )</td><td>将一个整数转换为一个八进制字符串</td></tr></tbody></table><p>注：在 Python 3 里，只有一种整数类型 int，表示为长整型，没有 python2 中的 Long。</p><p>这里我们可以尝试一下这些函数方法。</p><p>比如 <code>int()</code> 函数，将符合规则的字符串类型转化为整数 。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-30-091547.png" alt="" loading="lazy"></p><p>输出结果：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-30-091648.png" alt="" loading="lazy"></p><p>注意这里是符合规则的字符串类型，如果是文字形式等字符串是不可以被 <code>int()</code> 函数强制转换的。</p><p>还有小数形式的字符串也是不能用 <code>int()</code> 函数转换的。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-064739.png" alt="" loading="lazy"></p><p>这样转换会报错。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-064811.png" alt="" loading="lazy"></p><p>但这并不是意味着浮点数不能转化为整数，而是小数形式的字符串不能强转为字符串。</p><p>浮点数还是可以通过 <code>int()</code> 函数转换的。</p><p>比如：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-065336.png" alt="" loading="lazy"></p><p>输出结果：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-065407.png" alt="" loading="lazy"></p><p>但是你会发现，结果是 88 ，后面小数点的 0.88 被去掉了。</p><p>这是因为 <code>int()</code> 函数是将数据转为整数。如果是浮点数转为整数，那么 <code>int()</code> 函数就会做取整处理，只取整数部分。所以输出的结果为 88 。</p><p>其余的方法就不一一列举了，只要多用，多试，这些方法都会慢慢熟悉的。还有如果是初学者，完全可以每个方法都玩一下，写一下，随便写，然后运行看结果，反正你的电脑又不会因为这样而玩坏的。</p><h1 id="六、python-中的变量" tabindex="-1"><a class="header-anchor" href="#六、python-中的变量" aria-hidden="true">#</a> 六、Python 中的变量</h1><h2 id="_1、变量的创建和赋值" tabindex="-1"><a class="header-anchor" href="#_1、变量的创建和赋值" aria-hidden="true">#</a> 1、变量的创建和赋值</h2><p>在 Python 程序中，变量是用一个变量名表示，可以是任意数据类型，变量名必须是大小写英文、数字和下划线（_）的组合，且不能用数字开头，比如：</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>a<span class="token operator">=</span><span class="token number">88</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里的 <code>a</code> 就是一个变量，代表一个整数，注意一点是 Python 是不用声明数据类型的。在 Python 中 <code>=</code> 是赋值语句，跟其他的编程语言也是一样的，因为 Python 定义变量时不需要声明数据类型，因此可以把任意的数据类型赋值给变量，且同一个变量可以反复赋值，而且可以是不同的数据类型。</p><p><img src="http://upload-images.jianshu.io/upload_images/2136918-69affa6da83f1dfc.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="Python 中的变量.png" loading="lazy"></p><p>这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如 Java 是静态语言。</p><h2 id="_2、变量的指向问题" tabindex="-1"><a class="header-anchor" href="#_2、变量的指向问题" aria-hidden="true">#</a> 2、变量的指向问题</h2><p>我们来看下这段代码，发现最后打印出来的变量 b 是 <code>Hello Python</code> 。</p><p><img src="http://upload-images.jianshu.io/upload_images/2136918-052a908c25fcfc49.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="Python变量指向.png" loading="lazy"></p><p>这主要是变量 a 一开始是指向了字符串 <code>Hello Python</code> ，<code>b=a</code> 创建了变量 b ,变量 b 也指向了a 指向的字符串 <code>Hello Python</code>，最后 <code>a=123</code>，把 变量 a 重新指向了 <code>123</code>，所以最后输出变量 b 是 <code>Hello Python</code></p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-变量的指向.png" alt="" loading="lazy"></p><h2 id="_3、多个变量赋值" tabindex="-1"><a class="header-anchor" href="#_3、多个变量赋值" aria-hidden="true">#</a> 3、多个变量赋值</h2><p>Python 允许同时为多个变量赋值。例如：</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上实例，创建一个整型对象，值为 1，三个变量被分配到相同的内存空间上。</p><p>当然也可以为多个对象指定多个变量。例如：</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;liangdianshui&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上实例，两个整型对象 1 和 2 的分配给变量 a 和 b，字符串对象 &quot;liangdianshui&quot; 分配给变量 c。</p>',152),m={},u=(0,a(83744).Z)(m,[["render",function(e,t){const a=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[n,(0,o._)("p",null,[p,(0,o._)("a",i,[c,(0,o.Wm)(a)]),d]),r,(0,o._)("p",null,[s,(0,o._)("a",l,[g,(0,o.Wm)(a)])]),h])}]])}}]);