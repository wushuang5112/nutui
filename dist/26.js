/*! NutUI v1.2.7 Tue Jun 05 2018 20:16:14 GMT+0800 (中国标准时间) */
webpackJsonpnutui([26],{1034:function(t,e,v){(t.exports=v(2)()).push([t.i,".radio-demo .nut-radio{display:inline-block;margin-right:5px}",""])},1137:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"radio-demo"},[v("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"单选按钮。",showQrCode:!0}}),t._v(" "),v("h5",[t._v("示例")]),t._v(" "),v("h6",[t._v("默认用法")]),t._v(" "),v("nut-radio",{attrs:{checked:t.radio1},on:{"update:checked":function(e){t.radio1=e}}}),t._v(" "),v("div",[t._v("radio1: "+t._s(t.radio1))]),t._v(" "),v("nut-codebox",{attrs:{code:t.demo1}}),t._v(" "),v("h6",[t._v("点击触发回调")]),t._v(" "),v("nut-radio",{attrs:{value:"vv"},on:{"input-check":t.callback}}),t._v(" "),v("nut-codebox",{attrs:{code:t.demo2}}),t._v(" "),v("nut-codebox",{attrs:{code:"export default {\n  methods:{\n      callback(checkedStatus,event){\n            alert(checkedStatus);\n      }\n  }\n}"}}),t._v(" "),v("h6",[t._v("禁用选项")]),t._v(" "),v("nut-radio",{attrs:{disabled:!0}}),t._v(" "),v("nut-radio"),t._v(" "),v("nut-codebox",{attrs:{code:t.demo3}}),t._v(" "),v("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),v("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"tbl-wrapper"},[v("table",{staticClass:"u-full-width"},[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("可选值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("value")]),t._v(" "),v("td",[t._v("input的value属性")]),t._v(" "),v("td",[t._v("Number，String")]),t._v(" "),v("td",[t._v("''")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("id")]),t._v(" "),v("td",[t._v("input的id属性")]),t._v(" "),v("td",[t._v("Number，String")]),t._v(" "),v("td",[t._v("''")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("checked.sync")]),t._v(" "),v("td",[t._v("是否选中")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("true/false")])]),t._v(" "),v("tr",[v("td",[t._v("disabled")]),t._v(" "),v("td",[t._v("是否禁用")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("true/false")])])])])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"tbl-wrapper"},[v("table",{staticClass:"u-full-width"},[v("thead",[v("tr",[v("th",[t._v("事件名")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("回调参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("input-check")]),t._v(" "),v("td",[t._v("选择时触发回调函数")]),t._v(" "),v("td",[t._v("是否选中、value、事件对象")])])])])])}]}},1234:function(t,e,v){var d=v(1034);"string"==typeof d&&(d=[[t.i,d,""]]),d.locals&&(t.exports=d.locals);v(3)("0fa2f368",d,!0,{})},873:function(t,e,v){var d=v(1)(v(971),v(1137),function(t){v(1234)},null,null);t.exports=d.exports},971:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var d,a=v(20);(d=a)&&d.__esModule;e.default={data:function(){return{radio1:!1,demo1:'<nut-radio \n:checked.sync="radio1"\n></nut-radio>',demo2:'<nut-radio \n@input-check="callback"\n></nut-radio>',demo3:'<nut-radio \n:disabled="true"\n></nut-radio>\n<nut-radio></nut-radio>'}},components:{},methods:{callback:function(t,e,v){alert(e),console.log(v)}}}}});