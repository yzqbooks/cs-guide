"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[61930],{86333:(e,n,t)=>{t.r(n),t.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-032efd72","path":"/csharp-tutor/package-manage.html","title":"nuget包管理","lang":"zh-CN","frontmatter":{"order":1,"summary":"nuget包管理 NuGet默认的全局包下载地址一般为: C:\\\\Users\\\\{username}\\\\.nuget\\\\packages 我们可以在Nuget.config中修改package存放路径，Nuget.config 在C:\\\\Users\\\\{UserName}\\\\AppData\\\\Roaming\\\\NuGet目录下 打开路径 修改NuGet.config为 更新工","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/csharp-tutor/package-manage.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"nuget包管理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-29T07:25:09.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-29T07:25:09.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"wpf","slug":"wpf","children":[]},{"level":2,"title":"winform","slug":"winform","children":[]},{"level":2,"title":"后端框架","slug":"后端框架","children":[]},{"level":2,"title":"好用的库","slug":"好用的库","children":[]},{"level":2,"title":"打包工具","slug":"打包工具","children":[]},{"level":2,"title":"源码","slug":"源码","children":[]}],"git":{"createdTime":1649171852000,"updatedTime":1659079509000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":4}]},"readingTime":{"minutes":1.33,"words":399},"filePathRelative":"csharp-tutor/package-manage.md","localizedDate":"2022年4月5日"}')},38617:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Be});var a=t(66252);const r=(0,a.uE)('<h1 id="nuget包管理" tabindex="-1"><a class="header-anchor" href="#nuget包管理" aria-hidden="true">#</a> nuget包管理</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>NuGet默认的全局包下载地址一般为: <code>C:\\Users\\{username}\\.nuget\\packages</code> 我们可以在Nuget.config中修改package存放路径，<code>Nuget.config</code> 在<code>C:\\Users\\{UserName}\\AppData\\Roaming\\NuGet</code>目录下</p></div><p>打开路径 修改NuGet.config为</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packageSources</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nuget.org<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://api.nuget.org/v3/index.json<span class="token punctuation">&quot;</span></span> <span class="token attr-name">protocolVersion</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packageSources</span><span class="token punctuation">&gt;</span></span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>config</span><span class="token punctuation">&gt;</span></span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>globalPackagesFolder<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>D:\\Nuget\\.nuget\\packages<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>config</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),o={href:"https://docs.microsoft.com/zh-cn/dotnet/core/porting/upgrade-assistant-winforms-framework",target:"_blank",rel:"noopener noreferrer"},s=(0,a.Uk)("更新工具地址"),l=(0,a._)("h2",{id:"wpf",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#wpf","aria-hidden":"true"},"#"),(0,a.Uk)(" wpf")],-1),i={href:"https://platform.uno/",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("https://platform.uno/"),u={href:"https://docs.avaloniaui.net/",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("https://docs.avaloniaui.net/"),h={href:"https://github.com/MaterialDesignInXAML/-MaterialDesignInXamlToolkit",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("MaterialDesignInXamlToolkit"),k={href:"https://handyorg.gitee.io/handycontrol/",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("HandyControl"),d={href:"https://github.com/Mochengvia/PanuonUI.Silver",target:"_blank",rel:"noopener noreferrer"},_=(0,a.Uk)("PanuonUI.Silver"),f={href:"https://github.com/beto-rodriguez/LiveCharts2",target:"_blank",rel:"noopener noreferrer"},b=(0,a.Uk)("LiveCharts2"),U={href:"https://github.com/aduskin/AduSkin",target:"_blank",rel:"noopener noreferrer"},v=(0,a.Uk)("AduSkin"),w={href:"https://mahapps.com/docs/guides/quick-start",target:"_blank",rel:"noopener noreferrer"},W=(0,a.Uk)("mahapps"),y={href:"https://github.com/Kinnara/ModernWpf",target:"_blank",rel:"noopener noreferrer"},q=(0,a.Uk)("ModernWpf"),C={href:"https://github.com/xceedsoftware/wpftoolkit",target:"_blank",rel:"noopener noreferrer"},N=(0,a.Uk)("wpftoolkit"),S={href:"https://github.com/fluentribbon/Fluent.Ribbon",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("Fluent.Ribbon"),z={href:"https://github.com/dotnet/maui",target:"_blank",rel:"noopener noreferrer"},D=(0,a.Uk)("跨平台ui库maui"),F=(0,a._)("h2",{id:"winform",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#winform","aria-hidden":"true"},"#"),(0,a.Uk)(" winform")],-1),G={href:"https://gitee.com/yhuse/SunnyUI/wikis/pages",target:"_blank",rel:"noopener noreferrer"},A=(0,a.Uk)("sunnyui"),I={href:"https://github.com/NetDimension/NanUI",target:"_blank",rel:"noopener noreferrer"},L=(0,a.Uk)("NanUI"),T=(0,a._)("h2",{id:"后端框架",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#后端框架","aria-hidden":"true"},"#"),(0,a.Uk)(" 后端框架")],-1),Z={href:"https://docs.microsoft.com/zh-cn/aspnet/core/getting-started/?view=aspnetcore-6.0&tabs=windows",target:"_blank",rel:"noopener noreferrer"},P=(0,a.Uk)("aspnetcore"),M={href:"https://www.abp.io/",target:"_blank",rel:"noopener noreferrer"},B=(0,a.Uk)("abp"),R={href:"https://www.nuget.org/packages/BootstrapBlazor/#",target:"_blank",rel:"noopener noreferrer"},K=(0,a.Uk)("BootstrapBlazor"),X={href:"https://dotnetchina.gitee.io/furion/",target:"_blank",rel:"noopener noreferrer"},E=(0,a.Uk)("furion"),Y={href:"https://docs.microsoft.com/zh-cn/ef/core/",target:"_blank",rel:"noopener noreferrer"},j=(0,a.Uk)("efcore"),H={href:"https://github.com/cuiliang/ClickShow",target:"_blank",rel:"noopener noreferrer"},J=(0,a.Uk)("ClickShow"),O=(0,a.Uk)(" ​"),V=(0,a._)("p",null,"​",-1),Q=(0,a._)("h2",{id:"好用的库",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#好用的库","aria-hidden":"true"},"#"),(0,a.Uk)(" 好用的库")],-1),$={href:"https://github.com/commandlineparser/commandline.git",target:"_blank",rel:"noopener noreferrer"},ee=(0,a.Uk)("cmd parser"),ne={href:"https://github.com/CommunityToolkit",target:"_blank",rel:"noopener noreferrer"},te=(0,a.Uk)("CommunityToolkit"),ae={href:"https://github.com/thangchung/awesome-dotnet-core",target:"_blank",rel:"noopener noreferrer"},re=(0,a.Uk)("awesome-dotnet-core"),oe={href:"https://github.com/ookii-dialogs/ookii-dialogs-wpf",target:"_blank",rel:"noopener noreferrer"},se=(0,a.Uk)("ookii-dialogs-wpf"),le={href:"https://github.com/icsharpcode/SharpZipLib",target:"_blank",rel:"noopener noreferrer"},ie=(0,a.Uk)("SharpZipLib"),pe={href:"https://github.com/squid-box/SevenZipSharp",target:"_blank",rel:"noopener noreferrer"},ue=(0,a.Uk)("SevenZipSharp"),ce=(0,a._)("h2",{id:"打包工具",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#打包工具","aria-hidden":"true"},"#"),(0,a.Uk)(" 打包工具")],-1),he={href:"https://github.com/Fody/Fody",target:"_blank",rel:"noopener noreferrer"},ge=(0,a.Uk)("https://github.com/Fody/Fody"),ke=(0,a.Uk)(" 把所有dll打包到一个dll里面"),me={href:"https://github.com/Fody/Costura",target:"_blank",rel:"noopener noreferrer"},de=(0,a.Uk)("https://github.com/Fody/Costura"),_e={href:"https://github.com/Fody/PropertyChanged",target:"_blank",rel:"noopener noreferrer"},fe=(0,a.Uk)("https://github.com/Fody/PropertyChanged"),be=(0,a.Uk)(" ​"),Ue=(0,a._)("p",null,"​",-1),ve=(0,a._)("h2",{id:"源码",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#源码","aria-hidden":"true"},"#"),(0,a.Uk)(" 源码")],-1),we={href:"https://www.zhihu.com/question/19885862",target:"_blank",rel:"noopener noreferrer"},We=(0,a.Uk)("https://www.zhihu.com/question/19885862"),ye={href:"https://www.51aspx.com/CodeList/0!0!0!0!0!0!0!0!0!0!0!0!0i4i0",target:"_blank",rel:"noopener noreferrer"},qe=(0,a.Uk)("链接"),Ce={href:"https://github.com/Codeusa/Borderless-Gaming",target:"_blank",rel:"noopener noreferrer"},Ne=(0,a.Uk)("https://github.com/Codeusa/Borderless-Gaming"),Se={href:"https://github.com/DGP-Studio",target:"_blank",rel:"noopener noreferrer"},xe=(0,a.Uk)("https://github.com/DGP-Studio"),ze={href:"https://github.com/Scighost/KeqingNiuza",target:"_blank",rel:"noopener noreferrer"},De=(0,a.Uk)("https://github.com/Scighost/KeqingNiuza"),Fe={href:"https://github.com/Accelerider/Accelerider.Windows",target:"_blank",rel:"noopener noreferrer"},Ge=(0,a.Uk)("https://github.com/Accelerider/Accelerider.Windows"),Ae={href:"https://dotnet9.com/cat/dotnet-desktop-wpf",target:"_blank",rel:"noopener noreferrer"},Ie=(0,a.Uk)("dotnet9.com"),Le={href:"https://github.com/DaZiYuan/LiveWallpaper",target:"_blank",rel:"noopener noreferrer"},Te=(0,a.Uk)("https://github.com/DaZiYuan/LiveWallpaper"),Ze={href:"https://github.com/files-community/Files",target:"_blank",rel:"noopener noreferrer"},Pe=(0,a.Uk)("https://github.com/files-community/Files"),Me={},Be=(0,t(83744).Z)(Me,[["render",function(e,n){const t=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[r,(0,a._)("p",null,[(0,a._)("a",o,[s,(0,a.Wm)(t)])]),l,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",i,[p,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",u,[c,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",h,[g,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",k,[m,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",d,[_,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",f,[b,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",U,[v,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",w,[W,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",y,[q,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",C,[N,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",S,[x,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",z,[D,(0,a.Wm)(t)])])]),F,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",G,[A,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",I,[L,(0,a.Wm)(t)])])]),T,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",Z,[P,(0,a.Wm)(t)])])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",M,[B,(0,a.Wm)(t)])])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",R,[K,(0,a.Wm)(t)])])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",X,[E,(0,a.Wm)(t)])])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",Y,[j,(0,a.Wm)(t)])])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",H,[J,(0,a.Wm)(t)]),O])])]),V,Q,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",$,[ee,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",ne,[te,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",ae,[re,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",oe,[se,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",le,[ie,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",pe,[ue,(0,a.Wm)(t)])])]),ce,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",he,[ge,(0,a.Wm)(t)]),ke]),(0,a._)("li",null,[(0,a._)("a",me,[de,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",_e,[fe,(0,a.Wm)(t)]),be])]),Ue,ve,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",we,[We,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",ye,[qe,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",Ce,[Ne,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",Se,[xe,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",ze,[De,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",Fe,[Ge,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",Ae,[Ie,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",Le,[Te,(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",Ze,[Pe,(0,a.Wm)(t)])])])])}]])}}]);