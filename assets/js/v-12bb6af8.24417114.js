"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[757],{1298:(i,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-12bb6af8",path:"/pages/649f19/",title:"axios",lang:"en-US",frontmatter:{title:"axios",date:"2021-11-25T14:02:11.000Z",permalink:"/pages/649f19/",categories:["web","axios"],tags:[null]},excerpt:"",headers:[{level:2,title:"axois 和 Axios 的关系",slug:"axois-和-axios-的关系",children:[]},{level:2,title:"axois 和 instance 的区别",slug:"axois-和-instance-的区别",children:[]}],filePathRelative:"web/axios/axios.md",git:{updatedTime:163912863e4,contributors:[{name:"liu",email:"shellingfordly@qq.com",commits:1}]}}},4249:(i,a,e)=>{e.r(a),e.d(a,{default:()=>l});const s=(0,e(6252).uE)('<h1 id="axois" tabindex="-1"><a class="header-anchor" href="#axois" aria-hidden="true">#</a> axois</h1><h2 id="axois-和-axios-的关系" tabindex="-1"><a class="header-anchor" href="#axois-和-axios-的关系" aria-hidden="true">#</a> axois 和 Axios 的关系</h2><ol><li>从语法上来说 axios 不是 Axios 的实例</li></ol><p>axios 是通过 createInstance 函数返回的对象，createInstance 内部将 Axios.prototype.request 对象复制给了 axios，并将一个 Axios 创建的实例 context 也复制给了 axios</p><ol start="2"><li>从功能上来说，axios 是 Axios 的实例</li></ol><p>因为 axios 拥有 Axios 实例的所有 属性和方法</p><ol start="3"><li>axios 是 Axios.prototype.request 函数通过执行 bind()返回的函数</li></ol><h2 id="axois-和-instance-的区别" tabindex="-1"><a class="header-anchor" href="#axois-和-instance-的区别" aria-hidden="true">#</a> axois 和 instance 的区别</h2><ol><li><p>相同点</p><ul><li>都是通过 createInstance 函数返回的</li><li>都有 Axios 实例的所有 属性和方法</li></ul></li><li><p>不同点</p><ul><li>默认配置能不一样</li><li>instance 没有后续为 axios 上添加的属性和方法 <ul><li>比如 create、CancelToken、all</li></ul></li></ul></li></ol>',9),o={},l=(0,e(3744).Z)(o,[["render",function(i,a){return s}]])},3744:(i,a)=>{a.Z=(i,a)=>{const e=i.__vccOpts||i;for(const[i,s]of a)e[i]=s;return e}}}]);