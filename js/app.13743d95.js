(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],f=0,d=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0081":function(e,t,n){"use strict";var a=n("38ba"),o=n.n(a);o.a},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"04c9":function(e,t,n){"use strict";var a=n("5135c"),o=n.n(a);o.a},"0bf1":function(e,t,n){},1:function(e,t){},2180:function(e,t,n){},"38ba":function(e,t,n){},"3d78":function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="4678"},4703:function(e,t,n){"use strict";var a=n("3d78"),o=n.n(a);o.a},"5135c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],s=(n("034f"),n("2877")),i={},c=Object(s["a"])(i,o,r,!1,null,null,null),l=c.exports,u=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("ControlBar"),n("div",{staticClass:"map"},[n("div",{staticClass:"switcher"},[n("button",{on:{click:function(t){return e.$store.commit("setMode","default")}}},[e._v(" Default map ")]),n("button",{on:{click:function(t){return e.$store.commit("setMode","opentopo")}}},[e._v("OpenTopo")]),n("button",{on:{click:function(t){return e.$store.commit("setMode","satellite")}}},[e._v(" Satellite ")])]),n("l-map",{ref:"map",attrs:{zoom:e.zoom,center:e.center},on:{mousemove:e.mousemove}},["opentopo"===e.$store.state.mode?n("l-tile-layer",{attrs:{url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",attribution:e.openTopoAttribution}}):e._e(),"default"===e.$store.state.mode?n("l-tile-layer",{attrs:{url:"https://api.mapbox.com/styles/v1/loganw/ckcbhkmuv12421ikdmvzfjctk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibG9nYW53IiwiYSI6IlQzWHJqc3cifQ.KY3j-syHXeYmI69JmLqGqQ",attribution:e.mapboxAttribution}}):e._e(),"satellite"===e.$store.state.mode?n("l-tile-layer",{attrs:{url:"https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.jpg90?access_token=pk.eyJ1IjoibG9nYW53IiwiYSI6IlQzWHJqc3cifQ.KY3j-syHXeYmI69JmLqGqQ",attribution:e.mapboxAttribution}}):e._e(),e.$store.state.trace?n("l-geo-json",{attrs:{geojson:e.$store.state.trace,optionsStyle:function(e){return{color:"#ff73c1",weight:4}}},on:{click:e.click,mouseenter:function(t){e.hovering=!0},mouseleave:function(t){e.hovering=!1}}}):e._e(),e.$store.state.trace?n("l-geo-json",{attrs:{geojson:e.$store.state.trace,optionsStyle:function(t){return"opentopo"===e.$store.state.mode?{color:"black",weight:2}:{color:"#cc1c58",weight:2}}},on:{click:e.click,mouseenter:function(t){e.hovering=!0},mouseleave:function(t){e.hovering=!1}}}):e._e(),e.$store.getters.indexPoint?n("l-circle-marker",{attrs:{"lat-lng":e.$store.getters.indexPoint,radius:6,color:"#ff73c1",fillColor:"black",fillOpacity:1}}):e._e(),e._l(e.$store.getters.pointsWithTimestamp,(function(t){return n("l-circle-marker",{key:t.index,attrs:{"lat-lng":t.point,radius:4,color:"#cc1c58",fillColor:"#ffecd6",fillOpacity:1,weight:2},on:{click:function(n){return e.$store.commit("setIndex",t.index)}}})}))],2)],1)],1)},d=[],m=(n("d81d"),n("fb6a"),n("e11e")),p=n("2699"),b=n("a40a"),j=n("044a"),h=n("ea97"),v=n("595b"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top"},[e._m(0),n("file-reader",{on:{load:function(t){return e.$store.dispatch("processGpx",t)}}}),e.$store.state.filename?n("div",{staticClass:"loaded"},[e.$store.state.filename?n("div",{staticClass:"name"},[e._v(" "+e._s(e.$store.state.filename)+" ")]):e._e(),e.$store.state.featureCollection.length>1?n("div",{staticClass:"features"},[n("select",{attrs:{id:"features",name:"features"},on:{change:e.onchange}},e._l(e.$store.state.featureCollection,(function(t,a){return n("option",{key:"feature_"+a,domProps:{value:a}},[e._v(" "+e._s(t.properties.name||t.properties.id||a)+" ")])})),0)]):e._e(),e.$store.getters.indexPoint?n("PointEditor",{attrs:{point:e.$store.getters.indexPoint,index:e.$store.state.activeIndex}}):n("div",[e._v(" Click on the route line to view an interpolated time or set a time keypoint ")]),n("div",{staticClass:"export-container"},[n("button",{staticClass:"export",on:{click:e.exportGeojson}},[e._v(" Export GPX with timestamps ")])])],1):e._e()],1)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("span",{staticClass:"strong"},[e._v("Linetime")]),e._v(": add timestamps to GPX traces ")])}],x=n("5530"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"selected-point"},[n("div",{staticClass:"index"},[e._v(e._s("Selected point "+e.index))]),e.absoluteDate===e.date?n("div",{staticClass:"time key"},[e._v(" Keypoint: ")]):e.tempDateValue!==Math.floor(e.date)?n("div",{staticClass:"time new"},[e._v(" New keypoint: ")]):n("div",{staticClass:"time interpolated"},[e._v(" Interpolated: ")]),n("datetime",{attrs:{type:"datetime","uses12-hour":!0},model:{value:e.tempDate,callback:function(t){e.tempDate=t},expression:"tempDate"}}),n("div",{class:{"set-time":!0,new:e.tempDateValue!==Math.floor(e.date)&&e.absoluteDate!==e.date}},[n("button",{on:{click:function(t){return e.setTime(e.tempDate)}}},[e._v("Set keypoint")])])],1)},_=[],w=(n("a9e3"),n("859b")),O=(n("d355"),n("c1df")),$=n.n(O),I={name:"PointEditor",components:{Datetime:w["Datetime"]},props:{index:Number,point:Array},data:function(){return{tempDate:null}},mounted:function(){this.tempDate=$()(this.date).toISOString()},computed:{date:function(){return this.$store.getters.getInterpolatedTime(this.index)||$()().valueOf()},absoluteDate:function(){return this.point[2]||!1},tempDateValue:function(){return $()(this.tempDate).valueOf()}},methods:{getInterpolated:function(e){return this.$store.getters.getInterpolatedTime(e)},formatTime:function(e){return $()(e).format("YYYY-MM-DD hh:mm A")},setTime:function(e){var t=$()(e);this.$store.commit("setTimeAtActiveIndex",t.valueOf())}},watch:{date:function(e){this.tempDate=$()(e).toISOString()},index:function(){this.tempDate=$()(this.date).toISOString()}}},C=I,z=(n("0081"),n("cffd"),Object(s["a"])(C,k,_,!1,null,"fd3d0f26",null)),S=z.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"text-reader"},[e._v(" Load GPX file "),n("input",{attrs:{type:"file"},on:{change:e.loadTextFromFile}})])},D=[],P={methods:{loadTextFromFile:function(e){var t=this,n=e.target.files[0],a=new FileReader;a.onload=function(e){return t.$emit("load",{file:n,content:e.target.result})},a.readAsText(n)}}},M=P,A=(n("4703"),Object(s["a"])(M,T,D,!1,null,"c8fbcd4c",null)),F=A.exports,Y=n("21a6"),E=n("e626"),G=n.n(E),L={name:"ControlBar",components:{PointEditor:S,FileReader:F},methods:{exportGeojson:function(){var e=this,t=this.$store.state.trace.geometry.coordinates.map((function(t,n){return[t[0],t[1],e.$store.getters.getInterpolatedTime(n)]})),n=Object(x["a"])(Object(x["a"])({},this.$store.state.trace),{},{geometry:Object(x["a"])(Object(x["a"])({},this.$store.state.trace.geometry),{},{coordinates:t}),properties:Object(x["a"])(Object(x["a"])({},this.$store.state.trace.properties),{},{coordTimes:t.map((function(e){return new Date(e[2]).toISOString()}))})}),a=G()(n),o=new Blob([a],{type:"text/xml"});Object(Y["saveAs"])(o,"output.gpx")},onchange:function(e){this.$store.commit("setTrace",this.$store.state.featureCollection[e.target.value])}}},J=L,q=(n("04c9"),Object(s["a"])(J,g,y,!1,null,"313b90e2",null)),H=q.exports,B={name:"Home",components:{LMap:p["a"],LTileLayer:b["a"],LGeoJson:j["a"],LCircleMarker:h["a"],ControlBar:H},data:function(){return{zoom:5,center:Object(m["latLng"])(39.2152529,-98.5752488),text:"",date:"",hovering:!1,openTopoAttribution:'map data: © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | map style: © <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',mapboxAttribution:'© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'}},methods:{click:function(e){var t=v["point"]([e.latlng.lng,e.latlng.lat]),n=v["featureCollection"](this.$store.state.trace.geometry.coordinates.map((function(e){return v["point"](e)}))),a=v["nearestPoint"](t,n);this.$store.commit("setIndex",a.properties.featureIndex)},mousemove:function(e){if(this.hovering){var t=v["point"]([e.latlng.lng,e.latlng.lat]),n=v["featureCollection"](this.$store.state.trace.geometry.coordinates.map((function(e){return v["point"](e)}))),a=v["nearestPoint"](t,n);this.$store.commit("setHoverIndex",a.properties.featureIndex)}}},computed:{trace:function(){return this.$store.state.trace}},watch:{trace:function(e,t){if(e&&(!t||e.geometry.coordinates.length!==t.geometry.coordinates.length||e.geometry.coordinates[0]!==t.geometry.coordinates[0])){var n=v["bbox"](e);this.$refs.map.mapObject.fitBounds([n.slice(0,2).reverse(),n.slice(2).reverse()])}}}},N=B,Q=(n("5a62"),n("d80a"),Object(s["a"])(N,f,d,!1,null,"20e355ed",null)),W=Q.exports;a["a"].use(u["a"]);var X=[{path:"/",name:"Home",component:W}],K=new u["a"]({routes:X}),R=K,V=(n("99af"),n("4de4"),n("b0c0"),n("2909")),U=n("2f62"),Z=n("ab09"),ee=n.n(Z);a["a"].use(U["a"]);var te=new U["a"].Store({state:{trace:!1,featureCollection:[],activeIndex:-1,hoverIndex:-1,filename:!1,mode:"default"},mutations:{setTrace:function(e,t){e.trace=t,e.activeIndex=-1,e.hoverIndex=-1},setIndex:function(e,t){e.activeIndex=t},setHoverIndex:function(e,t){e.hoverIndex=t},setFilename:function(e,t){e.filename=t.name},setMode:function(e,t){e.mode=t},setFeatureCollection:function(e,t){e.featureCollection=t},setTimeAtActiveIndex:function(e,t){var n=e.trace.geometry.coordinates;n[e.activeIndex][2]=t,e.trace=Object(x["a"])(Object(x["a"])({},e.trace),{},{geometry:Object(x["a"])(Object(x["a"])({},e.trace.geometry),{},{coordinates:n})})}},actions:{processGpx:function(e,t){var n=e.commit,a=t.file,o=t.content,r=(new DOMParser).parseFromString(o,"text/xml"),s=ee.a.gpx(r),i=s;"FeatureCollection"===s.type&&(i=s.features[0]),n("setTrace",i),n("setFilename",a),n("setFeatureCollection",s.features)}},modules:{},getters:{indexPoint:function(e){if(e.activeIndex<0)return null;var t=e.trace.geometry.coordinates[e.activeIndex];return[t[1],t[0]].concat(Object(V["a"])(t.slice(2)))},hoverPoint:function(e){if(e.hoverIndex<0)return null;var t=e.trace.geometry.coordinates[e.hoverIndex];return[t[1],t[0]].concat(Object(V["a"])(t.slice(2)))},pointsWithTimestamp:function(e){if(!e.trace)return[];var t=e.trace.geometry.coordinates.map((function(e,t){return{point:[e[1],e[0]].concat(Object(V["a"])(e.slice(2))),index:t}})).filter((function(e){return!isNaN(e.point[2])}));return t},getInterpolatedTime:function(e){var t=e.trace.geometry.coordinates;return function(e){var n=e;if(t[n][2])return t[n][2];var a=null;while(n<t.length-1&&!a)n+=1,t[n][2]&&(a=n);n=e;var o=null;while(n>0&&!o)n-=1,t[n][2]&&(o=n);if(n=e,!a&&!o)return null;if(!a||!o)return a?t[a][2]:t[o][2];var r=v["lineString"](t.slice(o,a+1)),s=v["lineString"](t.slice(o,n+1)),i=v["length"](s)/v["length"](r);return t[a][2]*i+(1-i)*t[o][2]}}}});a["a"].config.productionTip=!1,new a["a"]({router:R,store:te,render:function(e){return e(l)}}).$mount("#app")},"5a62":function(e,t,n){"use strict";var a=n("2180"),o=n.n(a);o.a},"85ec":function(e,t,n){},cffd:function(e,t,n){"use strict";var a=n("f44b"),o=n.n(a);o.a},d80a:function(e,t,n){"use strict";var a=n("0bf1"),o=n.n(a);o.a},f44b:function(e,t,n){}});
//# sourceMappingURL=app.13743d95.js.map