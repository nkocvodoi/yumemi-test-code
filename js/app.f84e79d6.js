(function(e){function t(t){for(var n,o,i=t[0],u=t[1],s=t[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"457f":function(e,t,r){},8506:function(e,t,r){e.exports={prefSelectBox:"PopulationChart_prefSelectBox_2heY-",citySelectBox:"PopulationChart_citySelectBox_3gwtc"}},"89a5":function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a=r("a306");function c(e,t,r,a,c,o){var i=Object(n["resolveComponent"])("PopulationChart");return Object(n["openBlock"])(),Object(n["createBlock"])(i,{msg:"Yumemi Code Test"})}var o=r("bee2"),i=r("d4ec"),u=r("262e"),s=r("2caf"),l=r("9ab4"),p=r("ce1f"),f=r("1da1"),d=(r("96cf"),{class:"population"}),h={key:1};function b(e,t,r,a,c,o){var i=Object(n["resolveComponent"])("Multiselect"),u=Object(n["resolveComponent"])("BarChart");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",d,[Object(n["createElementVNode"])("h1",null,Object(n["toDisplayString"])(e.msg),1),Object(n["createVNode"])(i,{class:Object(n["normalizeClass"])(e.$style.prefSelectBox),modelValue:e.selectedPref,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.selectedPref=t}),placeholder:"Choose a Prefecture",label:"name","filter-results":!1,"min-chars":1,"resolve-on-load":!1,delay:0,searchable:!0,options:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.filteringPrefectures(r));case 1:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()},null,8,["class","modelValue","options"]),e.cities.length>0?(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:0,class:Object(n["normalizeClass"])(e.$style.citySelectBox),modelValue:e.selectedCity,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.selectedCity=t}),placeholder:"Choose a City",label:"name","filter-results":!1,"min-chars":1,"resolve-on-load":!1,delay:0,searchable:!0,options:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.filteringCities(r));case 1:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()},null,8,["class","modelValue","options"])):Object(n["createCommentVNode"])("",!0),e.chartData?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h1",h,Object(n["toDisplayString"])(e.chartTitle),1)):Object(n["createCommentVNode"])("",!0),e.chartData?(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:2,options:e.barOpt,chartData:e.chartData},null,8,["options","chartData"])):Object(n["createCommentVNode"])("",!0)])}var m=r("2909"),v=(r("7db0"),r("d3b7"),r("99af"),r("4de4"),r("caad"),r("2532"),r("d81d"),r("1b40")),y=r("bc3a"),g=r.n(y),O=g.a.create({baseURL:"https://opendata.resas-portal.go.jp/api/v1",headers:{"Content-Type":"application/json","X-API-KEY":"INIY9YzZkxTfcbjtbUp3VYtx5TH1bFwUyZIuWBMX",Accept:"*/*"}}),j=O,C=(r("457f"),function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.get("/prefectures");case 3:return t=e.sent,r=[],200==t.status&&(r=t.data.result),e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e["catch"](0),console.log(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()),w=function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.get("/cities",{params:{prefCode:t}});case 3:return r=e.sent,n=[],200==r.status&&(n=r.data.result),e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e["catch"](0),console.log(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.get("/population/composition/perYear",{params:{prefCode:t,cityCode:r}});case 3:return n=e.sent,a=[],200==n.status&&(a=n.data.result.data),e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e["catch"](0),console.log(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}(),P=r("b48c"),x=r("9b4a");x["Chart"].register.apply(x["Chart"],Object(m["a"])(x["registerables"]));var B=function(e){Object(u["a"])(r,e);var t=Object(s["a"])(r);function r(){var e;return Object(i["a"])(this,r),e=t.apply(this,arguments),e.prefectures=[],e.cities=[],e.populationData=null,e.selectedPref=0,e.selectedPrefName="",e.selectedCityName="",e.selectedCity="",e.chartTitle="",e.barOpt={scales:{y:{beginAtZero:!0}}},e.colorPallete=["#00429d","#1e4da2","#2e59a8","#3b65ad","#4771b2","#527db8","#5d8abd","#6896c2","#73a2c6","#7eafcb","#8abccf","#97c8d4","#a5d5d8","#b4e1db"],e}return Object(o["a"])(r,[{key:"onChangeSelectedPref",value:function(){var e=this;this.selectedCity="",this.cities=[],this.selectedPref&&0!=this.selectedPref&&(this.selectedPrefName=this.prefectures.find((function(t){return t.prefCode===e.selectedPref})).prefName,this.getCities())}},{key:"onChangeselectedCity",value:function(){var e=this;this.populationData=null,this.selectedCity&&""!=this.selectedCity&&(this.selectedCityName="",this.selectedCityName=this.cities.find((function(t){return t.cityCode===e.selectedCity})).cityName,this.getChartData()),this.chartTitle="Population of ".concat(this.selectedPrefName,", ").concat(this.selectedCityName)}},{key:"mounted",value:function(){this.getPrefectures()}},{key:"filteringPrefectures",value:function(e){var t=[],r=this.prefectures.filter((function(t){return t.prefName.includes(e)}));return r&&(t=r.map((function(e){return{value:e.prefCode,name:e.prefName}}))),t}},{key:"filteringCities",value:function(e){var t=[],r=this.cities.filter((function(t){return t.cityName.includes(e)}));return r&&(t=r.map((function(e){return{value:e.cityCode,name:e.cityName}}))),t}},{key:"chartData",get:function(){if(this.populationData){var e=this.populationData[0].data.map((function(e){return e.year})),t=this.populationData[0].data.map((function(e){return e.value})),r=this.populationData[1].data.map((function(e){return e.value})),n=this.populationData[2].data.map((function(e){return e.value})),a=this.populationData[3].data.map((function(e){return e.value})),c={labels:e,datasets:[{label:"Total",data:t,backgroundColor:this.colorPallete},{label:"Young",data:r,backgroundColor:this.colorPallete},{label:"Working-age",data:n,backgroundColor:this.colorPallete},{label:"Aged",data:a,backgroundColor:this.colorPallete}]};return c}return null}},{key:"getPrefectures",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:this.prefectures=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getCities",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w(this.selectedPref);case 2:this.cities=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getChartData",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k(this.selectedPref,this.selectedCity);case 2:this.populationData=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(p["b"]);Object(l["a"])([Object(v["a"])("selectedPref")],B.prototype,"onChangeSelectedPref",null),Object(l["a"])([Object(v["a"])("selectedCity")],B.prototype,"onChangeselectedCity",null),B=Object(l["a"])([Object(p["a"])({props:{msg:String},components:{Multiselect:a["a"],BarChart:P["BarChart"]},watch:{}})],B);var D=B,N=(r("d742"),r("f907")),R=r("6b0d"),S=r.n(R);const _={};_["$style"]=N["default"];const V=S()(D,[["render",b],["__cssModules",_],["__scopeId","data-v-4ddcaed7"]]);var T=V,M=function(e){Object(u["a"])(r,e);var t=Object(s["a"])(r);function r(){return Object(i["a"])(this,r),t.apply(this,arguments)}return Object(o["a"])(r)}(p["b"]);M=Object(l["a"])([Object(p["a"])({components:{PopulationChart:T}})],M);var Y=M;r("faf8");const A=S()(Y,[["render",c]]);var I=A,U=Object(n["createApp"])(I);U.component("v-select",a["a"]),U.mount("#app")},f907:function(e,t,r){"use strict";var n=r("8506"),a=r.n(n);r.d(t,"default",(function(){return a.a}))},faf8:function(e,t,r){"use strict";r("89a5")}});
//# sourceMappingURL=app.f84e79d6.js.map