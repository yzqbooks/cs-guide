"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[20033],{76305:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e=JSON.parse('{"key":"v-186a92f0","path":"/java-tutor/springboot/annotation-tips.html","title":"注解的作用","lang":"zh-CN","frontmatter":{"summary":"注解的作用 本文打算介绍几个不太容易说出其区别，或者用途的 Spring 注解，比如 @Component 与 @Bean 的比较，@ControllerAdvice 是如何处理自定义异常的等等。 Spring 中的一些注解 1. @Component 和 @Bean 的区别是什么？ 1. 作用对象不同：@Component 注解作用于类，而 @Bean 注","head":[["meta",{"property":"og:url","content":"https://yzqdev.github.io/cs-guide/cs-guide/java-tutor/springboot/annotation-tips.html"}],["meta",{"property":"og:site_name","content":"cs-guide"}],["meta",{"property":"og:title","content":"注解的作用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://yzqdev.github.io/cs-guide/cs-guide/"}],["meta",{"property":"og:updated_time","content":"2022-04-30T13:35:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"注解的作用"}],["meta",{"property":"article:modified_time","content":"2022-04-30T13:35:48.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Spring 中的一些注解","slug":"spring-中的一些注解","children":[{"level":3,"title":"1. @Component 和 @Bean 的区别是什么？","slug":"_1-component-和-bean-的区别是什么","children":[]},{"level":3,"title":"2. Autowire 和 @Resource 的区别","slug":"_2-autowire-和-resource-的区别","children":[]},{"level":3,"title":"3. 将一个类声明为 Spring 的 bean 的注解有哪些？","slug":"_3-将一个类声明为-spring-的-bean-的注解有哪些","children":[]},{"level":3,"title":"4. @Configuration ：配置类注解","slug":"_4-configuration-配置类注解","children":[]},{"level":3,"title":"5. @ControllerAdvice ：处理全局异常利器","slug":"_5-controlleradvice-处理全局异常利器","children":[]},{"level":3,"title":"6. @Component, @Repository, @Service 的区别","slug":"_6-component-repository-service-的区别","children":[]}]}],"git":{"createdTime":1650858636000,"updatedTime":1651325748000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":2}]},"readingTime":{"minutes":6.08,"words":1823},"filePathRelative":"java-tutor/springboot/annotation-tips.md","localizedDate":"2022年4月25日"}')},30841:(n,a,s)=>{s.r(a),s.d(a,{default:()=>z});var e=s(66252);const t=s.p+"assets/img/image.72e34b00.png",o=(0,e.uE)('<h1 id="注解的作用" tabindex="-1"><a class="header-anchor" href="#注解的作用" aria-hidden="true">#</a> 注解的作用</h1><p>本文打算介绍几个不太容易说出其区别，或者用途的 Spring 注解，比如 @Component 与 @Bean 的比较，@ControllerAdvice 是如何处理自定义异常的等等。</p><h2 id="spring-中的一些注解" tabindex="-1"><a class="header-anchor" href="#spring-中的一些注解" aria-hidden="true">#</a> <strong>Spring 中的一些注解</strong></h2><h3 id="_1-component-和-bean-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_1-component-和-bean-的区别是什么" aria-hidden="true">#</a> <strong>1. @Component 和 @Bean 的区别是什么？</strong></h3><ol><li>作用对象不同：@Component 注解作用于类，而 @Bean 注解作用于方法、</li><li>@Component 通常是通过路径扫描来自动侦测以及自动装配到 Spring 容器中(我们可以使用 @ComponentScan 注解定义要扫描的路径从中找出标识了需要装配的类自动装配到 Spring 的 bean 容器中)。@Bean 注解通常是我们在标有该注解的方法中定义产生这个 bean，@Bean 告诉了 Spring 这是某个类的实例，当我们需要用它的时候还给我。</li><li>@Bean 注解比 @Component 注解的自定义性更强，而且很多地方我们只能通过 @Bean 注解来注册 bean。比如当我们引用第三方库中的类需要装配到 Spring 容器时，只能通过 @Bean 来实现。</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span> <span class="token comment">//注解使用示例：</span>\n<span class="token annotation punctuation">@Configuration</span> <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>     \n    <span class="token annotation punctuation">@Bean</span> <span class="token keyword">public</span> <span class="token class-name">TransferService</span> <span class="token function">transferService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TransferServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token punctuation">}</span> <span class="token punctuation">}</span> \n<span class="token annotation punctuation">@Component</span> <span class="token comment">//注解使用示例：</span>\n<span class="token annotation punctuation">@Component</span> <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">AService</span> <span class="token punctuation">{</span>     <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span> \n<span class="token comment">//下面这个例子是通过 </span>\n<span class="token annotation punctuation">@Component</span> \n<span class="token comment">//无法实现的：</span>\n<span class="token annotation punctuation">@Bean</span> <span class="token keyword">public</span> <span class="token class-name">OneService</span> <span class="token function">getService</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">case</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span>  <span class="token punctuation">{</span> when <span class="token number">1</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">serviceImpl1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> when <span class="token number">2</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">serviceImpl2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> when <span class="token number">3</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">serviceImpl3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token punctuation">}</span> <span class="token punctuation">}</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',6),p={id:"_2-autowire-和-resource-的区别",tabindex:"-1"},c=(0,e._)("a",{class:"header-anchor",href:"#_2-autowire-和-resource-的区别","aria-hidden":"true"},"#",-1),i=(0,e.Uk)(),l={href:"https://mp.weixin.qq.com/s?__biz=MzUyNDc0NjM0Nw==&mid=2247492574&idx=2&sn=f27a39ad8bf4540785d08d7d4be889df&chksm=fa2a08dacd5d81cc3b043fcf01b6b0d9f12e0ed43f02a97c0941c5d325d989c6af5fb0276dc7&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("2. Autowire 和 @Resource 的区别"),u=(0,e.Uk)("@Autowire 和 @Resource都可以用来装配bean，都可以用于字段或setter方法。"),d={href:"https://mp.weixin.qq.com/s?__biz=MzUyNDc0NjM0Nw==&mid=2247492574&idx=2&sn=f27a39ad8bf4540785d08d7d4be889df&chksm=fa2a08dacd5d81cc3b043fcf01b6b0d9f12e0ed43f02a97c0941c5d325d989c6af5fb0276dc7&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("Spring Boot 学习笔记"),m=(0,e.Uk)("分享给你。"),g=(0,e._)("li",null,"@Autowire 默认按类型装配，默认情况下必须要求依赖对象必须存在，如果要允许 null 值，可以设置它的 required 属性为 false。",-1),v=(0,e._)("li",null,"@Resource 默认按名称装配，当找不到与名称匹配的 bean 时才按照类型进行装配。名称可以通过 name 属性指定，如果没有指定 name 属性，当注解写在字段上时，默认取字段名，当注解写在 setter 方法上时，默认取属性名进行装配。",-1),b=(0,e.uE)('<p>注意：如果 name 属性一旦指定，就只会按照名称进行装配。 @Autowire和@Qualifier配合使用效果和@Resource一样： @Autowired(required = false) @Qualifier(&quot;example&quot;) private Example example; @Resource(name = &quot;example&quot;) private Example example; @Resource 装配顺序</p><ol><li>如果同时指定 name 和 type，则从容器中查找唯一匹配的 bean 装配，找不到则抛出异常；</li><li>如果指定 name 属性，则从容器中查找名称匹配的 bean 装配，找不到则抛出异常；</li><li>如果指定 type 属性，则从容器中查找类型唯一匹配的 bean 装配，找不到或者找到多个抛出异常；</li><li>如果不指定，则自动按照 byName 方式装配，如果没有匹配，则回退一个原始类型进行匹配，如果匹配则自动装配。</li></ol><h3 id="_3-将一个类声明为-spring-的-bean-的注解有哪些" tabindex="-1"><a class="header-anchor" href="#_3-将一个类声明为-spring-的-bean-的注解有哪些" aria-hidden="true">#</a> <strong>3. 将一个类声明为 Spring 的 bean 的注解有哪些？</strong></h3><ul><li>@Component ：通用的注解，可标注任意类为 Spring 的组件。如果一个 Bean 不知道属于哪个层，可以使用 @Component 注解标注。</li><li>@Repository ：对应持久层即 Dao 层，主要用于数据库相关操作。</li><li>@Service ：对应服务层，主要设计一些复杂的逻辑，需要用到 Dao 层。</li><li>@Controller ：对应 Spring MVC 控制层，主要用来接受用户请求并调用 Service 层返回数据给前端页面。</li><li>@Configuration ：声明该类为一个配置类，可以在此类中声明一个或多个 @Bean 方法。</li></ul><h3 id="_4-configuration-配置类注解" tabindex="-1"><a class="header-anchor" href="#_4-configuration-配置类注解" aria-hidden="true">#</a> <strong>4. @Configuration ：配置类注解</strong></h3><p>@Configuration 表明在一个类里可以声明一个或多个 @Bean 方法，并且可以由 Spring 容器处理，以便在运行时为这些 bean 生成 bean 定义和服务请求，例如：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span> <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>     <span class="token annotation punctuation">@Bean</span> <span class="token keyword">public</span> <span class="token class-name">MyBean</span> <span class="token function">myBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// instantiate, configure and return bean ...     } }</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以通过 AnnotationConfigApplicationContext 来注册 @Configuration 类：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">AnnotationConfigApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ctx<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">AppConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ctx<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token class-name">MyBean</span> myBean <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">MyBean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// use myBean ...</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另外也可以通过组件扫描(component scanning)来加载，@Configuration 使用 @Component 进行原注解，因此 @Configuration 类也可以被组件扫描到(特别是使用 XML 的 元素)。@Configuration 类不仅可以使用组件扫描进行引导，还可以使用 @ComponentScan 注解自行配置组件扫描： @Configuration @ComponentScan(&quot;com.acme.app.services&quot;) public class AppConfig { // various @Bean definitions ... } <strong>使用 @Configuration 的约束：</strong></p><ul><li>配置类必须以类的方式提供(比如不能是由工厂方法返回的实例)。</li><li>配置类必须是非 final 的。</li><li>配置类必须是非本地的(即可能不在方法中声明)，native 标注的方法。</li><li>任何嵌套的配置类必须声明为 static。</li><li>@Bean 方法可能不会反过来创建更多的配置类。</li></ul>',11),f=(0,e.Uk)("除了单独使用 @Configuration 注解，我们还可以结合一些外部的 bean 或者注解共同使用，比如 Environment API，@PropertySource，@Value，@Profile 等等许多，这里就不做详细介绍了，更多的用法可以参看 Spring @Configuration 的相关文档 。 推荐一个 Spring Boot 基础教程及实战示例："),h={href:"https://github.com/javastacks/spring-boot-best-practice",target:"_blank",rel:"noopener noreferrer"},C=(0,e.Uk)("https://github.com/javastacks/spring-boot-best-practice"),y=(0,e._)("h3",{id:"_5-controlleradvice-处理全局异常利器",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#_5-controlleradvice-处理全局异常利器","aria-hidden":"true"},"#"),(0,e.Uk)(),(0,e._)("strong",null,"5. @ControllerAdvice ：处理全局异常利器")],-1),_=(0,e.Uk)("在 Spring 3.2 中，新增了 @ControllerAdvice、@RestControllerAdvice、@RestController 注解，可以用于定义 @ExceptionHandler、@InitBinder、@ModelAttribute，并应用到所有 @RequestMapping 、@PostMapping、@GetMapping等这些 Controller 层的注解中。 默认情况下，@ControllerAdvice 中的方法应用于全局所有的 Controller。而使用选择器 annotations()，basePackageClasses() 和 basePackages() (或其别名value())来定义更小范围的目标 Controller 子集。"),w={href:"https://mp.weixin.qq.com/s?__biz=MzUyNDc0NjM0Nw==&mid=2247492574&idx=2&sn=f27a39ad8bf4540785d08d7d4be889df&chksm=fa2a08dacd5d81cc3b043fcf01b6b0d9f12e0ed43f02a97c0941c5d325d989c6af5fb0276dc7&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},S=(0,e.Uk)("Spring Boot 学习笔记"),x=(0,e.Uk)("分享给你。 如果声明了多个选择器，则应用 OR 逻辑，这意味着所选的控制器应匹配至少一个选择器。请注意，选择器检查是在运行时执行的，因此添加许多选择器可能会对性能产生负面影响并增加复杂性。 @ControllerAdvice 我们最常使用的是结合 @ExceptionHandler 用于全局异常的处理。可以结合以下例子，我们可以捕获自定义的异常进行处"),B={href:"https://mp.weixin.qq.com/s?__biz=MzUyNDc0NjM0Nw==&mid=2247492574&idx=2&sn=f27a39ad8bf4540785d08d7d4be889df&chksm=fa2a08dacd5d81cc3b043fcf01b6b0d9f12e0ed43f02a97c0941c5d325d989c6af5fb0276dc7&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},A=(0,e.Uk)("理，并且可以自定义状态码返回："),q=(0,e.uE)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@ControllerAdvice</span><span class="token punctuation">(</span><span class="token string">&quot;com.developlee.errorhandle&quot;</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyExceptionHandler</span> <span class="token punctuation">{</span>     <span class="token doc-comment comment">/**      * 捕获CustomException      * @param e      * @return json格式类型      */</span>     \n<span class="token annotation punctuation">@ResponseBody</span>     \n<span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">CustomException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//指定拦截异常的类型 </span>\n\n<span class="token annotation punctuation">@ResponseStatus</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span>INTERNAL_SERVER_ERROR<span class="token punctuation">)</span> <span class="token comment">//自定义浏览器返回状态码     </span>\n<span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token operator">&gt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token operator">&lt;</span> <span class="token function">customExceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">CustomException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>     \n        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> map<span class="token punctuation">;</span>\n <span class="token punctuation">}</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),j=(0,e.Uk)("更多信息可以参看 Spring @ControllerAdvice 的官方文档。推荐一个 Spring Boot 基础教程及实战示例："),R={href:"https://link.zhihu.com/?target=https%3A//github.com/javastacks/spring-boot-best-practice",target:"_blank",rel:"noopener noreferrer"},M=(0,e.Uk)("https://github.com/javastacks/spring-boot-best-practice"),U=(0,e._)("h3",{id:"_6-component-repository-service-的区别",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#_6-component-repository-service-的区别","aria-hidden":"true"},"#"),(0,e.Uk)(),(0,e._)("strong",null,"6. @Component, @Repository, @Service 的区别")],-1),E=(0,e._)("p",null,[(0,e._)("img",{src:t,alt:"image.png",loading:"lazy"}),(0,e.Uk)(" @Component是一个通用的Spring容器管理的单例bean组件。而@Repository, @Service, @Controller就是针对不同的使用场景所采取的特定功能化的注解组件。 因此，当你的一个类被@Component所注解，那么就意味着同样可以用@Repository, @Service, @Controller 来替代它，同时这些注解会具备有更多的功能，而且功能各异。 最后，如果你不知道要在项目的业务层采用@Service还是@Component注解。那么，@Service是一个更好的选择。")],-1),N={},z=(0,s(83744).Z)(N,[["render",function(n,a){const s=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[o,(0,e._)("h3",p,[c,i,(0,e._)("a",l,[r,(0,e.Wm)(s)])]),(0,e._)("ol",null,[(0,e._)("li",null,[u,(0,e._)("a",d,[k,(0,e.Wm)(s)]),m]),g,v]),b,(0,e._)("p",null,[f,(0,e._)("a",h,[C,(0,e.Wm)(s)])]),y,(0,e._)("p",null,[_,(0,e._)("a",w,[S,(0,e.Wm)(s)]),x,(0,e._)("a",B,[A,(0,e.Wm)(s)])]),q,(0,e._)("p",null,[j,(0,e._)("a",R,[M,(0,e.Wm)(s)])]),U,E])}]])}}]);