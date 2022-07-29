"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[45212],{25624:(e,t,r)=>{r.r(t),r.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-69532568","path":"/linux-tutor/advance/03_optimization.html","title":"性能优化","lang":"zh-CN","frontmatter":{"summary":"性能优化 性能优化的核心是找出系统的瓶颈点，问题找到了，优化的工作也就完成了大半； 这里介绍的性能优化主要从两个层面来介绍：系统层面和程序层面； 分析系统瓶颈 系统响应变慢，首先得定位大致的问题出在哪里，是IO瓶颈、CPU瓶颈、内存瓶颈还是程序导致的系统问题； 使用top工具能够比较全面的查看我们关注的点: $top top - 09:14:56 up 26","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/linux-tutor/advance/03_optimization.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"性能优化"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-26T11:39:36.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-05-26T11:39:36.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"分析系统瓶颈","slug":"分析系统瓶颈","children":[]},{"level":2,"title":"分析内存瓶颈","slug":"分析内存瓶颈","children":[]},{"level":2,"title":"分析IO瓶颈","slug":"分析io瓶颈","children":[]},{"level":2,"title":"分析进程调用","slug":"分析进程调用","children":[]},{"level":2,"title":"优化程序代码","slug":"优化程序代码","children":[{"level":3,"title":"gprof使用步骤","slug":"gprof使用步骤","children":[]}]},{"level":2,"title":"其它工具","slug":"其它工具","children":[]}],"git":{"createdTime":1653565176000,"updatedTime":1653565176000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":6.92,"words":2076},"filePathRelative":"linux-tutor/advance/03_optimization.md","localizedDate":"2022年5月26日"}')},68849:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var a=r(66252);const o=(0,a.uE)('<h1 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>性能优化的核心是找出系统的瓶颈点，问题找到了，优化的工作也就完成了大半； 这里介绍的性能优化主要从两个层面来介绍：系统层面和程序层面；</p></div><h2 id="分析系统瓶颈" tabindex="-1"><a class="header-anchor" href="#分析系统瓶颈" aria-hidden="true">#</a> 分析系统瓶颈</h2><p>系统响应变慢，首先得定位大致的问题出在哪里，是IO瓶颈、CPU瓶颈、内存瓶颈还是程序导致的系统问题；</p><p>使用top工具能够比较全面的查看我们关注的点:</p><pre><code>$top\ntop - 09:14:56 up 264 days, 20:56,  1 user,  load average: 0.02, 0.04, 0.00\nTasks:  87 total,   1 running,  86 sleeping,   0 stopped,   0 zombie\nCpu(s):  0.0%us,  0.2%sy,  0.0%ni, 99.7%id,  0.0%wa,  0.0%hi,  0.0%si,  0.2%st\nMem:    377672k total,   322332k used,    55340k free,    32592k buffers\nSwap:   397308k total,    67192k used,   330116k free,    71900k cached\nPID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND\n1 root      20   0  2856  656  388 S  0.0  0.2   0:49.40 init\n2 root      20   0     0    0    0 S  0.0  0.0   0:00.00 kthreadd\n3 root      20   0     0    0    0 S  0.0  0.0   7:15.20 ksoftirqd/0\n4 root      RT   0     0    0    0 S  0.0  0.0   0:00.00 migration/\n</code></pre><p>进入交互模式后:</p><p>: - 输入M，进程列表按内存使用大小降序排序，便于我们观察最大内存使用者使用有问题（检测内存泄漏问题）; - 输入P，进程列表按CPU使用大小降序排序，便于我们观察最耗CPU资源的使用者是否有问题；</p><p>top第三行显示当前系统的，其中有两个值很关键:</p><p>: - %id：空闲CPU时间百分比，如果这个值过低，表明系统CPU存在瓶颈； - %wa：等待I/O的CPU时间百分比，如果这个值过高，表明IO存在瓶颈；</p><h2 id="分析内存瓶颈" tabindex="-1"><a class="header-anchor" href="#分析内存瓶颈" aria-hidden="true">#</a> 分析内存瓶颈</h2><p>查看内存是否存在瓶颈，使用top指令看比较麻烦，而free命令更为直观:</p><pre><code>[/home/weber#]free\n             total       used       free     shared    buffers     cached\nMem:        501820     452028      49792      37064       5056     136732\n-/+ buffers/cache:     310240     191580\nSwap:            0          0          0\n[/home/weber#]top\ntop - 17:52:17 up 42 days,  7:10,  1 user,  load average: 0.02, 0.02, 0.05\nTasks:  80 total,   1 running,  79 sleeping,   0 stopped,   0 zombie\n%Cpu(s):  0.0 us,  0.0 sy,  0.0 ni,100.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st\nKiB Mem:    501820 total,   452548 used,    49272 free,     5144 buffers\nKiB Swap:        0 total,        0 used,        0 free.   136988 cached Mem\n</code></pre><p>top工具显示了free工具的第一行所有信息，但真实可用的内存，还需要自己计算才知道; 系统实际可用的内存为free工具输出第二行的free+buffer+cached；也就是第三行的free值191580；关于free命令各个值的详情解读，请参考这篇文章 <code>free</code>{.interpreted-text role=&quot;ref&quot;} ;</p><p>如果是因为缺少内存，系统响应变慢很明显，因为这使得系统不停的做换入换出的工作;</p><p>进一步的监视内存使用情况，可使用vmstat工具，实时动态监视操作系统的内存和虚拟内存的动态变化。 参考： <code>vmstat</code>{.interpreted-text role=&quot;ref&quot;} ;</p><h2 id="分析io瓶颈" tabindex="-1"><a class="header-anchor" href="#分析io瓶颈" aria-hidden="true">#</a> 分析IO瓶颈</h2><p>如果IO存在性能瓶颈，top工具中的%wa会偏高；</p><p>进一步分析使用iostat工具:</p><pre><code>/root$iostat -d -x -k 1 1\nLinux 2.6.32-279.el6.x86_64 (colin)   07/16/2014      _x86_64_        (4 CPU)\n\nDevice:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await  svctm  %util\nsda               0.02     7.25    0.04    1.90     0.74    35.47    37.15     0.04   19.13   5.58   1.09\ndm-0              0.00     0.00    0.04    3.05     0.28    12.18     8.07     0.65  209.01   1.11   0.34\ndm-1              0.00     0.00    0.02    5.82     0.46    23.26     8.13     0.43   74.33   1.30   0.76\ndm-2              0.00     0.00    0.00    0.01     0.00     0.02     8.00     0.00    5.41   3.28   0.00\n</code></pre><ul><li>如果%iowait的值过高，表示硬盘存在I/O瓶颈。</li><li>如果 %util 接近 100%，说明产生的I/O请求太多，I/O系统已经满负荷，该磁盘可能存在瓶颈。</li><li>如果 svctm 比较接近 await，说明 I/O 几乎没有等待时间；</li><li>如果 await 远大于 svctm，说明I/O 队列太长，io响应太慢，则需要进行必要优化。</li><li>如果avgqu-sz比较大，也表示有大量io在等待。</li></ul><p>更多参数说明请参考 <code>iostat</code>{.interpreted-text role=&quot;ref&quot;} ;</p><h2 id="分析进程调用" tabindex="-1"><a class="header-anchor" href="#分析进程调用" aria-hidden="true">#</a> 分析进程调用</h2><p>通过top等工具发现系统性能问题是由某个进程导致的之后，接下来我们就需要分析这个进程；继续 查询问题在哪；</p><p>这里我们有两个好用的工具： pstack和pstrace</p><p>pstack用来跟踪进程栈，这个命令在排查进程问题时非常有用，比如我们发现一个服务一直处于work状态（如假死状态，好似死循环），使用这个命令就能轻松定位问题所在；可以在一段时间内，多执行几次pstack，若发现代码栈总是停在同一个位置，那个位置就需要重点关注，很可能就是出问题的地方；</p><p>示例：查看bash程序进程栈:</p><pre><code>/opt/app/tdev1$ps -fe| grep bash\ntdev1   7013  7012  0 19:42 pts/1    00:00:00 -bash\ntdev1  11402 11401  0 20:31 pts/2    00:00:00 -bash\ntdev1  11474 11402  0 20:32 pts/2    00:00:00 grep bash\n/opt/app/tdev1$pstack 7013\n#0  0x00000039958c5620 in __read_nocancel () from /lib64/libc.so.6\n#1  0x000000000047dafe in rl_getc ()\n#2  0x000000000047def6 in rl_read_key ()\n#3  0x000000000046d0f5 in readline_internal_char ()\n#4  0x000000000046d4e5 in readline ()\n#5  0x00000000004213cf in ?? ()\n#6  0x000000000041d685 in ?? ()\n#7  0x000000000041e89e in ?? ()\n#8  0x00000000004218dc in yyparse ()\n#9  0x000000000041b507 in parse_command ()\n#10 0x000000000041b5c6 in read_command ()\n#11 0x000000000041b74e in reader_loop ()\n#12 0x000000000041b2aa in main ()\n</code></pre><p>而strace用来跟踪进程中的系统调用；这个工具能够动态的跟踪进程执行时的系统调用和所接收的信号。是一个非常有效的检测、指导和调试工具。系统管理员可以通过该命令容易地解决程序问题。</p><p>参考： <code>strace</code>{.interpreted-text role=&quot;ref&quot;} ;</p><h2 id="优化程序代码" tabindex="-1"><a class="header-anchor" href="#优化程序代码" aria-hidden="true">#</a> 优化程序代码</h2><p>优化自己开发的程序，建议采用以下准则:</p><ol><li>二八法则：在任何一组东西中，最重要的只占其中一小部分，约20%，其余80%的尽管是多数，却是次要的；在优化实践中，我们将精力集中在优化那20%最耗时的代码上，整体性能将有显著的提升；这个很好理解。函数A虽然代码量大，但在一次正常执行流程中，只调用了一次。而另一个函数B代码量比A小很多，但被调用了1000次。显然，我们更应关注B的优化。</li><li>编完代码，再优化；编码的时候总是考虑最佳性能未必总是好的；在强调最佳性能的编码方式的同时，可能就损失了代码的可读性和开发效率；</li></ol><h3 id="gprof使用步骤" tabindex="-1"><a class="header-anchor" href="#gprof使用步骤" aria-hidden="true">#</a> gprof使用步骤</h3><ol><li>用gcc、g++、xlC编译程序时，使用-pg参数，如：g++ -pg -o test.exe test.cpp编译器会自动在目标代码中插入用于性能测试的代码片断，这些代码在程序运行时采集并记录函数的调用关系和调用次数，并记录函数自身执行时间和被调用函数的执行时间。</li><li>执行编译后的可执行程序，如：./test.exe。该步骤运行程序的时间会稍慢于正常编译的可执行程序的运行时间。程序运行结束后，会在程序所在路径下生成一个缺省文件名为gmon.out的文件，这个文件就是记录程序运行的性能、调用关系、调用次数等信息的数据文件。</li><li>使用gprof命令来分析记录程序运行信息的gmon.out文件，如：gprof test.exe gmon.out则可以在显示器上看到函数调用相关的统计、分析信息。上述信息也可以采用gprof test.exe gmon.out&gt; gprofresult.txt重定向到文本文件以便于后续分析。</li></ol><p>关于gprof的使用案例，请参考 <a href="#f1">[f1]</a>{.citation} ;</p><h2 id="其它工具" tabindex="-1"><a class="header-anchor" href="#其它工具" aria-hidden="true">#</a> 其它工具</h2><p>调试内存泄漏的工具valgrind，感兴趣的朋友可以google了解；</p><p>OProfile: Linux 平台上的一个功能强大的性能分析工具,使用参考 <a href="#f2">[f2]</a>{.citation} ;</p><p>除了上面介绍的工具，还有一些比较全面的性能分析工具，比如sar（Linux系统上默认不安装，需要手动安装下）； 将sar的常驻监控工具打开后，能够收集比较全面的性能分析数据；</p><p>关于sar的使用，参考 <code>sar</code>{.interpreted-text role=&quot;ref&quot;} ;</p><p>::: {#citations}</p><p>[f1]{#f1 .citation-label}</p>',43),i=(0,a.Uk)(": C++的性能优化实践 "),n={href:"http://www.cnblogs.com/me115/archive/2013/06/05/3117967.html",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("http://www.cnblogs.com/me115/archive/2013/06/05/3117967.html"),l=(0,a._)("p",null,"[f2]{#f2 .citation-label}",-1),d=(0,a.Uk)(": 用 OProfile 彻底了解性能 "),s={href:"http://www.ibm.com/developerworks/cn/linux/l-oprof/",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("http://www.ibm.com/developerworks/cn/linux/l-oprof/"),h=(0,a._)("p",null,"[f3]{#f3 .citation-label}",-1),u=(0,a.Uk)(": Linux上的free命令详解 "),f={href:"http://www.cnblogs.com/coldplayerest/archive/2010/02/20/1669949.html",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("http://www.cnblogs.com/coldplayerest/archive/2010/02/20/1669949.html"),g=(0,a.Uk)(" :::"),x={},b=(0,r(83744).Z)(x,[["render",function(e,t){const r=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[o,(0,a._)("p",null,[i,(0,a._)("a",n,[p,(0,a.Wm)(r)])]),l,(0,a._)("p",null,[d,(0,a._)("a",s,[c,(0,a.Wm)(r)])]),h,(0,a._)("p",null,[u,(0,a._)("a",f,[m,(0,a.Wm)(r)]),g])])}]])}}]);