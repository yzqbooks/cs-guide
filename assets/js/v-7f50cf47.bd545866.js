"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[80146],{28181:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-7f50cf47","path":"/python-tutor/basics/list-tuple.html","title":"列表和元组","lang":"zh-CN","frontmatter":{"index":6,"summary":"列表和元组 之前我们学习了字符串，整数，浮点数几种基本数据类型，现在我们接着学习两种新的数据类型，列表（List）和元组（tuple）。 注： https://www.readwithu.com/ 同步更新。 目录 # 一、List（列表） # 1、什么是 List （列表） List （列表）是 Python 内置的一种数据类型。 它是一种有序的集合，可以","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/python-tutor/basics/list-tuple.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"列表和元组"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-26T11:39:36.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-05-26T11:39:36.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1、什么是 List （列表）","slug":"_1、什么是-list-列表","children":[]},{"level":2,"title":"2、怎么创建 List（列表）","slug":"_2、怎么创建-list-列表","children":[]},{"level":2,"title":"3、如何访问 List（列表）中的值","slug":"_3、如何访问-list-列表-中的值","children":[]},{"level":2,"title":"5、怎么删除 List（列表） 里面的元素","slug":"_5、怎么删除-list-列表-里面的元素","children":[]},{"level":2,"title":"6、List（列表）运算符","slug":"_6、list-列表-运算符","children":[]},{"level":2,"title":"7、List （列表）函数&方法","slug":"_7、list-列表-函数-方法","children":[]},{"level":2,"title":"8、实例","slug":"_8、实例","children":[]},{"level":2,"title":"1、什么是元组 （tuple）","slug":"_1、什么是元组-tuple","children":[]},{"level":2,"title":"2、怎样创建元组（tuple）","slug":"_2、怎样创建元组-tuple","children":[]},{"level":2,"title":"3、如何访问元组（tuple）","slug":"_3、如何访问元组-tuple","children":[]},{"level":2,"title":"4、修改元组 （tuple）","slug":"_4、修改元组-tuple","children":[]},{"level":2,"title":"5、删除 tuple （元组）","slug":"_5、删除-tuple-元组","children":[]},{"level":2,"title":"6、tuple （元组）运算符","slug":"_6、tuple-元组-运算符","children":[]},{"level":2,"title":"7、元组内置函数","slug":"_7、元组内置函数","children":[]},{"level":2,"title":"8、实例","slug":"_8、实例-1","children":[]}],"git":{"createdTime":1653549183000,"updatedTime":1653565176000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":2}]},"readingTime":{"minutes":11.74,"words":3521},"filePathRelative":"python-tutor/basics/list-tuple.md","localizedDate":"2022年5月26日"}')},72884:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var t=a(66252);const p=(0,t._)("h1",{id:"列表和元组",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#列表和元组","aria-hidden":"true"},"#"),(0,t.Uk)(" 列表和元组")],-1),e=(0,t._)("p",null,"之前我们学习了字符串，整数，浮点数几种基本数据类型，现在我们接着学习两种新的数据类型，列表（List）和元组（tuple）。",-1),i=(0,t.Uk)("注： "),l={href:"https://www.readwithu.com/",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("https://www.readwithu.com/"),c=(0,t.Uk)(" 同步更新。"),u=(0,t.uE)('<h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h1><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-09-01-List 和 Tuple.png" alt="" loading="lazy"></p><h1 id="一、list-列表" tabindex="-1"><a class="header-anchor" href="#一、list-列表" aria-hidden="true">#</a> 一、List（列表）</h1><h2 id="_1、什么是-list-列表" tabindex="-1"><a class="header-anchor" href="#_1、什么是-list-列表" aria-hidden="true">#</a> 1、什么是 List （列表）</h2><p>List （列表）是 Python 内置的一种数据类型。 它是一种有序的集合，可以随时添加和删除其中的元素。</p><p>那为什么要有 List （列表）呢？</p><p>我们用一个例子来说明。</p><p>现在有一个团队要出去玩，要先报名。如果用我们之前学过的知识，那么就是用一个字符串变量把他们都记录起来。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-080527.png" alt="" loading="lazy"></p><p>但是这样太麻烦了，而且也不美观。</p><p>在编程中，一定要学会偷懒，避免「重复性工作」。如果有一百个成员，那么你及时是复制粘贴，也会把你写烦。</p><p>这时候就可以使用列表了。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-080835.png" alt="" loading="lazy"></p><p>就这样，一行代码就可以存放 N 多个名字了。</p><h2 id="_2、怎么创建-list-列表" tabindex="-1"><a class="header-anchor" href="#_2、怎么创建-list-列表" aria-hidden="true">#</a> 2、怎么创建 List（列表）</h2><p>从上面的例子可以分析出，列表的格式是这样的。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-081342.png" alt="" loading="lazy"></p><p>其实列表就是用中括号 <code>[]</code> 括起来的数据，里面的每一个数据就叫做元素。每个元素之间使用逗号分隔。</p><p>而且列表的数据元素不一定是相同的数据类型。</p><p>比如：</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>list1<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;twowter&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;liangdianshui&#39;</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里有字符串类型，还有整数类型。</p><p>我们尝试把他打印出来，看看打印的结果是怎样的。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-081912.png" alt="" loading="lazy"></p><p>结果如下：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-081951.png" alt="" loading="lazy"></p><h2 id="_3、如何访问-list-列表-中的值" tabindex="-1"><a class="header-anchor" href="#_3、如何访问-list-列表-中的值" aria-hidden="true">#</a> 3、如何访问 List（列表）中的值</h2><p>就像一开始的例子，我们有时候不需要把全部人员的姓名都打印出来，有时候我们需要知道第 3 个报名的人是谁？前两名报名的是谁？</p><p>那么怎么从列表中取出来呢？</p><p>换种问法就是，怎么去访问列表中的值？</p><p>这时候我们可以通过列表的下标索引来访问列表中的值，同样你也可以使用方括号的形式截取字符。</p><p>例如：</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;一点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;三点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;四点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;五点水&#39;</span><span class="token punctuation">]</span>\n\n<span class="token comment"># 通过索引来访问列表</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token comment"># 通过方括号的形式来截取列表中的数据</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-090321.png" alt="" loading="lazy"></p><p>可见，我们需要知道知道 <code>name</code> 这个列表中第三个报名的是谁？只需要用 <code>name[2]</code> 就可以了。</p><p>这里你会问，为什么是 2 ，不是 3 呢？</p><p>这是因为在编程世界中，都是从 0 开始的，而不是我们生活习惯中从 1 开始。</p><p>所以需要知道第三个是谁？</p><p>那就是 <code>name[2]</code> 就可以了。</p><p>从例子来看，我们还把 <code>name[0:2]</code> 的结果打印出来了。</p><p>从打印结果来看，只打印了第一，第二个元素内容。</p><p>这里可能会有疑问？</p><p>为什么不是打印前三个啊，不是说 2 就是第 3 个吗？</p><p>那是因为这是<strong>左闭右开</strong>区间的。</p><p>所以 <code>name[0:2]</code> 的意思就是从第 0 个开始取，取到第 2 个，但是不包含第 2 个。</p><p>还是那句话，为了更好的理解，可以多去尝试，多去玩编程。</p><p>所以你可以尝试下下面的各种方式：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-091524.png" alt="" loading="lazy"></p><p>看看输出的结果：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-091624.png" alt="" loading="lazy"></p><p>根据输出的结果和上面讲到的知识，就很容易理解其中的一些用法了。</p><pre><code>## 4、怎么去更新 List（列表） ##\n</code></pre><p>还是一开始的例子，我们用代码记录了报名人的名字，那后面可能会有新人加入，也有可能会发现一开始写错名字了，想要修改。</p><p>这时候怎么办呢？</p><p>这时候可以通过索引对列表的数据项进行修改或更新，也可以使用 append() 方法来添加列表项。</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;一点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;三点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;四点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;五点水&#39;</span><span class="token punctuation">]</span>\n\n\n<span class="token comment"># 通过索引对列表的数据项进行修改或更新</span>\nname<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;2点水&#39;</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n\n<span class="token comment"># 使用 append() 方法来添加列表项</span>\nname<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;六点水&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-092406.png" alt="" loading="lazy"></p><h2 id="_5、怎么删除-list-列表-里面的元素" tabindex="-1"><a class="header-anchor" href="#_5、怎么删除-list-列表-里面的元素" aria-hidden="true">#</a> 5、怎么删除 List（列表） 里面的元素</h2><p>那既然这样，肯定会有人中途退出的。</p><p>那么我们就需要在列表中，把他的名字去掉。</p><p>这时候使用 del 语句来删除列表的的元素</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;一点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;三点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;四点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;五点水&#39;</span><span class="token punctuation">]</span>\n\n<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n\n<span class="token comment"># 使用 del 语句来删除列表的的元素</span>\n<span class="token keyword">del</span> name<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果:</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-092705.png" alt="" loading="lazy"></p><p>你看输出的结果，列表中已经没有了 <code>四点水</code> 这个数据了。证明已经删除成功了。</p><h2 id="_6、list-列表-运算符" tabindex="-1"><a class="header-anchor" href="#_6、list-列表-运算符" aria-hidden="true">#</a> 6、List（列表）运算符</h2><p>列表对 <code>+</code> 和 <code>*</code> 的操作符与字符串相似。<code>+</code> 号用于组合列表，<code>*</code> 号用于重复列表。</p><table><thead><tr><th>Python 表达式</th><th>结果</th><th>描述</th></tr></thead><tbody><tr><td>len([1, 2, 3])</td><td>3</td><td>计算元素个数</td></tr><tr><td>[1, 2, 3] + [4, 5, 6]</td><td>[1, 2, 3, 4, 5, 6]</td><td>组合</td></tr><tr><td>[&#39;Hi!&#39;] * 4</td><td>[&#39;Hi!&#39;, &#39;Hi!&#39;, &#39;Hi!&#39;, &#39;Hi!&#39;]</td><td>复制</td></tr><tr><td>3 in [1, 2, 3]</td><td>True</td><td>元素是否存在于列表中</td></tr><tr><td>for x in [1, 2, 3]: print x,</td><td>1 2 3</td><td>迭代</td></tr></tbody></table><h2 id="_7、list-列表-函数-方法" tabindex="-1"><a class="header-anchor" href="#_7、list-列表-函数-方法" aria-hidden="true">#</a> 7、List （列表）函数&amp;方法</h2><table><thead><tr><th>函数&amp;方法</th><th>描述</th></tr></thead><tbody><tr><td>len(list)</td><td>列表元素个数</td></tr><tr><td>max(list)</td><td>返回列表元素最大值</td></tr><tr><td>min(list)</td><td>返回列表元素最小值</td></tr><tr><td>list(seq)</td><td>将元组转换为列表</td></tr><tr><td>list.append(obj)</td><td>在列表末尾添加新的对象</td></tr><tr><td>list.count(obj)</td><td>统计某个元素在列表中出现的次数</td></tr><tr><td>list.extend(seq)</td><td>在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表）</td></tr><tr><td>list.index(obj)</td><td>从列表中找出某个值第一个匹配项的索引位置</td></tr><tr><td>list.insert(index, obj)</td><td>将对象插入列表</td></tr><tr><td>list.pop(obj=list[-1])</td><td>移除列表中的一个元素（默认最后一个元素），并且返回该元素的值</td></tr><tr><td>list.remove(obj)</td><td>移除列表中的一个元素（参数是列表中元素），并且不返回任何值</td></tr><tr><td>list.reverse()</td><td>反向列表中元素</td></tr><tr><td>list.sort([func])</td><td>对原列表进行排序</td></tr></tbody></table><h2 id="_8、实例" tabindex="-1"><a class="header-anchor" href="#_8、实例" aria-hidden="true">#</a> 8、实例</h2><p>最后通过一个例子来熟悉了解 List 的操作</p><p>例子：</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#-*-coding:utf-8-*-</span>\n<span class="token comment">#-----------------------list的使用----------------------------------</span>\n\n<span class="token comment"># 1.一个产品，需要列出产品的用户，这时候就可以使用一个 list 来表示</span>\nuser<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;liangdianshui&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;twowater&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;两点水&#39;</span><span class="token punctuation">]</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;1.产品用户&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>\n\n<span class="token comment"># 2.如果需要统计有多少个用户，这时候 len() 函数可以获的 list 里元素的个数</span>\n<span class="token builtin">len</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n2.统计有多少个用户&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token comment"># 3.此时，如果需要知道具体的用户呢？可以用过索引来访问 list 中每一个位置的元素，索引是0从开始的</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n3.查看具体的用户&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>user<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">&#39;,&#39;</span><span class="token operator">+</span>user<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">&#39;,&#39;</span><span class="token operator">+</span>user<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token comment"># 4.突然来了一个新的用户，这时我们需要在原有的 list 末尾加一个用户</span>\nuser<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;茵茵&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n4.在末尾添加新用户&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>\n\n<span class="token comment"># 5.又新增了一个用户，可是这个用户是 VIP 级别的学生，需要放在第一位，可以通过 insert 方法插入到指定的位置</span>\n<span class="token comment"># 注意：插入数据的时候注意是否越界，索引不能超过 len(user)-1</span>\nuser<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&#39;VIP用户&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n5.指定位置添加用户&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>\n\n<span class="token comment"># 6.突然发现之前弄错了，“茵茵”就是&#39;VIP用户&#39;，因此，需要删除“茵茵”；pop() 删除 list 末尾的元素</span>\nuser<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n6.删除末尾用户&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>\n\n<span class="token comment"># 7.过了一段时间，用户“liangdianshui”不玩这个产品，删除了账号</span>\n<span class="token comment"># 因此需要要删除指定位置的元素，用pop(i)方法，其中i是索引位置</span>\nuser<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n7.删除指定位置的list元素&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>\n\n<span class="token comment"># 8.用户“两点水”想修改自己的昵称了</span>\nuser<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;三点水&#39;</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n8.把某个元素替换成别的元素&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>\n\n<span class="token comment"># 9.单单保存用户昵称好像不够好，最好把账号也放进去</span>\n<span class="token comment"># 这里账号是整数类型，跟昵称的字符串类型不同，不过 list 里面的元素的数据类型是可以不同的</span>\n<span class="token comment"># 而且 list 元素也可以是另一个 list</span>\nnewUser<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;VIP用户&#39;</span><span class="token punctuation">,</span><span class="token number">11111</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;twowater&#39;</span><span class="token punctuation">,</span><span class="token number">22222</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;三点水&#39;</span><span class="token punctuation">,</span><span class="token number">33333</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n9.不同元素类型的list数据&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>newUser<span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://upload-images.jianshu.io/upload_images/2136918-65d31cae9f8bb34d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="list的使用" loading="lazy"></p><h1 id="二、tuple-元组" tabindex="-1"><a class="header-anchor" href="#二、tuple-元组" aria-hidden="true">#</a> 二、tuple（元组）</h1><h2 id="_1、什么是元组-tuple" tabindex="-1"><a class="header-anchor" href="#_1、什么是元组-tuple" aria-hidden="true">#</a> 1、什么是元组 （tuple）</h2><p>上一节刚说了一个有序列表 List ，现在说另一种有序列表叫元组：tuple 。</p><p>tuple 和 List 非常类似，但是 tuple 一旦初始化就不能修改。 也就是说元组（tuple）是不可变的，那么不可变是指什么意思呢？</p><p>元组（tuple） 不可变是指当你创建了 tuple 时候，它就不能改变了，也就是说它也没有 append()，insert() 这样的方法，但它也有获取某个索引值的方法，但是不能赋值。</p><p>那么为什么要有 tuple 呢？</p><p>那是因为 tuple 是不可变的，所以代码更安全。</p><p>所以建议能用 tuple 代替 list 就尽量用 tuple 。</p><h2 id="_2、怎样创建元组-tuple" tabindex="-1"><a class="header-anchor" href="#_2、怎样创建元组-tuple" aria-hidden="true">#</a> 2、怎样创建元组（tuple）</h2><p>元组创建很简单，只需要在括号中添加元素，并使用逗号隔开即可。</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>tuple1<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;twowter&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;liangdianshui&#39;</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">456</span><span class="token punctuation">)</span>\ntuple2<span class="token operator">=</span><span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;twowter&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;liangdianshui&#39;</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">456</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建空元组</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>tuple3<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>元组中只包含一个元素时，需要在元素后面添加逗号</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>tuple4<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果不加逗号，创建出来的就不是 元组（tuple），而是指 <code>123</code> 这个数了。</p><p>这是因为括号 () 既可以表示元组（tuple），又可以表示数学公式中的小括号，这就产生了歧义。</p><p>所以如果只有一个元素时，你不加逗号，计算机就根本没法识别你是要进行整数或者小数运算还是表示元组。</p><p>因此，Python 规定，这种情况下，按小括号进行计算，计算结果自然是 <code>123</code> ，而如果你要表示元组的时候，就需要加个逗号。</p><p>具体看下图 tuple4 和 tuple5 的输出值</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-093847.jpg" alt="" loading="lazy"></p><h2 id="_3、如何访问元组-tuple" tabindex="-1"><a class="header-anchor" href="#_3、如何访问元组-tuple" aria-hidden="true">#</a> 3、如何访问元组（tuple）</h2><p>元组下标索引也是从 0 开始，元组（tuple）可以使用下标索引来访问元组中的值。</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#-*-coding:utf-8-*-</span>\n\ntuple1<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;twowter&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;liangdianshui&#39;</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">456</span><span class="token punctuation">)</span>\ntuple2<span class="token operator">=</span><span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;twowter&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;liangdianshui&#39;</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">456</span>\n\n<span class="token keyword">print</span><span class="token punctuation">(</span>tuple1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>tuple2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果：</p><p><img src="http://upload-images.jianshu.io/upload_images/2136918-edfb7c9ebc7d5ab0.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="访问 tuple" loading="lazy"></p><h2 id="_4、修改元组-tuple" tabindex="-1"><a class="header-anchor" href="#_4、修改元组-tuple" aria-hidden="true">#</a> 4、修改元组 （tuple）</h2><p>可能看到这个小标题有人会疑问，上面不是花了一大段来说 tuple 是不可变的吗？</p><p>这里怎么又来修改 tuple （元组） 了。</p><p>那是因为元组中的元素值是不允许修改的，但我们可以对元组进行连接组合，还有通过修改其他列表的值从而影响 tuple 的值。</p><p>具体看下面的这个例子：</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#-*-coding:utf-8-*-</span>\nlist1<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">456</span><span class="token punctuation">]</span>\ntuple1<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;twowater&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;liangdianshui&#39;</span><span class="token punctuation">,</span>list1<span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>tuple1<span class="token punctuation">)</span>\nlist1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">789</span>\nlist1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">100</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>tuple1<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(&#39;两点水&#39;, &#39;twowater&#39;, &#39;liangdianshui&#39;, [123, 456])\n(&#39;两点水&#39;, &#39;twowater&#39;, &#39;liangdianshui&#39;, [789, 100])\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，两次输出的 tuple 值是变了的。我们看看 tuple1 的存储是怎样的。</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-修改tuple流程图.png" alt="" loading="lazy"></p><p>可以看到，tuple1 有四个元素，最后一个元素是一个 List ，List 列表里有两个元素。</p><p>当我们把 List 列表中的两个元素 <code>124</code> 和 <code>456</code> 修改为 <code>789</code> 和 <code>100</code> 的时候，从输出来的 tuple1 的值来看，好像确实是改变了。</p><p>但其实变的不是 tuple 的元素，而是 list 的元素。</p><p>tuple 一开始指向的 list 并没有改成别的 list，所以，tuple 所谓的“不变”是说，tuple 的每个元素，指向永远不变。注意是 tupe1 中的第四个元素还是指向原来的 list ，是没有变的，我们修改的只是列表 List 里面的元素。</p><h2 id="_5、删除-tuple-元组" tabindex="-1"><a class="header-anchor" href="#_5、删除-tuple-元组" aria-hidden="true">#</a> 5、删除 tuple （元组）</h2><p>tuple 元组中的元素值是不允许删除的，但我们可以使用 del 语句来删除整个元组</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#-*-coding:utf-8-*-</span>\n\ntuple1<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;twowter&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;liangdianshui&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">456</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>tuple1<span class="token punctuation">)</span>\n<span class="token keyword">del</span> tuple1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、tuple-元组-运算符" tabindex="-1"><a class="header-anchor" href="#_6、tuple-元组-运算符" aria-hidden="true">#</a> 6、tuple （元组）运算符</h2><p>与字符串一样，元组之间可以使用 <code>+</code> 号和 <code>*</code> 号进行运算。这就意味着他们可以组合和复制，运算后会生成一个新的元组。</p><table><thead><tr><th>Python 表达式</th><th>结果</th><th>描述</th></tr></thead><tbody><tr><td>len((1, 2, 3))</td><td>3</td><td>计算元素个数</td></tr><tr><td>(1, 2, 3) + (4, 5, 6)</td><td>(1, 2, 3, 4, 5, 6)</td><td>连接</td></tr><tr><td>(&#39;Hi!&#39;,) * 4</td><td>(&#39;Hi!&#39;, &#39;Hi!&#39;, &#39;Hi!&#39;, &#39;Hi!&#39;)</td><td>复制</td></tr><tr><td>3 in (1, 2, 3)</td><td>True</td><td>元素是否存在</td></tr><tr><td>for x in (1, 2, 3): print(x)</td><td>1 2 3</td><td>迭代</td></tr></tbody></table><h2 id="_7、元组内置函数" tabindex="-1"><a class="header-anchor" href="#_7、元组内置函数" aria-hidden="true">#</a> 7、元组内置函数</h2><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>len(tuple)</td><td>计算元组元素个数</td></tr><tr><td>max(tuple)</td><td>返回元组中元素最大值</td></tr><tr><td>min(tuple)</td><td>返回元组中元素最小值</td></tr><tr><td>tuple(seq)</td><td>将列表转换为元组</td></tr></tbody></table><h2 id="_8、实例-1" tabindex="-1"><a class="header-anchor" href="#_8、实例-1" aria-hidden="true">#</a> 8、实例</h2><p>最后跟列表一样，来一个实例，大家也可以多尝试，去把元组的各种玩法玩一遍。</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>name1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;一点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;两点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;三点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;四点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;五点水&#39;</span><span class="token punctuation">)</span>\n\nname2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;1点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4点水&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5点水&#39;</span><span class="token punctuation">)</span>\n\nlist1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>\n\n<span class="token comment"># 计算元素个数</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>name1<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment"># 连接,两个元组相加</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>name1 <span class="token operator">+</span> name2<span class="token punctuation">)</span>\n<span class="token comment"># 复制元组</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>name1 <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token comment"># 元素是否存在 (name1 这个元组中是否含有一点水这个元素)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;一点水&#39;</span> <span class="token keyword">in</span> name1<span class="token punctuation">)</span>\n<span class="token comment"># 元素的最大值</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span>name2<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment"># 元素的最小值</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">min</span><span class="token punctuation">(</span>name2<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment"># 将列表转换为元组</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">tuple</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果如下：</p><p><img src="http://twowaterimage.oss-cn-beijing.aliyuncs.com/2019-08-31-101523.png" alt="" loading="lazy"></p>',130),d={},r=(0,a(83744).Z)(d,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[p,e,(0,t._)("p",null,[i,(0,t._)("a",l,[o,(0,t.Wm)(a)]),c]),u])}]])}}]);