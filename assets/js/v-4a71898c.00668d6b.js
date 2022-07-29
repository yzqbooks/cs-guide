"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[47695],{99519:(e,a,t)=>{t.r(a),t.d(a,{data:()=>r});const r=JSON.parse('{"key":"v-4a71898c","path":"/java-tutor/stackoverflow/what-is-the-difference-between-a-soft-reference-and-a-weak-reference-in-java.html","title":"Java中软引用和弱引用的区别","lang":"zh-CN","frontmatter":{"summary":"Java中软引用和弱引用的区别 问题 题目就是问题 解答 回答1 从Ethan Nicholas的《Understanding Weak References》中 弱引用： 放置一个弱引用的作用，不是强有力强制一个对象保存在内存中。弱引用允许利用垃圾收集者的能力去决定可达性，所以你不需要自己做，你只需要创建一个软引用： WeakReference weakW","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/java-tutor/stackoverflow/what-is-the-difference-between-a-soft-reference-and-a-weak-reference-in-java.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"Java中软引用和弱引用的区别"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-03-22T11:07:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-03-22T11:07:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"问题","slug":"问题","children":[]},{"level":2,"title":"解答","slug":"解答","children":[{"level":3,"title":"回答1","slug":"回答1","children":[]},{"level":3,"title":"回答2","slug":"回答2","children":[]}]}],"git":{"createdTime":1647947241000,"updatedTime":1647947241000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":3.86,"words":1158},"filePathRelative":"java-tutor/stackoverflow/what-is-the-difference-between-a-soft-reference-and-a-weak-reference-in-java.md","localizedDate":"2022年3月22日"}')},93913:(e,a,t)=>{t.r(a),t.d(a,{default:()=>o});var r=t(66252);const n=(0,r.uE)('<h1 id="java中软引用和弱引用的区别" tabindex="-1"><a class="header-anchor" href="#java中软引用和弱引用的区别" aria-hidden="true">#</a> Java中软引用和弱引用的区别</h1><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>题目就是问题</p><h2 id="解答" tabindex="-1"><a class="header-anchor" href="#解答" aria-hidden="true">#</a> 解答</h2><h3 id="回答1" tabindex="-1"><a class="header-anchor" href="#回答1" aria-hidden="true">#</a> 回答1</h3><p>从Ethan Nicholas的《Understanding Weak References》中</p><p>弱引用： 放置一个弱引用的作用，不是强有力强制一个对象保存在内存中。弱引用允许利用垃圾收集者的能力去决定可达性，所以你不需要自己做，你只需要创建一个软引用：</p><pre><code>WeakReference weakWidgt = new WeakReference(widgt);\n</code></pre><p>然后在代码别的地方你可以使用 <code>weakWidget.get()</code> 来获取真实的 <code>Widgt</code> 对象，当然弱引用足以强大能抵制垃圾收集器，所以你也许发现（如果没有强引用指向widget）<code>weakWidget.get()</code>突然开始返回null</p><p>软引用</p><p>软引用就像弱引用一样，除了它不会着急将引用的对象扔出去。只有弱可达性的对象（这样的对象最强的引用只能是弱引用）将在下一次垃圾收集处理中被抛弃，但是软可达性的对象通常可以坚持一会。</p><p>软引用不要求与弱引用有什么不同，但是实际中，只要内存足够，软可达的对象通常会维持下去。对于缓存来说，这是个不错的基础，就像以上图像缓存描述，虽然可以让垃圾收集者担心对象是如何可达（一个强可达性的对象从不会从缓存中移除）和她们需要消耗多少内存</p><p>而且Peter Kessler备注到</p><p>Sun JRE 对待软引用和弱引用是不同的。如果内存是够用的。我们应坚持用软引用引用对象。一个细节是：对于客户端和服务器，JRE的政策是不同的：客户端，JRE试图保持通过清除软引用而不是扩大堆内存来使改变小点，而服务器端，JRE通过扩大堆内存让性能更好。没有一种通用的方法。</p><h3 id="回答2" tabindex="-1"><a class="header-anchor" href="#回答2" aria-hidden="true">#</a> 回答2</h3><p>弱引用对象很快被收集。如果GC发现一个对象是弱引用（只能通过弱引用可达），它会立刻清除弱引用对象。同样的，对于在程序保持关联信息的对象保持一个引用是不错的，像关于类的缓存存储的反射信息或一个对象的包装器等等。没有意义地跟随相连对象的任何事物都会被清除掉。当弱引用清除掉时，它会进入到引用队列中，同时丢弃关联的对象。你保持关于对象额外的信息，但是一旦对象引用不要了，信息也就不需要了。总之，在某些情境下，你可以创建WeakReference的子类，保持在WeakReference的子类中对象的额外信息。WeakReference的其他典型应用是与Map连接，以保持规范化的例子。</p><p>在另一方面，软引用有利于外部缓存，再创造资源，因为GC会延迟清理他们。它能保证所有软引用会在内存溢出之前被清除，所以它们不会造成内存溢出。</p><p>典型的使用例子是保持从一个文件内容解析形式。在你载入文件，解析和与解析过代表的根对象保持一个软引用的地方扩展系统。在你下次需要文件时，你试图通过软引用恢复。如果可以恢复，你会在其他地方载入、解析你分享的文件，如果同时GC清理掉，你也可以重新载入。这样的话，你利用空内存可以做到性能最优化，但是不要内存溢出。 光保持一个软引用不会造成溢出。如果在另一方面你误用软引用，且弱引用被使用了（也就是说，你保持与较强引用的对象相连的信息，然后当引用对象被清除，你也丢弃信息），你可能会内存溢出，因为在进入引用队列时，也许碰巧没有及时丢弃相连的对象。</p><p>所以，使用软引用还是弱引用是取决于用法的。如果你的信息构造起来较为复杂，但是尽管如此仍想从别的数据再构造信息，使用软引用。如果你对一些数据的规范化实例保持引用，或者你想对一个“不拥有的”对象保持引用（就是防止被垃圾回收），这样就使用弱引用。</p><p>原文：</p>',20),i={href:"http://stackoverflow.com/questions/299659/what-is-the-difference-between-a-soft-reference-and-a-weak-reference-in-java",target:"_blank",rel:"noopener noreferrer"},c=(0,r.Uk)("http://stackoverflow.com/questions/299659/what-is-the-difference-between-a-soft-reference-and-a-weak-reference-in-java"),d={},o=(0,t(83744).Z)(d,[["render",function(e,a){const t=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[n,(0,r._)("blockquote",null,[(0,r._)("p",null,[(0,r._)("a",i,[c,(0,r.Wm)(t)])])])])}]])}}]);