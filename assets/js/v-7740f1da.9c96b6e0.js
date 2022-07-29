"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[91232],{98646:(e,n,l)=>{l.r(n),l.d(n,{data:()=>i});const i=JSON.parse('{"key":"v-7740f1da","path":"/linux-tutor/server/Confluence-Install-And-Settings.html","title":"Confluence 安装和配置","lang":"zh-CN","frontmatter":{"summary":"Confluence 安装和配置 Confluence 6.15.4 最新 6.15.4 版本时间：2019-05; 数据库 连上容器：docker exec -it mysql-confluence /bin/bash; 连上 MySQL：mysql -u root -p; 设置编码：; 必须做这一步，不然配置过程会报错，confluence 的 DB 要","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/linux-tutor/server/Confluence-Install-And-Settings.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"Confluence 安装和配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-27T01:37:35.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-05-27T01:37:35.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Confluence 6.15.4","slug":"confluence-6-15-4","children":[]},{"level":2,"title":"反向代理的配置可以参考","slug":"反向代理的配置可以参考","children":[]},{"level":2,"title":"使用 markdown","slug":"使用-markdown","children":[]},{"level":2,"title":"其他资料","slug":"其他资料","children":[]}],"git":{"createdTime":1653615455000,"updatedTime":1653615455000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":2.04,"words":613},"filePathRelative":"linux-tutor/server/Confluence-Install-And-Settings.md","localizedDate":"2022年5月27日"}')},10217:(e,n,l)=>{l.r(n),l.d(n,{default:()=>A});var i=l(66252);const a=(0,i.uE)('<h1 id="confluence-安装和配置" tabindex="-1"><a class="header-anchor" href="#confluence-安装和配置" aria-hidden="true">#</a> Confluence 安装和配置</h1><h2 id="confluence-6-15-4" tabindex="-1"><a class="header-anchor" href="#confluence-6-15-4" aria-hidden="true">#</a> Confluence 6.15.4</h2><ul><li>最新 6.15.4 版本时间：2019-05</li></ul><h4 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run \\\n\t--name mysql-confluence \\\n\t--restart always \\\n\t-p 3316:3306 \\\n\t-e MYSQL_ROOT_PASSWORD=adg123456 \\\n\t-e MYSQL_DATABASE=confluence_db \\\n\t-e MYSQL_USER=confluence_user \\\n\t-e MYSQL_PASSWORD=confluence_123456 \\\n\t-d \\\n\tmysql:5.7\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>连上容器：<code>docker exec -it mysql-confluence /bin/bash</code><ul><li>连上 MySQL：<code>mysql -u root -p</code></li></ul></li><li>设置编码： <ul><li><strong>必须做这一步，不然配置过程会报错，confluence 的 DB 要求是 utf8，还不能是 utf8mb4</strong></li><li><strong>并且排序规则还必须是：utf8_bin</strong></li><li><strong>数据库必须使用&#39;READ-COMMITTED&#39;作为默认隔离级别</strong></li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SET NAMES &#39;utf8&#39;;\nalter database confluence_db character set utf8 collate utf8_bin;\nSET GLOBAL tx_isolation=&#39;READ-COMMITTED&#39;;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>',8),t=(0,i.Uk)("下载："),s={href:"https://www.atlassian.com/software/confluence/download",target:"_blank",rel:"noopener noreferrer"},c=(0,i.Uk)("https://www.atlassian.com/software/confluence/download"),r=(0,i._)("ul",null,[(0,i._)("li",null,"选择：linux64 类型下载")],-1),d=(0,i._)("li",null,[(0,i.Uk)("授权："),(0,i._)("code",null,"chmod +x atlassian-confluence-6.15.4-x64.bin")],-1),o=(0,i.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./atlassian-confluence-6.15.4-x64.bin\n\n开始提示：\n\nUnpacking JRE ...\nStarting Installer ...\n\nThis will install Confluence 6.9.0 on your computer.\nOK [o, Enter], Cancel [c]\n\n&gt;&gt; 输入o或直接回车\n\nClick Next to continue, or Cancel to exit Setup.\n\nChoose the appropriate installation or upgrade option.\nPlease choose one of the following:\nExpress Install (uses default settings) [1], \nCustom Install (recommended for advanced users) [2, Enter], \nUpgrade an existing Confluence installation [3]\n1\n&gt;&gt; 这里输入数字1\n\nSee where Confluence will be installed and the settings that will be used.\nInstallation Directory: /opt/atlassian/confluence \nHome Directory: /var/atlassian/application-data/confluence \nHTTP Port: 8090 \nRMI Port: 8000 \nInstall as service: Yes \nInstall [i, Enter], Exit [e]\ni\n\n&gt;&gt; 输入i或者直接回车\n\nExtracting files ...\n\nPlease wait a few moments while we configure Confluence.\n\nInstallation of Confluence 6.9.0 is complete\nStart Confluence now?\nYes [y, Enter], No [n]\n\n&gt;&gt; 输入y或者直接回车\n\nPlease wait a few moments while Confluence starts up.\nLaunching Confluence ...\n\nInstallation of Confluence 6.9.0 is complete\nYour installation of Confluence 6.9.0 is now ready and can be accessed via\nyour browser.\nConfluence 6.9.0 can be accessed at http://localhost:8090\nFinishing installation ...\n\n# 安装完成，访问本机的8090端口进行web端安装\n# 开放防火墙端口\nfirewall-cmd --add-port=8090/tcp --permanent\nfirewall-cmd --add-port=8000/tcp --permanent\nfirewall-cmd --reload\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>默认是安装在 /opt 目录下：<code>/opt/atlassian/confluence/confluence/WEB-INF/lib</code></li><li>启动：<code>sh /opt/atlassian/confluence/bin/start-confluence.sh</code></li><li>停止：<code>sh /opt/atlassian/confluence/bin/stop-confluence.sh</code></li><li>查看 log：<code>tail -300f /opt/atlassian/confluence/logs/catalina.out</code></li><li>卸载：<code>sh /opt/atlassian/confluence/uninstall</code></li><li>设置 MySQL 连接驱动，把 mysql-connector-java-5.1.47.jar 放在目录 <code>/opt/atlassian/confluence/confluence/WEB-INF/lib</code></li></ul><h4 id="首次配置" tabindex="-1"><a class="header-anchor" href="#首次配置" aria-hidden="true">#</a> 首次配置</h4>',3),u=(0,i.Uk)("访问："),v={href:"http://localhost:8090",target:"_blank",rel:"noopener noreferrer"},m=(0,i.Uk)("http://localhost:8090"),b=(0,i.Uk)("参考文章："),h={href:"https://blog.51cto.com/m51cto/2131964",target:"_blank",rel:"noopener noreferrer"},f=(0,i.Uk)("https://blog.51cto.com/m51cto/2131964"),p=(0,i.Uk)("参考文章："),g={href:"https://www.qinjj.tech/2019/01/04/confluence%20install/",target:"_blank",rel:"noopener noreferrer"},_=(0,i.Uk)("https://www.qinjj.tech/2019/01/04/confluence install/"),w=(0,i._)("li",null,"因为步骤一样，所以我就不再截图了。",-1),k=(0,i._)("h4",{id:"license-过程",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#license-过程","aria-hidden":"true"},"#"),(0,i.Uk)(" License 过程")],-1),x=(0,i._)("ul",null,[(0,i._)("li",null,"参考自己的为知笔记")],-1),C=(0,i._)("h2",{id:"反向代理的配置可以参考",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#反向代理的配置可以参考","aria-hidden":"true"},"#"),(0,i.Uk)(" 反向代理的配置可以参考")],-1),y={href:"https://blog.51cto.com/m51cto/2131964",target:"_blank",rel:"noopener noreferrer"},S=(0,i.Uk)("https://blog.51cto.com/m51cto/2131964"),E=(0,i._)("h2",{id:"使用-markdown",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#使用-markdown","aria-hidden":"true"},"#"),(0,i.Uk)(" 使用 markdown")],-1),U=(0,i._)("ul",null,[(0,i._)("li",null,"点击右上角小齿轮 > 管理应用 > 搜索市场应用 > 输入 markdown > 安装")],-1),I=(0,i._)("h2",{id:"其他资料",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#其他资料","aria-hidden":"true"},"#"),(0,i.Uk)(" 其他资料")],-1),q={href:"https://www.qinjj.tech/2019/02/26/confluence%20maintain/",target:"_blank",rel:"noopener noreferrer"},T=(0,i.Uk)("https://www.qinjj.tech/2019/02/26/confluence maintain/"),j={href:"https://www.qinjj.tech/2019/02/26/confluence_maintain2/",target:"_blank",rel:"noopener noreferrer"},D=(0,i.Uk)("https://www.qinjj.tech/2019/02/26/confluence_maintain2/"),M={},A=(0,l(83744).Z)(M,[["render",function(e,n){const l=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[a,(0,i._)("ul",null,[(0,i._)("li",null,[t,(0,i._)("a",s,[c,(0,i.Wm)(l)]),r]),d]),o,(0,i._)("ul",null,[(0,i._)("li",null,[u,(0,i._)("a",v,[m,(0,i.Wm)(l)])]),(0,i._)("li",null,[b,(0,i._)("a",h,[f,(0,i.Wm)(l)])]),(0,i._)("li",null,[p,(0,i._)("a",g,[_,(0,i.Wm)(l)])]),w]),k,x,C,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",y,[S,(0,i.Wm)(l)])])]),E,U,I,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",q,[T,(0,i.Wm)(l)])]),(0,i._)("li",null,[(0,i._)("a",j,[D,(0,i.Wm)(l)])])])])}]])}}]);