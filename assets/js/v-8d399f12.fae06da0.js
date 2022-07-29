"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[33337],{63963:(e,t,p)=>{p.r(t),p.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-8d399f12","path":"/python-tutor/basics/thread-intro.html","title":"线程介绍","lang":"zh-CN","frontmatter":{"index":14,"summary":"线程介绍 学编程，谁没有为线程折腾过啊。 目录 # 线程与进程 # 线程与进程是操作系统里面的术语，简单来讲，每一个应用程序都有一个自己的进程。 操作系统会为这些进程分配一些执行资源，例如内存空间等。 在进程中，又可以创建一些线程，他们共享这些内存空间，并由操作系统调用，以便并行计算。 我们都知道现代操作系统比如 Mac OS X，UNIX，Linux，Wi","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/python-tutor/basics/thread-intro.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"线程介绍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-26T11:39:36.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-05-26T11:39:36.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1653549183000,"updatedTime":1653565176000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":2}]},"readingTime":{"minutes":4.03,"words":1210},"filePathRelative":"python-tutor/basics/thread-intro.md","localizedDate":"2022年5月26日"}')},53794:(e,t,p)=>{p.r(t),p.d(t,{default:()=>n});var a=p(66252);const r=[(0,a.uE)('<h1 id="线程介绍" tabindex="-1"><a class="header-anchor" href="#线程介绍" aria-hidden="true">#</a> 线程介绍</h1><p>学编程，谁没有为线程折腾过啊。</p><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h1><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-10-14-草根学Python（十三） 线程和进程.png" alt="" loading="lazy"></p><h1 id="线程与进程" tabindex="-1"><a class="header-anchor" href="#线程与进程" aria-hidden="true">#</a> 线程与进程</h1><p>线程与进程是操作系统里面的术语，简单来讲，每一个应用程序都有一个自己的进程。</p><p>操作系统会为这些进程分配一些执行资源，例如内存空间等。</p><p>在进程中，又可以创建一些线程，他们共享这些内存空间，并由操作系统调用，以便并行计算。</p><p>我们都知道现代操作系统比如 Mac OS X，UNIX，Linux，Windows 等可以同时运行多个任务。</p><p>打个比方，你一边在用浏览器上网，一边在听敲代码，一边用 Markdown 写博客，这就是多任务，至少同时有 3 个任务正在运行。</p><p>当然还有很多任务悄悄地在后台同时运行着，只是桌面上没有显示而已。</p><p>对于操作系统来说，一个任务就是一个进程（Process），比如打开一个浏览器就是启动一个浏览器进程，打开 PyCharm 就是一个启动了一个 PtCharm 进程，打开 Markdown 就是启动了一个 Md 的进程。</p><p>虽然现在多核 CPU 已经非常普及了。</p><p>可是由于 CPU 执行代码都是顺序执行的，这时候我们就会有疑问，单核 CPU 是怎么执行多任务的呢？</p><p>其实就是操作系统轮流让各个任务交替执行，任务 1 执行 0.01 秒，切换到任务 2 ，任务 2 执行 0.01 秒，再切换到任务 3 ，执行 0.01秒……这样反复执行下去。</p><p>表面上看，每个任务都是交替执行的，但是，由于 CPU的执行速度实在是太快了，我们肉眼和感觉上没法识别出来，就像所有任务都在同时执行一样。</p><p>真正的并行执行多任务只能在多核 CPU 上实现，但是，由于任务数量远远多于 CPU 的核心数量，所以，操作系统也会自动把很多任务轮流调度到每个核心上执行。</p><p>有些进程不仅仅只是干一件事的啊，比如浏览器，我们可以播放时视频，播放音频，看文章，编辑文章等等，其实这些都是在浏览器进程中的子任务。在一个进程内部，要同时干多件事，就需要同时运行多个“子任务”，我们把进程内的这些“子任务”称为线程（Thread）。</p><p>由于每个进程至少要干一件事，所以，一个进程至少有一个线程。</p><p>当然，一个进程也可以有多个线程，多个线程可以同时执行，多线程的执行方式和多进程是一样的，也是由操作系统在多个线程之间快速切换，让每个线程都短暂地交替运行，看起来就像同时执行一样。</p><p>那么在 Python 中我们要同时执行多个任务怎么办？</p><p>有两种解决方案：</p><p>一种是启动多个进程，每个进程虽然只有一个线程，但多个进程可以一块执行多个任务。</p><p>还有一种方法是启动一个进程，在一个进程内启动多个线程，这样，多个线程也可以一块执行多个任务。</p><p>当然还有第三种方法，就是启动多个进程，每个进程再启动多个线程，这样同时执行的任务就更多了，当然这种模型更复杂，实际很少采用。</p><p>总结一下就是，多任务的实现有3种方式：</p><ul><li>多进程模式；</li><li>多线程模式；</li><li>多进程+多线程模式。</li></ul><p>同时执行多个任务通常各个任务之间并不是没有关联的，而是需要相互通信和协调，有时，任务 1 必须暂停等待任务 2 完成后才能继续执行，有时，任务 3 和任务 4 又不能同时执行，所以，多进程和多线程的程序的复杂度要远远高于我们前面写的单进程单线程的程序。</p><p>因为复杂度高，调试困难，所以，不是迫不得已，我们也不想编写多任务。</p><p>但是，有很多时候，没有多任务还真不行。</p><p>想想在电脑上看电影，就必须由一个线程播放视频，另一个线程播放音频，否则，单线程实现的话就只能先把视频播放完再播放音频，或者先把音频播放完再播放视频，这显然是不行的。</p>',31)],i={},n=(0,p(83744).Z)(i,[["render",function(e,t){return(0,a.wg)(),(0,a.iD)("div",null,r)}]])}}]);