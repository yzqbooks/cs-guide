"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[20566],{85174:(e,n,t)=>{t.r(n),t.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-7985a4b1","path":"/go-tutor/go-proto.html","title":"GoProtobuf简明教程","lang":"zh-CN","frontmatter":{"order":3,"summary":"GoProtobuf简明教程 转载自极客兔兔 他的网站链接 1 Protocol Buffers 简介 protobuf 即 Protocol Buffers，是一种轻便高效的结构化数据存储格式，与语言、平台无关，可扩展可序列化。protobuf 性能和效率大幅度优于 JSON、XML 等其他的结构化数据格式。protobuf 是以二进制方式存储的，占用空间","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/go-tutor/go-proto.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"GoProtobuf简明教程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-29T07:25:09.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-29T07:25:09.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1 Protocol Buffers 简介","slug":"_1-protocol-buffers-简介","children":[]},{"level":2,"title":"2 安装","slug":"_2-安装","children":[{"level":3,"title":"2.1 protoc","slug":"_2-1-protoc","children":[]},{"level":3,"title":"2.2 protoc-gen-go","slug":"_2-2-protoc-gen-go","children":[]}]},{"level":2,"title":"3 定义消息类型","slug":"_3-定义消息类型","children":[]},{"level":2,"title":"4 字段类型","slug":"_4-字段类型","children":[{"level":3,"title":"4.1 标量类型(Scalar)","slug":"_4-1-标量类型-scalar","children":[]},{"level":3,"title":"4.2 枚举(Enumerations)","slug":"_4-2-枚举-enumerations","children":[]},{"level":3,"title":"4.3 使用其他消息类型","slug":"_4-3-使用其他消息类型","children":[]},{"level":3,"title":"4.4 任意类型(Any)","slug":"_4-4-任意类型-any","children":[]},{"level":3,"title":"4.5 oneof","slug":"_4-5-oneof","children":[]},{"level":3,"title":"4.6 map","slug":"_4-6-map","children":[]}]},{"level":2,"title":"5 定义服务(Services)","slug":"_5-定义服务-services","children":[]},{"level":2,"title":"6 protoc 其他参数","slug":"_6-protoc-其他参数","children":[]},{"level":2,"title":"7 推荐风格","slug":"_7-推荐风格","children":[]},{"level":2,"title":"附：参考","slug":"附-参考","children":[]}],"git":{"createdTime":1652172111000,"updatedTime":1659079509000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":3}]},"readingTime":{"minutes":7.05,"words":2114},"filePathRelative":"go-tutor/go-proto.md","localizedDate":"2022年5月10日"}')},93740:(e,n,t)=>{t.r(n),t.d(n,{default:()=>V});var s=t(66252);const a=(0,s._)("h1",{id:"goprotobuf简明教程",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#goprotobuf简明教程","aria-hidden":"true"},"#"),(0,s.Uk)(" GoProtobuf简明教程")],-1),l={class:"custom-container tip"},o=(0,s._)("p",{class:"custom-container-title"},"提示",-1),i=(0,s.Uk)("转载自"),r={href:"https://geektutu.com/post/quick-go-protobuf.html",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Uk)("极客兔兔"),c=(0,s.Uk)("他的网站"),p={href:"https://geektutu.com",target:"_blank",rel:"noopener noreferrer"},u=(0,s.Uk)("链接"),v=(0,s._)("p",null,[(0,s._)("img",{src:"https://geektutu.com/post/quick-go-protobuf/go-protobuf.jpg",alt:"Golang Protocol Buffers",loading:"lazy"})],-1),g=(0,s._)("h2",{id:"_1-protocol-buffers-简介",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#_1-protocol-buffers-简介","aria-hidden":"true"},"#"),(0,s.Uk)(" 1 Protocol Buffers 简介")],-1),m=(0,s.Uk)("protobuf 即 Protocol Buffers，是一种轻便高效的结构化数据存储格式，与语言、平台无关，可扩展可序列化。protobuf 性能和效率大幅度优于 JSON、XML 等其他的结构化数据格式。protobuf 是以二进制方式存储的，占用空间小，但也带来了可读性差的缺点。protobuf 在通信协议和数据存储等领域应用广泛。例如著名的分布式缓存工具 "),b={href:"https://memcached.org/",target:"_blank",rel:"noopener noreferrer"},h=(0,s.Uk)("Memcached"),f=(0,s.Uk)(" 的 Go 语言版本"),k={href:"https://github.com/golang/groupcache",target:"_blank",rel:"noopener noreferrer"},_=(0,s.Uk)("groupcache"),y=(0,s.Uk)(" 就使用了 protobuf 作为其 RPC 数据格式。"),x=(0,s._)("p",null,[(0,s.Uk)("Protobuf 在 "),(0,s._)("code",null,".proto"),(0,s.Uk)(" 定义需要处理的结构化数据，可以通过 "),(0,s._)("code",null,"protoc"),(0,s.Uk)(" 工具，将 "),(0,s._)("code",null,".proto"),(0,s.Uk)(" 文件转换为 C、C++、Golang、Java、Python 等多种语言的代码，兼容性好，易于使用。")],-1),q=(0,s._)("h2",{id:"_2-安装",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#_2-安装","aria-hidden":"true"},"#"),(0,s.Uk)(" 2 安装")],-1),S=(0,s._)("h3",{id:"_2-1-protoc",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#_2-1-protoc","aria-hidden":"true"},"#"),(0,s.Uk)(" 2.1 protoc")],-1),U=(0,s.Uk)("从 "),R={href:"https://github.com/protocolbuffers/protobuf/releases",target:"_blank",rel:"noopener noreferrer"},P=(0,s.Uk)("Protobuf Releases"),w=(0,s.Uk)(" 下载最先版本的发布包安装。如果是 Ubuntu，可以按照如下步骤操作（以3.11.2为例）。"),G=(0,s.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 下载安装包\n$ wget https://github.com/protocolbuffers/protobuf/releases/download/v3.11.2/protoc-3.11.2-linux-x86_64.zip\n# 解压到 /usr/local 目录下\n$ sudo 7z x protoc-3.11.2-linux-x86_64.zip -o/usr/local\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不想安装在 /usr/local 目录下，可以解压到其他的其他，并把解压路径下的 bin 目录 加入到环境变量即可。</p><p>如果能正常显示版本，则表示安装成功。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ protoc --version\nlibprotoc <span class="token number">3.11</span>.2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-protoc-gen-go" tabindex="-1"><a class="header-anchor" href="#_2-2-protoc-gen-go" aria-hidden="true">#</a> 2.2 protoc-gen-go</h3><p>我们需要在 Golang 中使用 protobuf，还需要安装 protoc-gen-go，这个工具用来将 <code>.proto</code> 文件转换为 Golang 代码。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go get -u github.com/golang/protobuf/protoc-gen-go\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>protoc-gen-go 将自动安装到 <code>$GOPATH/bin</code> 目录下，也需要将这个目录加入到环境变量中。</p><h2 id="_3-定义消息类型" tabindex="-1"><a class="header-anchor" href="#_3-定义消息类型" aria-hidden="true">#</a> 3 定义消息类型</h2><p>接下来，我们创建一个非常简单的示例，<code>student.proto</code></p><div class="language-proto ext-proto line-numbers-mode"><pre class="language-proto"><code>syntax = &quot;proto3&quot;;\npackage main;\n\n// this is a comment\nmessage Student {\n  string name = 1;\n  bool male = 2;\n  repeated int32 scores = 3;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在当前目录下执行：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ protoc --go_out<span class="token operator">=</span>. *.proto\n$ <span class="token function">ls</span>\nstudent.pb.go  student.proto\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即是，将该目录下的所有的 .proto 文件转换为 Go 代码，我们可以看到该目录下多出了一个 Go 文件 <em>student.pb.go</em>。这个文件内部定义了一个结构体 Student，以及相关的方法：</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n Name <span class="token builtin">string</span> <span class="token string">`protobuf:&quot;bytes,1,opt,name=name,proto3&quot; json:&quot;name,omitempty&quot;`</span>\n Male <span class="token builtin">bool</span> <span class="token string">`protobuf:&quot;varint,2,opt,name=male,proto3&quot; json:&quot;male,omitempty&quot;`</span>\n Scores <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int32</span> <span class="token string">`protobuf:&quot;varint,3,rep,packed,name=scores,proto3&quot; json:&quot;scores,omitempty&quot;`</span>\n <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逐行解读<code>student.proto</code></p><ul><li>protobuf 有2个版本，默认版本是 proto2，如果需要 proto3，则需要在非空非注释第一行使用 <code>syntax = &quot;proto3&quot;</code> 标明版本。</li><li><code>package</code>，即包名声明符是可选的，用来防止不同的消息类型有命名冲突。</li><li>消息类型 使用 <code>message</code> 关键字定义，Student 是类型名，name, male, scores 是该类型的 3 个字段，类型分别为 string, bool 和 []int32。字段可以是标量类型，也可以是合成类型。</li><li>每个字段的修饰符默认是 singular，一般省略不写，<code>repeated</code> 表示字段可重复，即用来表示 Go 语言中的数组类型。</li><li>每个字符 <code>=</code>后面的数字称为标识符，每个字段都需要提供一个唯一的标识符。标识符用来在消息的二进制格式中识别各个字段，一旦使用就不能够再改变，标识符的取值范围为 [1, 2^29 - 1] 。</li><li>.proto 文件可以写注释，单行注释 <code>//</code>，多行注释 <code>/* ... */</code></li><li>一个 .proto 文件中可以写多个消息类型，即对应多个结构体(struct)。</li></ul><p>接下来，就可以在项目代码中直接使用了，以下是一个非常简单的例子，即证明被序列化的和反序列化后的实例，包含相同的数据。</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n <span class="token string">&quot;log&quot;</span>\n\n <span class="token string">&quot;github.com/golang/protobuf/proto&quot;</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n test <span class="token operator">:=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span>\n  Name<span class="token punctuation">:</span> <span class="token string">&quot;geektutu&quot;</span><span class="token punctuation">,</span>\n  Male<span class="token punctuation">:</span>  <span class="token boolean">true</span><span class="token punctuation">,</span>\n  Scores<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int32</span><span class="token punctuation">{</span><span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n <span class="token punctuation">}</span>\n data<span class="token punctuation">,</span> err <span class="token operator">:=</span> proto<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>\n <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n  log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;marshaling error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>\n <span class="token punctuation">}</span>\n newTest <span class="token operator">:=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span><span class="token punctuation">}</span>\n err <span class="token operator">=</span> proto<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> newTest<span class="token punctuation">)</span>\n <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n  log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;unmarshaling error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>\n <span class="token punctuation">}</span>\n <span class="token comment">// Now test and newTest contain the same data.</span>\n <span class="token keyword">if</span> test<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> newTest<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;data mismatch %q != %q&quot;</span><span class="token punctuation">,</span> test<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> newTest<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>保留字段(Reserved Field)</li></ul><p>更新消息类型时，可能会将某些字段/标识符删除。这些被删掉的字段/标识符可能被重新使用，如果加载老版本的数据时，可能会造成数据冲突，在升级时，可以将这些字段/标识符保留(reserved)，这样就不会被重新使用了，protoc 会检查。</p><div class="language-proto ext-proto line-numbers-mode"><pre class="language-proto"><code>message Foo {\n  reserved 2, 15, 9 to 11;\n  reserved &quot;foo&quot;, &quot;bar&quot;;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-字段类型" tabindex="-1"><a class="header-anchor" href="#_4-字段类型" aria-hidden="true">#</a> 4 字段类型</h2><h3 id="_4-1-标量类型-scalar" tabindex="-1"><a class="header-anchor" href="#_4-1-标量类型-scalar" aria-hidden="true">#</a> 4.1 标量类型(Scalar)</h3><table><thead><tr><th style="text-align:left;">proto类型</th><th style="text-align:left;">go类型</th><th style="text-align:left;">备注</th><th style="text-align:left;">proto类型</th><th style="text-align:left;">go类型</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">double</td><td style="text-align:left;">float64</td><td style="text-align:left;"></td><td style="text-align:left;">float</td><td style="text-align:left;">float32</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">int32</td><td style="text-align:left;">int32</td><td style="text-align:left;"></td><td style="text-align:left;">int64</td><td style="text-align:left;">int64</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">uint32</td><td style="text-align:left;">uint32</td><td style="text-align:left;"></td><td style="text-align:left;">uint64</td><td style="text-align:left;">uint64</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">sint32</td><td style="text-align:left;">int32</td><td style="text-align:left;">适合负数</td><td style="text-align:left;">sint64</td><td style="text-align:left;">int64</td><td style="text-align:left;">适合负数</td></tr><tr><td style="text-align:left;">fixed32</td><td style="text-align:left;">uint32</td><td style="text-align:left;">固长编码，适合大于2^28的值</td><td style="text-align:left;">fixed64</td><td style="text-align:left;">uint64</td><td style="text-align:left;">固长编码，适合大于2^56的值</td></tr><tr><td style="text-align:left;">sfixed32</td><td style="text-align:left;">int32</td><td style="text-align:left;">固长编码</td><td style="text-align:left;">sfixed64</td><td style="text-align:left;">int64</td><td style="text-align:left;">固长编码</td></tr><tr><td style="text-align:left;">bool</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td><td style="text-align:left;">string</td><td style="text-align:left;">string</td><td style="text-align:left;">UTF8 编码，长度不超过 2^32</td></tr><tr><td style="text-align:left;">bytes</td><td style="text-align:left;">[]byte</td><td style="text-align:left;">任意字节序列，长度不超过 2^32</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><p>标量类型如果没有被赋值，则不会被序列化，解析时，会赋予默认值。</p><ul><li>strings：空字符串</li><li>bytes：空序列</li><li>bools：false</li><li>数值类型：0</li></ul><h3 id="_4-2-枚举-enumerations" tabindex="-1"><a class="header-anchor" href="#_4-2-枚举-enumerations" aria-hidden="true">#</a> 4.2 枚举(Enumerations)</h3><p>枚举类型适用于提供一组预定义的值，选择其中一个。例如我们将性别定义为枚举类型。</p><div class="language-proto ext-proto line-numbers-mode"><pre class="language-proto"><code>message Student {\n  string name = 1;\n  enum Gender {\n    FEMALE = 0;\n    MALE = 1;\n  }\n  Gender gender = 2;\n  repeated int32 scores = 3;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>枚举类型的第一个选项的标识符必须是0，这也是枚举类型的默认值。</li><li>别名（Alias），允许为不同的枚举值赋予相同的标识符，称之为别名，需要打开<code>allow_alias</code>选项。</li></ul><div class="language-proto ext-proto line-numbers-mode"><pre class="language-proto"><code>message EnumAllowAlias {\n  enum Status {\n    option allow_alias = true;\n    UNKOWN = 0;\n    STARTED = 1;\n    RUNNING = 1;\n  }\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-使用其他消息类型" tabindex="-1"><a class="header-anchor" href="#_4-3-使用其他消息类型" aria-hidden="true">#</a> 4.3 使用其他消息类型</h3><p><code>Result</code>是另一个消息类型，在 SearchReponse 作为一个消息字段类型使用。</p><div class="language-proto ext-proto line-numbers-mode"><pre class="language-proto"><code>message SearchResponse {\n  repeated Result results = 1; \n}\n\nmessage Result {\n  string url = 1;\n  string title = 2;\n  repeated string snippets = 3;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嵌套写也是支持的：</p><div class="language-proto ext-proto line-numbers-mode"><pre class="language-proto"><code>message SearchResponse {\n  message Result {\n    string url = 1;\n    string title = 2;\n    repeated string snippets = 3;\n  }\n  repeated Result results = 1;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果定义在其他文件中，可以导入其他消息类型来使用：</p><div class="language-proto ext-proto line-numbers-mode"><pre class="language-proto"><code>import &quot;myproject/other_protos.proto&quot;;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-4-任意类型-any" tabindex="-1"><a class="header-anchor" href="#_4-4-任意类型-any" aria-hidden="true">#</a> 4.4 任意类型(Any)</h3><p>Any 可以表示不在 .proto 中定义任意的内置类型。</p><div class="language-proto ext-proto line-numbers-mode"><pre class="language-proto"><code>import &quot;google/protobuf/any.proto&quot;;\n\nmessage ErrorStatus {\n  string message = 1;\n  repeated google.protobuf.Any details = 2;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-oneof" tabindex="-1"><a class="header-anchor" href="#_4-5-oneof" aria-hidden="true">#</a> 4.5 oneof</h3><div class="language-proto ext-proto line-numbers-mode"><pre class="language-proto"><code>message SampleMessage {\n  oneof test_oneof {\n    string name = 4;\n    SubMessage sub_message = 9;\n  }\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-map" tabindex="-1"><a class="header-anchor" href="#_4-6-map" aria-hidden="true">#</a> 4.6 map</h3><div class="language-proto ext-proto line-numbers-mode"><pre class="language-proto"><code>message MapRequest {\n  map&lt;string, int32&gt; points = 1;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-定义服务-services" tabindex="-1"><a class="header-anchor" href="#_5-定义服务-services" aria-hidden="true">#</a> 5 定义服务(Services)</h2><p>如果消息类型是用来远程通信的(Remote Procedure Call, RPC)，可以在 .proto 文件中定义 RPC 服务接口。例如我们定义了一个名为 SearchService 的 RPC 服务，提供了 <code>Search</code> 接口，入参是 <code>SearchRequest</code> 类型，返回类型是 <code>SearchResponse</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>service SearchService <span class="token punctuation">{</span>\n  rpc Search <span class="token punctuation">(</span>SearchRequest<span class="token punctuation">)</span> returns <span class="token punctuation">(</span>SearchResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',49),T=(0,s.Uk)("官方仓库也提供了一个"),N={href:"https://github.com/protocolbuffers/protobuf/blob/master/docs/third_party.md",target:"_blank",rel:"noopener noreferrer"},C=(0,s.Uk)("插件列表"),A=(0,s.Uk)("，帮助开发基于 Protocol Buffer 的 RPC 服务。"),W=(0,s.uE)('<h2 id="_6-protoc-其他参数" tabindex="-1"><a class="header-anchor" href="#_6-protoc-其他参数" aria-hidden="true">#</a> 6 protoc 其他参数</h2><p>命令行使用方法</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>protoc --proto_path<span class="token operator">=</span>IMPORT_PATH --<span class="token operator">&lt;</span>lang<span class="token operator">&gt;</span>_out<span class="token operator">=</span>DST_DIR path/to/file.proto\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>--proto_path=IMPORT_PATH</code>：可以在 .proto 文件中 import 其他的 .proto 文件，proto_path 即用来指定其他 .proto 文件的查找目录。如果没有引入其他的 .proto 文件，该参数可以省略。</li><li><code>--&lt;lang&gt;_out=DST_DIR</code>：指定生成代码的目标文件夹，例如 –go_out=. 即生成 GO 代码在当前文件夹，另外支持 cpp/java/python/ruby/objc/csharp/php 等语言</li></ul><h2 id="_7-推荐风格" tabindex="-1"><a class="header-anchor" href="#_7-推荐风格" aria-hidden="true">#</a> 7 推荐风格</h2><ul><li>文件(Files) <ul><li>文件名使用小写下划线的命名风格，例如 lower_snake_case.proto</li><li>每行不超过 80 字符</li><li>使用 2 个空格缩进</li></ul></li><li>包(Packages) <ul><li>包名应该和目录结构对应，例如文件在<code>my/package/</code>目录下，包名应为 <code>my.package</code></li></ul></li><li>消息和字段(Messages &amp; Fields) <ul><li>消息名使用首字母大写驼峰风格(CamelCase)，例如<code>message StudentRequest { ... }</code></li><li>字段名使用小写下划线的风格，例如 <code>string status_code = 1</code></li><li>枚举类型，枚举名使用首字母大写驼峰风格，例如 <code>enum FooBar</code>，枚举值使用全大写下划线隔开的风格(CAPITALS_WITH_UNDERSCORES )，例如 FOO_DEFAULT=1</li></ul></li><li>服务(Services) <ul><li>RPC 服务名和方法名，均使用首字母大写驼峰风格，例如<code>service FooService{ rpc GetSomething() }</code></li></ul></li></ul><h2 id="附-参考" tabindex="-1"><a class="header-anchor" href="#附-参考" aria-hidden="true">#</a> 附：参考</h2>',7),E={href:"https://github.com/protocolbuffers/protobuf",target:"_blank",rel:"noopener noreferrer"},M=(0,s.Uk)("protobuf 代码仓库 - github.com"),F={href:"https://github.com/golang/protobuf",target:"_blank",rel:"noopener noreferrer"},O=(0,s.Uk)("golang protobuf 代码仓库 - github.com"),z={href:"https://en.wikipedia.org/wiki/Remote_procedure_call",target:"_blank",rel:"noopener noreferrer"},B=(0,s.Uk)("Remote procedure call 远程过程调用 - wikipedia.org"),D={href:"https://github.com/golang/groupcache",target:"_blank",rel:"noopener noreferrer"},I=(0,s.Uk)("Groupcache Go语言版 memcached - github.com"),L={href:"https://developers.google.com/protocol-buffers/docs/proto3",target:"_blank",rel:"noopener noreferrer"},j=(0,s.Uk)("Language Guide (proto3) 官方指南 - google.com"),$={href:"https://developers.google.com/protocol-buffers/docs/style",target:"_blank",rel:"noopener noreferrer"},H=(0,s.Uk)("Proto Style Guide 代码风格指南 - google.com"),J={href:"https://github.com/protocolbuffers/protobuf/blob/master/docs/third_party.md",target:"_blank",rel:"noopener noreferrer"},Z=(0,s.Uk)("Protocol Buffer 插件列表 - github.com"),X={href:"https://geektutu.com/post/quick-go-protobuf.html",target:"_blank",rel:"noopener noreferrer"},K=(0,s.Uk)("极客兔兔"),Q={},V=(0,t(83744).Z)(Q,[["render",function(e,n){const t=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[a,(0,s._)("div",l,[o,(0,s._)("p",null,[i,(0,s._)("a",r,[d,(0,s.Wm)(t)])]),(0,s._)("p",null,[c,(0,s._)("a",p,[u,(0,s.Wm)(t)])])]),v,g,(0,s._)("p",null,[m,(0,s._)("a",b,[h,(0,s.Wm)(t)]),f,(0,s._)("a",k,[_,(0,s.Wm)(t)]),y]),x,q,S,(0,s._)("p",null,[U,(0,s._)("a",R,[P,(0,s.Wm)(t)]),w]),G,(0,s._)("p",null,[T,(0,s._)("a",N,[C,(0,s.Wm)(t)]),A]),W,(0,s._)("ol",null,[(0,s._)("li",null,[(0,s._)("a",E,[M,(0,s.Wm)(t)])]),(0,s._)("li",null,[(0,s._)("a",F,[O,(0,s.Wm)(t)])]),(0,s._)("li",null,[(0,s._)("a",z,[B,(0,s.Wm)(t)])]),(0,s._)("li",null,[(0,s._)("a",D,[I,(0,s.Wm)(t)])]),(0,s._)("li",null,[(0,s._)("a",L,[j,(0,s.Wm)(t)])]),(0,s._)("li",null,[(0,s._)("a",$,[H,(0,s.Wm)(t)])]),(0,s._)("li",null,[(0,s._)("a",J,[Z,(0,s.Wm)(t)])]),(0,s._)("li",null,[(0,s._)("a",X,[K,(0,s.Wm)(t)])])])])}]])}}]);