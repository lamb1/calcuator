webpackJsonp([1],{"6xkH":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},c,!1,function(t){a("6xkH")},null,null).exports,r=a("/ocq"),l={name:"Index",data:function(){return{num:[],active:null,data:[""],operater:[]}},components:{},computed:{},mounted:function(){for(var t=1;t<=9;t++)this.num.push(t);this.num.push("%"),this.num.push(0),this.num.push(".")},methods:{checkNum:function(t){var e=this;switch(e.active=t,t){case"delete":e.data[e.data.length-1]=e.data[e.data.length-1].substr(0,e.data[e.data.length-1].length-1);break;case"-":""==e.data[e.data.length-1]?e.operater[e.operater.length-1]="－":e.operater[e.operater.length]="－",e.data[e.data.length]="";break;case"+":""==e.data[e.data.length-1]?(console.log(e.operater),console.log(e.operater.length),e.operater[e.operater.length-1]="＋"):(console.log(e.operater.length),e.operater[e.operater.length]="＋",console.log(e.operater)),e.data[e.data.length]="";break;case"÷":""==e.data[e.data.length-1]?e.operater[e.operater.length-1]="÷":e.operater[e.operater.length]="÷",e.data[e.data.length]="";break;case"×":""==e.data[e.data.length-1]?e.operater[e.operater.length-1]="×":e.operater[e.operater.length]="×",e.data[e.data.length]="";break;case"=":e.operater="",e.data[e.data.length]="";break;case"c":e.data=[""],e.operater=[];break;case"%":break;default:void 0==e.data[e.data.length-1]&&(e.data[e.data.length-1]=""),e.data[e.data.length-1]+=String(t)}setTimeout(function(){e.active=null},150)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"calculator"},[a("div",{staticClass:"whiteboard"},[a("div",{staticClass:"data"},t._l(t.data,function(e){return a("p",[t._v(t._s(e))])})),t._v(" "),a("div",{staticClass:"operater"},t._l(t.operater,function(e){return a("p",[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"bottom"},[a("div",{staticClass:"operator"},[a("ul",[a("li",{class:{on:"c"==t.active},on:{click:function(e){t.checkNum("c")}}},[t._v("c")]),t._v(" "),a("li",{class:{on:"÷"==t.active},on:{click:function(e){t.checkNum("÷")}}},[t._v("÷")]),t._v(" "),a("li",{class:{on:"×"==t.active},on:{click:function(e){t.checkNum("×")}}},[t._v("×")])])]),t._v(" "),a("div",{staticClass:"operator2"},[a("ul",[a("li",{staticClass:"delete",class:{on:"delete"==t.active},on:{click:function(e){t.checkNum("delete")}}}),t._v(" "),a("li",{class:{on:"+"==t.active},on:{click:function(e){t.checkNum("+")}}},[t._v("＋")]),t._v(" "),a("li",{class:{on:"-"==t.active},on:{click:function(e){t.checkNum("-")}}},[t._v("－")]),t._v(" "),a("li",{class:{on:"="==t.active},on:{click:function(e){t.checkNum("=")}}},[t._v("＝")])])]),t._v(" "),a("div",{staticClass:"num"},[a("ul",t._l(t.num,function(e){return a("li",{class:{on:t.active==e},on:{click:function(a){t.checkNum(e)}}},[t._v(t._s(e))])}))])])])])},staticRenderFns:[]};var s=a("VU/8")(l,i,!1,function(t){a("vNE2")},null,null).exports;n.default.use(r.a);var u=new r.a({routes:[{path:"/",name:"Index",component:s}]}),d=a("/IwO"),p=a.n(d);a("n4oI");n.default.use(p.a),p.a.initAMapApiLoader({key:"6bb7824c2c3c11bcb40a31d118556fbc",plugin:[""]}),n.default.config.productionTip=!1,new n.default({el:"#app",router:u,components:{App:o},template:"<App/>"})},n4oI:function(t,e){},vNE2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1211f09f7a1fa12d54e8.js.map