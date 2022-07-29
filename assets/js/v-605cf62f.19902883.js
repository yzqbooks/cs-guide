"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[67041],{72625:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-605cf62f","path":"/linux-tutor/server/SSH-login-without-password.html","title":"SSH 免密登录","lang":"zh-CN","frontmatter":{"summary":"SSH 免密登录 环境说明 CentOS 7.3; 关键点 免密登录的关键点在于理解谁登录谁。; A 生成的公钥给 B，也给 C、D，则 A 可以直接免密 SSH 登录 B、C、D; A 生成密钥 在 A 机器上输入命令：ssh-keygen; 根据提示回车，共有三次交互提示，都回车即可。; 生成的密钥目录在：/root/.ssh; 写入：cat /root","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/linux-tutor/server/SSH-login-without-password.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"SSH 免密登录"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-27T01:37:35.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-05-27T01:37:35.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"环境说明","slug":"环境说明","children":[]},{"level":2,"title":"关键点","slug":"关键点","children":[]},{"level":2,"title":"A 生成密钥","slug":"a-生成密钥","children":[]},{"level":2,"title":"把 A 的公钥发给 B","slug":"把-a-的公钥发给-b","children":[]},{"level":2,"title":"测试 A 免密登录到 B","slug":"测试-a-免密登录到-b","children":[]},{"level":2,"title":"如果是用 pem 登录的话，用 ssh-copy-id 是无法使用的","slug":"如果是用-pem-登录的话-用-ssh-copy-id-是无法使用的","children":[]}],"git":{"createdTime":1653615455000,"updatedTime":1653615455000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":0.98,"words":293},"filePathRelative":"linux-tutor/server/SSH-login-without-password.md","localizedDate":"2022年5月27日"}')},77176:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var o=i(66252);const a=[(0,o.uE)('<h1 id="ssh-免密登录" tabindex="-1"><a class="header-anchor" href="#ssh-免密登录" aria-hidden="true">#</a> SSH 免密登录</h1><h2 id="环境说明" tabindex="-1"><a class="header-anchor" href="#环境说明" aria-hidden="true">#</a> 环境说明</h2><ul><li>CentOS 7.3</li></ul><h2 id="关键点" tabindex="-1"><a class="header-anchor" href="#关键点" aria-hidden="true">#</a> 关键点</h2><ul><li>免密登录的关键点在于理解谁登录谁。</li><li>A 生成的公钥给 B，也给 C、D，则 A 可以直接免密 SSH 登录 B、C、D</li></ul><h2 id="a-生成密钥" tabindex="-1"><a class="header-anchor" href="#a-生成密钥" aria-hidden="true">#</a> A 生成密钥</h2><ul><li>在 A 机器上输入命令：<code>ssh-keygen</code><ul><li>根据提示回车，共有三次交互提示，都回车即可。</li></ul></li><li>生成的密钥目录在：<strong>/root/.ssh</strong></li><li>写入：<code>cat /root/.ssh/id_rsa.pub &gt;&gt; /root/.ssh/authorized_keys</code></li><li>测试：<code>ssh localhost</code></li></ul><h2 id="把-a-的公钥发给-b" tabindex="-1"><a class="header-anchor" href="#把-a-的公钥发给-b" aria-hidden="true">#</a> 把 A 的公钥发给 B</h2><ul><li>假设 B 机器的 ip：<code>192.168.1.105</code></li><li>则在 A 机器上输入：<code>ssh-copy-id -i /root/.ssh/id_rsa.pub -p 22 root@192.168.1.105</code>，根据提示输入 B 机器的 root 密码，成功会有相应提示</li></ul><h2 id="测试-a-免密登录到-b" tabindex="-1"><a class="header-anchor" href="#测试-a-免密登录到-b" aria-hidden="true">#</a> 测试 A 免密登录到 B</h2><ul><li>在 A 机器上输入命令：<code>ssh -p 22 root@192.168.1.105</code>，则会相应登录成功的提示</li></ul><hr><h2 id="如果是用-pem-登录的话-用-ssh-copy-id-是无法使用的" tabindex="-1"><a class="header-anchor" href="#如果是用-pem-登录的话-用-ssh-copy-id-是无法使用的" aria-hidden="true">#</a> 如果是用 pem 登录的话，用 ssh-copy-id 是无法使用的</h2><ul><li>先保存 A 的 pub 到本地：<code>sz /root/.ssh/id_rsa.pub</code></li><li>登录 B 机子：<code>cd /root/.ssh/</code></li><li>如果 B 机子没有 authorized_keys 文件则创建：<code>touch /root/.ssh/authorized_keys</code><ul><li>设置权限：<code>chmod 600 /root/.ssh/authorized_keys </code></li></ul></li><li>上传 pub 文件到 B 机子，并在 B 机子上执行：<code>cd /root/.ssh/ &amp;&amp; cat id_rsa.pub &gt;&gt; authorized_keys</code></li></ul>',14)],r={},l=(0,i(83744).Z)(r,[["render",function(e,t){return(0,o.wg)(),(0,o.iD)("div",null,a)}]])}}]);