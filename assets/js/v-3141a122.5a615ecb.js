"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[73232],{32246:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-3141a122","path":"/java-tutor/stackoverflow/iterating-through-a-collection-avoiding-concurrentmodificationexception-when-re.html","title":"遍历集合时移除元素，怎样避免ConcurrentModificationException异常抛出","lang":"zh-CN","frontmatter":{"summary":"遍历集合时移除元素，怎样避免ConcurrentModificationException异常抛出 问题 在遍历集合的过程中，不会总出现ConcurrentModificationException异常的抛出，但是在下面的代码块中： 运行之后，结果显而易见，总是会抛出异常： 所以，遍历集合时移除元素，怎样避免ConcurrentModificationExc","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/java-tutor/stackoverflow/iterating-through-a-collection-avoiding-concurrentmodificationexception-when-re.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"遍历集合时移除元素，怎样避免ConcurrentModificationException异常抛出"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-03-22T11:07:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-03-22T11:07:21.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1647947241000,"updatedTime":1647947241000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":1.72,"words":515},"filePathRelative":"java-tutor/stackoverflow/iterating-through-a-collection-avoiding-concurrentmodificationexception-when-re.md","localizedDate":"2022年3月22日"}')},3180:(n,a,s)=>{s.r(a),s.d(a,{default:()=>r});var t=s(66252);const e=(0,t.uE)('<h1 id="遍历集合时移除元素-怎样避免concurrentmodificationexception异常抛出" tabindex="-1"><a class="header-anchor" href="#遍历集合时移除元素-怎样避免concurrentmodificationexception异常抛出" aria-hidden="true">#</a> 遍历集合时移除元素，怎样避免ConcurrentModificationException异常抛出</h1><h4 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h4><p>在遍历集合的过程中，不会总出现<code>ConcurrentModificationException</code>异常的抛出，但是在下面的代码块中：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> l <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        l<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        l<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        l<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">//遍历的过程中移除部分集合元素</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> i <span class="token operator">:</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            l<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行之后，结果显而易见，总是会抛出异常：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Exception</span> in thread <span class="token string">&quot;main&quot;</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>ConcurrentModificationException</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以，遍历集合时移除元素，怎样避免ConcurrentModificationException异常的产生？有什么好的解决办法？</p><h4 id="回答" tabindex="-1"><a class="header-anchor" href="#回答" aria-hidden="true">#</a> 回答</h4><p><code>Iterator.remove()</code>是线程安全的，所以你的代码可以这样写：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> iterator <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">String</span> string <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    \n        <span class="token comment">// 从迭代器中移除集合元素，集合中相应的集合元素也会安全地被移除</span>\n        <span class="token comment">// 在这里，如果继续调用的是list.remove(string)，那么仍会抛出异常</span>\n        iterator<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在遍历集合时修改集合的结构或内容的情况中，<code>Iterator.remove()</code>是唯一线程安全的方法。</p><h4 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因" aria-hidden="true">#</a> 问题原因</h4><p>fail-fast, 快速失败机制，是java集合类的一种错误检查机制。当有多个线程同时对集合进行遍历以及内容或者结构的修改时，就有可能产生fail-fast机制。这意味着，当它们发现容器在迭代的过程中被修改时，就会抛出一个ConcurrentModificationException异常。</p><p>迭代器的快速失败行为无法得到保证，它不能保证一定会出现该错误，但是快速失败操作会尽最大努力抛出ConcurrentModificationException异常，这个异常仅用于检测bug。这种迭代器并不是完备的处理机制，而只是作为并发问题的一个预警指示器。</p><h4 id="拓展阅读" tabindex="-1"><a class="header-anchor" href="#拓展阅读" aria-hidden="true">#</a> 拓展阅读</h4>',15),o={href:"https://github.com/AcceptedBoy/backstage-vacation-plan/blob/master/chapter1/concurrency/fail-fast.md",target:"_blank",rel:"noopener noreferrer"},p=(0,t.Uk)("fail-fast机制的原理解析"),c=(0,t._)("h4",{id:"stackoverflow地址",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#stackoverflow地址","aria-hidden":"true"},"#"),(0,t.Uk)(" StackOverFlow地址")],-1),i={href:"http://stackoverflow.com/questions/223918/iterating-through-a-collection-avoiding-concurrentmodificationexception-when-re",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("http://stackoverflow.com/questions/223918/iterating-through-a-collection-avoiding-concurrentmodificationexception-when-re"),u={},r=(0,s(83744).Z)(u,[["render",function(n,a){const s=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t._)("p",null,[(0,t._)("a",o,[p,(0,t.Wm)(s)])]),c,(0,t._)("p",null,[(0,t._)("a",i,[l,(0,t.Wm)(s)])])])}]])}}]);