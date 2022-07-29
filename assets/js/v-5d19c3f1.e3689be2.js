"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[11550],{89569:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s=JSON.parse('{"key":"v-5d19c3f1","path":"/frontend/package-manager/workspace.html","title":"工作区使用","lang":"zh-CN","frontmatter":{"summary":"工作区使用 yarn工作区 Yarn Workspaces（工作区）是Yarn提供的monorepo的依赖管理机制，从Yarn 1.0开始默认支持，用于在代码仓库的根目录下管理多个package的依赖。 Monorepo 假如你是一个npm工具的维护者，管理着多个功能相近的包，或者这些包之间存在依赖关系。如果将这些包拆分在不同仓库里，那么面临要跨多个包进行更","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/frontend/package-manager/workspace.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"工作区使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-04-08T18:02:56.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-04-08T18:02:56.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"yarn工作区","slug":"yarn工作区","children":[]},{"level":2,"title":"Monorepo","slug":"monorepo","children":[]},{"level":2,"title":"Why Yarn Workspace?","slug":"why-yarn-workspace","children":[]},{"level":2,"title":"如何使用Workspace","slug":"如何使用workspace","children":[]},{"level":2,"title":"命令和示例","slug":"命令和示例","children":[{"level":3,"title":"yarn workspace <workspace_name> <command>","slug":"yarn-workspace-workspace-name-command","children":[]},{"level":3,"title":"yarn workspaces run <command>","slug":"yarn-workspaces-run-command","children":[]},{"level":3,"title":"yarn workspaces info [--json]","slug":"yarn-workspaces-info-json","children":[]},{"level":3,"title":"yarn <add|remove> <package> -W","slug":"yarn-add-remove-package-w","children":[]}]},{"level":2,"title":"Yarn Workspace与Lerna","slug":"yarn-workspace与lerna","children":[]}],"git":{"createdTime":1649440976000,"updatedTime":1649440976000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":3.98,"words":1195},"filePathRelative":"frontend/package-manager/workspace.md","localizedDate":"2022年4月8日"}')},10416:(n,a,e)=>{e.r(a),e.d(a,{default:()=>m});var s=e(66252);const o=(0,s.uE)('<h1 id="工作区使用" tabindex="-1"><a class="header-anchor" href="#工作区使用" aria-hidden="true">#</a> 工作区使用</h1><h2 id="yarn工作区" tabindex="-1"><a class="header-anchor" href="#yarn工作区" aria-hidden="true">#</a> yarn工作区</h2><p>Yarn Workspaces（工作区）是Yarn提供的<code>monorepo</code>的依赖管理机制，从Yarn 1.0开始默认支持，用于在代码仓库的根目录下管理多个package的依赖。</p><h2 id="monorepo" tabindex="-1"><a class="header-anchor" href="#monorepo" aria-hidden="true">#</a> <strong>Monorepo</strong></h2><p>假如你是一个npm工具的维护者，管理着多个功能相近的包，或者这些包之间存在依赖关系。如果将这些包拆分在不同仓库里，那么面临要跨多个包进行更改时，工作会非常繁琐和复杂。</p><p>为了简化流程，很多大型项目采用了menorepo的做法，即把所有的包放在一个仓库中管理。Babel、React、Vue、Jest等都使用了menorepo的管理方式。</p><p>Menorepo的优点是可以在一个仓库里维护多个package，可统一构建，跨package调试、依赖管理、版本发布都十分方便，搭配工具还能统一生成CHANGELOG；</p><p>缺点是代码仓库体积会变大，只开发其中一个package也需要安装整个项目的依赖。</p>',8),t=(0,s.Uk)("来看一下**"),r={href:"https://github.com/babel/babel/tree/master",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Uk)("Babel"),p=(0,s.Uk)("**的仓库目录（简化）："),c=(0,s.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>babel/\n|--package.json\n|--yarn.lock\n|--packages/\n|  |--babel-cli/\n|  |  |--package.json\n|  |--babel-core/\n|  |  |--package.json\n|  |--babel-parser/\n|  |  |--package.json\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="why-yarn-workspace" tabindex="-1"><a class="header-anchor" href="#why-yarn-workspace" aria-hidden="true">#</a> <strong>Why Yarn Workspace?</strong></h2><ul><li>开发多个互相依赖的package时，workspace会自动对package的引用设置软链接（symlink），比yarn link更加方便，且链接仅局限在当前workspace中，不会对整个系统造成影响</li><li>所有package的依赖会安装在最根目录的node_modules下，节省磁盘空间，且给了yarn更大的依赖优化空间</li><li>所有package使用同一个yarn.lock，更少造成冲突且易于审查</li></ul><h2 id="如何使用workspace" tabindex="-1"><a class="header-anchor" href="#如何使用workspace" aria-hidden="true">#</a> <strong>如何使用Workspace</strong></h2><p>根目录的package.json设置：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n  &quot;name&quot;: &quot;mono-demo&quot;,\n  &quot;version&quot;: &quot;1.0.0&quot;,\n  &quot;private&quot;: true,\n  &quot;workspaces&quot;: [\n    &quot;packages/*&quot;\n  ],\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>private</code>：</p><p>根目录一般是项目的脚手架，无需发布，<code>&quot;private&quot;: true</code>会确保根目录不被发布出去。</p><p><code>workspaces</code>:</p><p>声明workspace中package的路径。值是一个字符串数组，支持Glob通配符。</p><p>其中<code>&quot;packages/*&quot;</code>是社区的常见写法，也可以枚举所有package： <code>&quot;workspaces&quot;: [&quot;package-a&quot;, &quot;package-b&quot;]</code>。</p><h2 id="命令和示例" tabindex="-1"><a class="header-anchor" href="#命令和示例" aria-hidden="true">#</a> <strong>命令和示例</strong></h2><blockquote><p>PS：以下命令基于yarn@1.x</p></blockquote><p>假设项目中有foo和bar两个package：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mono-demo/\n|--package.json\n|--packages/\n|  |--foo/\n|  |  |--package.json\n|  |--bar/\n|  |  |--package.json\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yarn-workspace-workspace-name-command" tabindex="-1"><a class="header-anchor" href="#yarn-workspace-workspace-name-command" aria-hidden="true">#</a> <strong><code>yarn workspace &lt;workspace_name&gt; &lt;command&gt;</code></strong></h3><p>在指定的package中运行指定的命令。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 在foo中添加react，react-dom作为devDependencies\nyarn workspace foo add react react-dom --dev\n\n# 移除bar中的lodash依赖\nyarn workspace bar remove lodash\n\n# 运行bar中package.json的 scripts.test 命令\nyarn workspace bar run test\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yarn-workspaces-run-command" tabindex="-1"><a class="header-anchor" href="#yarn-workspaces-run-command" aria-hidden="true">#</a> <strong><code>yarn workspaces run &lt;command&gt;</code></strong></h3><p>在所有package中运行指定的命令，若某个package中没有对应的命令则会报错。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 运行所有package（foo、bar）中package.json的 scripts.build 命令\nyarn workspaces run build\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yarn-workspaces-info-json" tabindex="-1"><a class="header-anchor" href="#yarn-workspaces-info-json" aria-hidden="true">#</a> <strong><code>yarn workspaces info [--json]</code></strong></h3><p>查看项目中的workspace依赖树。</p><p>例如我的bar依赖了foo，如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// bar/package.json\n{\n  &quot;name&quot;: &quot;bar&quot;,\n  &quot;version&quot;: &quot;1.0.0&quot;,\n  &quot;dependencies&quot;: {\n    &quot;foo&quot;: &quot;^1.0.0&quot;\n  }\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目中的依赖结构是这样的（假设foo/package.json的版本匹配bar的依赖版本，否则会另外安装一个匹配的foo）：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/package.json\n/yarn.lock\n\n/node_modules\n/node_modules/foo -&gt; /packages/foo\n\n/packages/foo/package.json\n/packages/bar/package.json\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么运行<code>yarn workspaces info</code>会得到如下输出：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn workspaces v1.22.4\n{\n  &quot;bar&quot;: {\n    &quot;location&quot;: &quot;packages/bar&quot;,\n    &quot;workspaceDependencies&quot;: [\n      &quot;foo&quot;\n    ],\n    &quot;mismatchedWorkspaceDependencies&quot;: []\n  },\n  &quot;foo&quot;: {\n    &quot;location&quot;: &quot;packages/foo&quot;,\n    &quot;workspaceDependencies&quot;: [],\n    &quot;mismatchedWorkspaceDependencies&quot;: []\n  }\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yarn-add-remove-package-w" tabindex="-1"><a class="header-anchor" href="#yarn-add-remove-package-w" aria-hidden="true">#</a> <code>yarn &lt;add|remove&gt; &lt;package&gt; -W</code></h3><ul><li>-W: --ignore-workspace-root-check ，允许依赖被安装在workspace的根目录</li></ul><p>管理根目录的依赖。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 安装eslint作为根目录的devDependencies\nyarn add eslint -D -W\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yarn-workspace与lerna" tabindex="-1"><a class="header-anchor" href="#yarn-workspace与lerna" aria-hidden="true">#</a> Yarn Workspace与Lerna</h2>',34),l={href:"https://github.com/lerna/lerna#readme",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Uk)("Lerna"),u=(0,s.Uk)("是社区主流的monorepo管理工具之一，集成了依赖管理、版本发布管理等功能。"),v=(0,s.uE)('<p>使用Learn管理的项目的目录结构和yarn workspace类似。</p><p>Lerna的依赖管理是也基于<code>yarn/npm</code>，但是安装依赖的方式和yarn workspace有些差异：</p><p>Yarn workspace只会在根目录安装一个node_modules，这有利于提升依赖的安装效率和不同package间的版本复用。而Lerna默认会进到每一个package中运行<code>yarn/npm install</code>，并在每个package中创建一个node_modules。</p><p>目前社区中最主流的方案，也是yarn官方推荐的方案，是集成yarn workspace和lerna。使用yarn workspace来管理依赖，使用lerna来管理npm包的版本发布。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>本项目就是使用yarn workspace+lerna管理的</p></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// package.json</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;workspaces&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;android-docs&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;cs-guide&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;git-tutor&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;linux-tutorial&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;node-tutor&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;python-tutor&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;wangdoc&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;lerna&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;cpx2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lerna run docs:build --parallel&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lerna run docs:dev --parallel&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;cs-guide&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn workspace cs-guide docs:dev&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;android&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn workspace android-docs docs:dev&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;git-tutor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn workspace git-tutor docs:dev&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;linux-tutorial&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn workspace linux-tutorial docs:dev&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;node-tutor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn workspace node-tutordocs:dev&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;python-tutor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn workspace python-tutor docs:dev&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;wangdoc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn workspace wangdoc docs:dev&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lerna.json</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;npmClient&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;useWorkspaces&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;packages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;android-docs&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;cs-guide&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;git-tutor&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;linux-tutorial&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;node-tutor&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;python-tutor&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;wangdoc&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;run&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;npmClient&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',8),k={},m=(0,e(83744).Z)(k,[["render",function(n,a){const e=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[o,(0,s._)("p",null,[t,(0,s._)("a",r,[i,(0,s.Wm)(e)]),p]),c,(0,s._)("p",null,[(0,s._)("a",l,[d,(0,s.Wm)(e)]),u]),v])}]])}}]);