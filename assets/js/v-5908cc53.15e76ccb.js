"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[47053],{40259:(e,t,r)=>{r.r(t),r.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-5908cc53","path":"/linux-tutor/server/Crontab.html","title":"Crontab 介绍","lang":"zh-CN","frontmatter":{"summary":"Crontab 介绍 Crontab 安装 查看是否已安装：; CentOS：rpm -qa | grep cron; Ubuntu：dpkg -l | grep cron; 安装（一般系统是集成的）：; CentOS 6 / 7：sudo yum install -y vixie-cron crontabs; Ubuntu：sudo apt-get ins","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/linux-tutor/server/Crontab.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"Crontab 介绍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-28T16:16:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-28T16:16:07.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Crontab 安装","slug":"crontab-安装","children":[]},{"level":2,"title":"Crontab 服务器配置文件常用参数","slug":"crontab-服务器配置文件常用参数","children":[]},{"level":2,"title":"Crontab 权限问题","slug":"crontab-权限问题","children":[]},{"level":2,"title":"Crontab 不执行","slug":"crontab-不执行","children":[]},{"level":2,"title":"Crontab 资料","slug":"crontab-资料","children":[]}],"git":{"createdTime":1653615455000,"updatedTime":1659024967000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":2}]},"readingTime":{"minutes":2.16,"words":647},"filePathRelative":"linux-tutor/server/Crontab.md","localizedDate":"2022年5月27日"}')},9792:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var o=r(66252);const l=(0,o.uE)('<h1 id="crontab-介绍" tabindex="-1"><a class="header-anchor" href="#crontab-介绍" aria-hidden="true">#</a> Crontab 介绍</h1><h2 id="crontab-安装" tabindex="-1"><a class="header-anchor" href="#crontab-安装" aria-hidden="true">#</a> Crontab 安装</h2><ul><li><p>查看是否已安装：</p></li><li><p>CentOS：<code>rpm -qa | grep cron</code></p></li><li><p>Ubuntu：<code>dpkg -l | grep cron</code></p></li><li><p>安装（一般系统是集成的）：</p></li><li><p>CentOS 6 / 7：<code>sudo yum install -y vixie-cron crontabs</code></p></li><li><p>Ubuntu：<code>sudo apt-get install -y cron</code></p></li><li><p>服务常用命令</p><ul><li>CentOS 6 <ul><li><code>service crond start</code> 启动服务</li><li><code>service crond stop</code> 关闭服务</li><li><code>service crond restart</code> 重启服务</li></ul></li><li>CentOS 7 <ul><li><code>systemctl start crond</code> 启动服务</li><li><code>systemctl restart crond</code> 重新启动服务</li><li><code>systemctl status crond</code> 加入自启动</li><li><code>systemctl stop crond</code> 关闭服务</li></ul></li></ul></li></ul><h2 id="crontab-服务器配置文件常用参数" tabindex="-1"><a class="header-anchor" href="#crontab-服务器配置文件常用参数" aria-hidden="true">#</a> Crontab 服务器配置文件常用参数</h2>',4),a=(0,o.uE)("<li>配置文件介绍（记得先备份）：<code>sudo vim /etc/crontab</code></li><li>注意：不要在配置文件里面写相对路径</li><li>该配置格式解释：</li><li>常用例子介绍： <ul><li><code>30 21 * * * service httpd restart</code> #每晚的 21:30 重启 apache</li><li><code>30 21 * * 6,0 service httpd restart</code> #每周六、周日的 21:30 重启 apache</li><li><code>45 4 1,10,22 * * service httpd restart</code> #每月的 1、10、22 日的 4:45 重启 apache</li><li><code>45 4 1-10 * * service httpd restart</code> #每月的 1 到 10 日的 4:45 重启 apache</li><li><code>*/2 * * * * service httpd restart</code> #每隔两分钟重启 apache</li><li><code>1-59/2 * * * * service httpd restart</code> #每隔两分钟重启 apache（这个比较特殊：1-59/2 这个表示过掉0分，从 1 分开始算，每隔两分执行，所以 1 分执行了，3 分执行了，5 分执行了....都是奇数进行执行。默认的 */2 都是偶数执行。）</li><li><code>* */2 * * * service httpd restart</code> #每隔两小时重启 apache</li><li><code>0 23-7/2 * * * service httpd restart</code> #晚上 11 点到早上 7 点之间，每隔 2 个小时重启 apache</li><li><code>0-59/30 18-23 * * * service httpd restart</code> #每天 18:00 到 23：00 之间，每隔 30 分钟重启 apache（方法一）</li><li><code>0,30 18-23 * * * service httpd restart</code> #每天 18:00 到 23：00 之间，每隔 30 分钟重启 apache（方法二）</li><li><code>0 4 * * sun root /opt/shell/crontab-redis-restart.sh</code> #每周日 4:00 执行一个脚本（root 用户运行，有些脚本不指定用户会报：ERROR (getpwnam() failed）</li></ul></li>",4),i=(0,o.Uk)("更多例子可以看："),c={href:"http://linuxtools-rst.readthedocs.io/zh_CN/latest/tool/crontab.html",target:"_blank",rel:"noopener noreferrer"},n=(0,o.Uk)("http://linuxtools-rst.readthedocs.io/zh_CN/latest/tool/crontab.html"),d=(0,o._)("li",null,[(0,o.Uk)("执行记录日志："),(0,o._)("code",null,"tail -f /var/log/cron"),(0,o.Uk)("（如果发现任务不执行，可以来这里盯着日志看）")],-1),s=(0,o.uE)('<h2 id="crontab-权限问题" tabindex="-1"><a class="header-anchor" href="#crontab-权限问题" aria-hidden="true">#</a> Crontab 权限问题</h2><ul><li>一般默认只有 root 用户可以使用</li><li>如果要指定某个用户可以使用，可以在 /etc/cron.allow 添加（不存在文件就创建一个）</li><li>如果要指定某个用户不可以使用，可以在 /etc/cron.deny 添加（不存在文件就创建一个）</li><li>如果一个用户同时在两个文件都存在，那则以 allow 为准</li></ul><h2 id="crontab-不执行" tabindex="-1"><a class="header-anchor" href="#crontab-不执行" aria-hidden="true">#</a> Crontab 不执行</h2><ul><li>Crontab 不执行原因有很多，可以 Google 搜索：<code>Crontab 不执行</code>，这里不多说。</li></ul><h2 id="crontab-资料" tabindex="-1"><a class="header-anchor" href="#crontab-资料" aria-hidden="true">#</a> Crontab 资料</h2>',5),h={href:"http://www.imooc.com/video/4498",target:"_blank",rel:"noopener noreferrer"},u=(0,o.Uk)("http://www.imooc.com/video/4498"),p={href:"http://www.centoscn.com/image-text/config/2015/0901/6096.html",target:"_blank",rel:"noopener noreferrer"},b=(0,o.Uk)("http://www.centoscn.com/image-text/config/2015/0901/6096.html"),m={},g=(0,r(83744).Z)(m,[["render",function(e,t){const r=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[l,(0,o._)("ul",null,[a,(0,o._)("li",null,[i,(0,o._)("a",c,[n,(0,o.Wm)(r)])]),d]),s,(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("a",h,[u,(0,o.Wm)(r)])]),(0,o._)("li",null,[(0,o._)("a",p,[b,(0,o.Wm)(r)])])])])}]])}}]);