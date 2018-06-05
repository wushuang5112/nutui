/*! NutUI v1.2.7 Tue Jun 05 2018 20:16:14 GMT+0800 (中国标准时间) */
webpackJsonpnutui([10],{1027:function(t,e,r){(t.exports=r(2)()).push([t.i,"#previewBox{width:100%}#previewBox img{max-width:60%}",""])},1130:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"文件异步上传组件，支持预览本地图片。",showQrCode:!1}}),t._v(" "),r("h5",[t._v("示例")]),t._v(" "),r("div",{attrs:{id:"previewBox"},domProps:{innerHTML:t._s(t.preview)}}),t._v(" "),r("div",{attrs:{id:"progressBox"}},[t._v(t._s(t.progress))]),t._v(" "),r("nut-uploader",{attrs:{url:"",preview:!0},on:{start:t.uploadStart,progress:t.uploadProgress,success:t.uploadSuccess,failure:t.uploadFailure,preview:t.uploadPreview,showMsg:t.errTip}}),t._v(" "),r("nut-codebox",{attrs:{code:t.demo}}),t._v(" "),r("nut-codebox",{attrs:{code:t.demo2}}),t._v(" "),r("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),r("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tbl-wrapper"},[r("table",{staticClass:"u-full-width"},[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")]),t._v(" "),r("th",[t._v("可选值")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("url")]),t._v(" "),r("td",[t._v("上传地址")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("--")]),t._v(" "),r("td",[t._v("--")])]),t._v(" "),r("tr",[r("td",[t._v("preview")]),t._v(" "),r("td",[t._v("是否开启预览")]),t._v(" "),r("td",[t._v("Boolean")]),t._v(" "),r("td",[t._v("false")]),t._v(" "),r("td",[t._v("预览的是本地图片")])]),t._v(" "),r("tr",[r("td",[t._v("maxSize")]),t._v(" "),r("td",[t._v("上传最大限制(字节)")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("5242880(5M)")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("acceptType")]),t._v(" "),r("td",[t._v("支持上传的文件类型")]),t._v(" "),r("td",[t._v("Array")]),t._v(" "),r("td",[t._v("['image/jpeg', 'image/png', 'image/gif', 'image/bmp']")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("attach")]),t._v(" "),r("td",[t._v("附加上传的信息")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("{}")]),t._v(" "),r("td",[t._v("需要随图片一起通过Request Payload发送的参数及值")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tbl-wrapper"},[r("table",{staticClass:"u-full-width"},[r("thead",[r("tr",[r("th",[t._v("事件名")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("回调参数")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("start")]),t._v(" "),r("td",[t._v("上传开始时触发")]),t._v(" "),r("td",[t._v("--")])]),t._v(" "),r("tr",[r("td",[t._v("progress")]),t._v(" "),r("td",[t._v("上传进度")]),t._v(" "),r("td",[t._v("file:文件；loaded:已上传字节；total:总字节")])]),t._v(" "),r("tr",[r("td",[t._v("preview")]),t._v(" "),r("td",[t._v("预览回调")]),t._v(" "),r("td",[t._v("previewFile:预览的文件内容(base64)")])]),t._v(" "),r("tr",[r("td",[t._v("success")]),t._v(" "),r("td",[t._v("上传完成")]),t._v(" "),r("td",[t._v("file:文件；responseTxt:服务端响应内容。注意：数据传输完毕(xhr.status === 200)即触发此函数，业务逻辑层面有没有上传成功，可能还需要根据responseTxt相关字段判断，具体由接口决定")])]),t._v(" "),r("tr",[r("td",[t._v("failure")]),t._v(" "),r("td",[t._v("上传进度")]),t._v(" "),r("td",[t._v("file:文件；responseTxt:服务端响应内容。注意：数据传输层面失败(xhr.status !== 200)时触发此函数，业务逻辑层面的失败需要在success回调中根据相关字段判断，具体由接口决定")])]),t._v(" "),r("tr",[r("td",[t._v("showMsg")]),t._v(" "),r("td",[t._v("指定方法接收处理组件抛出的错误信息")]),t._v(" "),r("td",[t._v("唯一参数为提示信息内容")])])])])])}]}},1227:function(t,e,r){var v=r(1027);"string"==typeof v&&(v=[[t.i,v,""]]),v.locals&&(t.exports=v.locals);r(3)("417c7b99",v,!0,{})},890:function(t,e,r){var v=r(1)(r(988),r(1130),function(t){r(1227)},null,null);t.exports=v.exports},988:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo:'<nut-uploader \n url="" \n :preview="true" \n @start="uploadStart" \n @progress="uploadProgress"\n @success="uploadSuccess" \n @failure="uploadFailure" \n @preview="uploadPreview"\n @showMsg="errTip">\n </nut-uploader>',demo2:"export default {\n    methods:{\n      uploadStart(){\n        console.log('start');\n      },\n      uploadProgress(file, loaded, total){\n        this.progress = '上传进度：'+loaded/total*100+'%';\n      },\n      uploadPreview(previewFile){\n        this.preview ='本地预览图：<img src=\"'+previewFile+'\" alt=\"\"/>';\n      },\n      uploadSuccess(file, responseTxt){\n        alert('上传成功！');\n      },\n      uploadFailure(file, responseTxt){\n        alert('上传失败！');\n      },\n      //此方法用于接收和处理组件内部抛出的错误信息，如所选文件大小超过限制、文件类型不正确等等\n      errTip(msg){ \n        alert(msg); \n      }\n    }\n}",preview:"",progress:""}},methods:{uploadStart:function(){console.log("start")},uploadProgress:function(t,e,r){this.progress="上传进度："+e/r*100+"%"},uploadPreview:function(t){this.preview='本地预览图：<img src="'+t+'" alt=""/>'},uploadSuccess:function(t,e){alert("上传成功！")},uploadFailure:function(t,e){alert("上传失败！")},errTip:function(t){alert(t)}}}}});