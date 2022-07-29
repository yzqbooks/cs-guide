"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[30444],{45944:(e,l,i)=>{i.r(l),i.d(l,{data:()=>a});const a=JSON.parse('{"key":"v-41d06c8c","path":"/linux-tutor/server/kali-linux-settings/kali-linux-penetration-test.html","title":"渗透测试思路","lang":"zh-CN","frontmatter":{"summary":"渗透测试思路 来源：《Kali Linux 渗透测试的艺术》; 范围界定 收集需求; 筹划工作; 边界分析; 明确业务指标; 项目管理和统筹调度; 信息收集 互联网上的公开信息; 域名注册信息（whois）; DNS 记录分析; 路由信息; 利用搜索引擎搜索目标历史记录; Google Hack，根据 Google 的 inurl 等高级用法查询一些系统可能","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/linux-tutor/server/kali-linux-settings/kali-linux-penetration-test.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"渗透测试思路"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-27T01:37:35.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-05-27T01:37:35.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"范围界定","slug":"范围界定","children":[]},{"level":2,"title":"信息收集","slug":"信息收集","children":[]},{"level":2,"title":"目标识别","slug":"目标识别","children":[]},{"level":2,"title":"服务枚举","slug":"服务枚举","children":[]},{"level":2,"title":"漏洞扫描","slug":"漏洞扫描","children":[]},{"level":2,"title":"漏洞利用","slug":"漏洞利用","children":[]},{"level":2,"title":"社会工程学攻击","slug":"社会工程学攻击","children":[]},{"level":2,"title":"提升权限","slug":"提升权限","children":[]},{"level":2,"title":"密码攻击","slug":"密码攻击","children":[]},{"level":2,"title":"无线网络渗透测试","slug":"无线网络渗透测试","children":[]},{"level":2,"title":"访问维护","slug":"访问维护","children":[]}],"git":{"createdTime":1653615455000,"updatedTime":1653615455000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":0.98,"words":295},"filePathRelative":"linux-tutor/server/kali-linux-settings/kali-linux-penetration-test.md","localizedDate":"2022年5月27日"}')},93416:(e,l,i)=>{i.r(l),i.d(l,{default:()=>d});var a=i(66252);const t=[(0,a.uE)('<h1 id="渗透测试思路" tabindex="-1"><a class="header-anchor" href="#渗透测试思路" aria-hidden="true">#</a> 渗透测试思路</h1><ul><li>来源：《Kali Linux 渗透测试的艺术》</li></ul><h2 id="范围界定" tabindex="-1"><a class="header-anchor" href="#范围界定" aria-hidden="true">#</a> 范围界定</h2><ul><li>收集需求</li><li>筹划工作</li><li>边界分析</li><li>明确业务指标</li><li>项目管理和统筹调度</li></ul><h2 id="信息收集" tabindex="-1"><a class="header-anchor" href="#信息收集" aria-hidden="true">#</a> 信息收集</h2><ul><li>互联网上的公开信息</li><li>域名注册信息（whois）</li><li>DNS 记录分析</li><li>路由信息</li><li>利用搜索引擎搜索目标历史记录 <ul><li>Google Hack，根据 Google 的 <code>inurl</code> 等高级用法查询一些系统可能存在风险</li><li>比如查找链接是：<code>asp?id=</code>、<code>php?id=1</code> 的链接。asp 和 php 的系统相对比较薄弱。特别是对于 asp 的老系统，建议开发者还是放弃。</li></ul></li></ul><h2 id="目标识别" tabindex="-1"><a class="header-anchor" href="#目标识别" aria-hidden="true">#</a> 目标识别</h2><ul><li>识别目标还在线的主机</li><li>识别目标在线主机的系统</li></ul><h2 id="服务枚举" tabindex="-1"><a class="header-anchor" href="#服务枚举" aria-hidden="true">#</a> 服务枚举</h2><ul><li>获取目标主机的情况 <ul><li>开放的端口</li><li>操作系统</li><li>网络服务</li></ul></li></ul><h2 id="漏洞扫描" tabindex="-1"><a class="header-anchor" href="#漏洞扫描" aria-hidden="true">#</a> 漏洞扫描</h2><ul><li>根据种类划分 <ul><li>本地漏洞</li><li>远程漏洞</li></ul></li><li>根据类型划分 <ul><li>设计类漏洞</li><li>实施类漏洞</li><li>运营类漏洞</li></ul></li></ul><h2 id="漏洞利用" tabindex="-1"><a class="header-anchor" href="#漏洞利用" aria-hidden="true">#</a> 漏洞利用</h2><h2 id="社会工程学攻击" tabindex="-1"><a class="header-anchor" href="#社会工程学攻击" aria-hidden="true">#</a> 社会工程学攻击</h2><ul><li>心理学建模</li><li>社会关系</li></ul><h2 id="提升权限" tabindex="-1"><a class="header-anchor" href="#提升权限" aria-hidden="true">#</a> 提升权限</h2><h2 id="密码攻击" tabindex="-1"><a class="header-anchor" href="#密码攻击" aria-hidden="true">#</a> 密码攻击</h2><h2 id="无线网络渗透测试" tabindex="-1"><a class="header-anchor" href="#无线网络渗透测试" aria-hidden="true">#</a> 无线网络渗透测试</h2><h2 id="访问维护" tabindex="-1"><a class="header-anchor" href="#访问维护" aria-hidden="true">#</a> 访问维护</h2><ul><li>创建后门</li></ul>',20)],r={},d=(0,i(83744).Z)(r,[["render",function(e,l){return(0,a.wg)(),(0,a.iD)("div",null,t)}]])}}]);